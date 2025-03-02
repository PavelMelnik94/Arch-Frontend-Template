import type { ButtonProps } from 'react-aria-components'
import { cc } from '@/utils/combineClasses'
import { Button as AriaButton } from 'react-aria-components'
import CustomSVG from '../CustomSVG'
import styles from './styles.module.scss'

interface Props extends ButtonProps {
  children: JSX.Element
  variant?: 'solid' | 'outline'
  color?: 'first' | 'second' | 'third' | 'fourth' | 'fifth'
  rounding?: 'first' | 'second'
  size?: 'big' | 'regular' | 'small'
  className?: string
  iconClassName?: string
}

function IconButton(props: Props) {
  const {
    children,
    variant = 'solid',
    color = 'first',
    size = 'regular',
    rounding = 'first',
    className,
    iconClassName,
  } = props

  return (
    <AriaButton
      {...props}
      className={cc(
        styles[`button_variant_${variant}`],
        styles[`button_color_${color}`],
        styles[`button_size_${size}`],
        styles[`button_rounding_${rounding}`],
        className,
      )}
    >
      <CustomSVG className={cc(styles.icon, iconClassName)}>{children}</CustomSVG>
    </AriaButton>
  )
}

export default IconButton
