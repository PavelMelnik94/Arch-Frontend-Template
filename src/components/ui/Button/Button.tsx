import { ReactNode } from 'react'
import { Button as AriaButton, ButtonProps } from 'react-aria-components'
import { cc } from 'utils/combineClasses'
import styles from './styles.module.scss'

interface Props extends ButtonProps {
  children: string | ReactNode
  variant?: 'solid' | 'outline'
  color?: 'first'
  className?: string
  nonePadding?: boolean
  maxWidth?: boolean
}

const Button = (props: Props) => {
  const { className, children, variant = 'solid', color = 'first', maxWidth, ...otherProps } = props

  return (
    <AriaButton
      {...otherProps}
      className={cc(
        styles[`button_variant_${variant}`],
        styles[`button_color_${color}`],
        maxWidth && styles.maxWidth,
        className
      )}
    >
      {children}
    </AriaButton>
  )
}

export default Button
