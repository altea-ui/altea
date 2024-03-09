import React from 'react'

import { SVGAttributes } from 'react'

export interface IconProps {
  size?: string | number
  color?: string
}

type NativeAttrs = Omit<SVGAttributes<SVGElement>, keyof IconProps>
export type IconPropsNative = IconProps & NativeAttrs

const ChevronUp = ({ size = 24, color, style, ...props }: IconPropsNative) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      shapeRendering="geometricPrecision"
      viewBox="0 0 24 24"
      {...props}
      height={size}
      width={size}
      style={{ ...style, color: color }}>
      <path d="m18 15-6-6-6 6" />
    </svg>
  )
}
export default ChevronUp
