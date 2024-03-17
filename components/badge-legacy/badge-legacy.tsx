import { withScale } from '../use-scale'
import useTheme from '../use-theme'
import type { ReactNode } from 'react'

interface Props {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  icon?: ReactNode
}

const defaultProps = {
  className: '',
  size: 'md',
}

type NativeAttrs = Omit<React.AnchorHTMLAttributes<any>, keyof Props>
export type BadgeLegacyProps = Props & NativeAttrs

const BadgeLegacyComponent: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
  size,
  icon,
  ...props
}: BadgeLegacyProps & typeof defaultProps) => {
  const theme = useTheme()
  return (
    <>
      <span
        className={`badge ${
          size === 'lg' ? 'lg' : size === 'md' ? 'md' : 'sm'
        } ${className}`}
        {...props}>
        <span className={'content-container'}>
          {icon && <span className={'icon-container'}>{icon}</span>}
          {children}
        </span>
      </span>
      <style jsx>{`
        .badge {
          --badge-color: ${theme.palette.foreground};
          --badge-bg-color: ${theme.palette.success};
          --badge-font-size: 12px;
          --badge-height: 24px;
          --badge-padding-x: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          border-radius: 9999px;
          font-weight: 500;
          text-transform: capitalize;
          white-space: nowrap;
          line-height: 1;
          font-feature-settings: 'tnum';
          font-variant-numeric: tabular-nums;
          color: var(--badge-color);
          background-color: var(--badge-bg-color);
          font-size: var(--badge-font-size);
          height: var(--badge-height);
          padding: 0 var(--badge-padding-x);
        }

        .sm {
          --badge-font-size: 11px;
          --badge-height: 20px;
          --badge-padding-x: 6px;
          --badge-icon-size: 11px;
          --badge-icon-spacing: 2px;
        }

        .md {
          --badge-font-size: 12px;
          --badge-height: 24px;
          --badge-padding-x: 10px;
          --badge-icon-size: 14px;
          --badge-icon-spacing: 4px;
        }

        .lg {
          --badge-font-size: 14px;
          --badge-height: 32px;
          --badge-padding-x: 12px;
          --badge-icon-size: 16px;
          --badge-icon-spacing: 6px;
        }

        .numerical {
          min-width: var(--geist-space-6x);
        }

        .icon-container svg {
          display: block;
          height: var(--badge-icon-size);
          width: var(--badge-icon-size);
          stroke-width: 1.5;
        }

        .content-container {
          display: flex;
          align-items: center;
          gap: var(--badge-icon-spacing);
        }
      `}</style>
    </>
  )
}

BadgeLegacyComponent.displayName = 'AlteaBadgeLegacy'
const BadgeLegacy = withScale(BadgeLegacyComponent)
export default BadgeLegacy
