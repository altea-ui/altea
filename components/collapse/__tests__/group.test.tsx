import React from 'react'
import { mount, render } from 'enzyme'
import { Collapse } from 'components'
import { updateWrapper } from 'tests/utils'

describe('Collapse Group', () => {
  it('should render correctly', () => {
    const wrapper = mount(
      <Collapse.Group>
        <Collapse title="title1">content1</Collapse>
        <Collapse title="title2">content2</Collapse>
      </Collapse.Group>,
    )

    expect(wrapper).toMatchSnapshot()
    expect(() => wrapper.unmount()).not.toThrow()
  })

  it('should be no errors when children are missing', () => {
    const wrapper = mount(<Collapse.Group></Collapse.Group>)

    expect(wrapper).toMatchSnapshot()
    expect(() => wrapper.unmount()).not.toThrow()
  })

  it('should work without accordion', () => {
    const wrapper = render(
      <Collapse.Group accordion={false}>
        <Collapse title="title1">content1</Collapse>
        <Collapse title="title2">content2</Collapse>
      </Collapse.Group>,
    )
    expect(wrapper).toMatchSnapshot()
  })

  it('should be display all when without accordion', async () => {
    const wrapper = mount(
      <Collapse.Group accordion={false}>
        <Collapse title="title1">content1</Collapse>
        <Collapse title="title2">content2</Collapse>
      </Collapse.Group>,
    )

    const views = wrapper.find('.view')
    views.at(0).simulate('click')
    views.at(1).simulate('click')
    await updateWrapper(wrapper, 300)
    expect(wrapper.find('.expanded').length).toBe(2)

    views.at(0).simulate('click')
    views.at(1).simulate('click')
    await updateWrapper(wrapper, 300)
    expect(wrapper.find('.expanded').length).toBe(0)
  })

  it('should be display one when in accordion mode', async () => {
    const wrapper = mount(
      <Collapse.Group>
        <Collapse title="title1">content1</Collapse>
        <Collapse title="title2">content2</Collapse>
      </Collapse.Group>,
    )

    const views = wrapper.find('.view')
    views.at(0).simulate('click')
    views.at(1).simulate('click')
    await updateWrapper(wrapper, 300)
    expect(wrapper.find('.expanded').length).toBe(1)

    views.at(1).simulate('click')
    await updateWrapper(wrapper, 300)
    expect(wrapper.find('.expanded').length).toBe(0)
  })
})
