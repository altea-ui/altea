import React, { ReactNode, HTMLAttributes } from 'react'
import Card from '../card'
import useClasses from '../use-classes'
import useScale, { withScale } from '../use-scale'
import useTheme from '../use-theme'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode
  className?: string
  footer?: ReactNode
  name?: string
}

type NativeAttrs = Omit<React.AnchorHTMLAttributes<any>, keyof Props>
export type ModuleProps = Props & NativeAttrs

const ModuleComponent: React.FC<ModuleProps> = ({
  children,
  className,
  footer,
  name,
}) => {
  const theme = useTheme()
  const { SCALES } = useScale()
  return (
    <>
      <Card className={useClasses('module', className)}>
        {name && (
          <header>
            <div className={useClasses('module-name')}>{name}</div>
          </header>
        )}
        <Card.Content>{children}</Card.Content>
        {footer && <div className={useClasses('module-footer')}>{footer}</div>}
      </Card>
      <style jsx>
        {`
          .module {
            height: 100%;
            width: 100%;
            background: ${theme.palette.accents_1 + 'B2'};
            display: flex;
            flex-direction: column;
          }
          .module-name {
            border: 1px solid ${theme.palette.border};
            background-color: ${theme.palette.accents_1};
            color: ${theme.palette.accents_5};
            height: auto;
            line-height: 1.35em;
            display: inline-flex;
            align-items: center;
            font-size: ${SCALES.font(0.8125)};
            padding: ${SCALES.font(0.32)} ${SCALES.font(0.5)} ${SCALES.font(0.32)}
              ${SCALES.font(0.5)};
            width: auto;
            border-top-left-radius: calc(${theme.layout.radius} - 1px);
            border-bottom-right-radius: ${theme.layout.radius};
            text-transform: uppercase;
            margin-top: -1px;
            margin-left: -1px;
          }
          .module-footer {
            display: flex;
            justify-content: center;
            margin-top: auto;
          }
        `}
      </style>
    </>
  )
}

ModuleComponent.displayName = 'AlteaModule'
const Module = withScale(ModuleComponent)
export default Module
