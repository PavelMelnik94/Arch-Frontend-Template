import type { LinkProps } from '@tanstack/react-router'
import { cc } from '@/utils/combineClasses'
import { Link } from '@tanstack/react-router'
import CustomSVG from '../CustomSVG'
import styles from './styles.module.scss'

interface Props extends LinkProps {
  children: JSX.Element
  variant?: 'solid' | 'outline'
  color?: 'first' | 'second' | 'third' | 'fourth'
  rounding?: 'first' | 'second'
  size?: 'big' | 'regular' | 'small'
  className?: string
  iconClassName?: string
}

function IconButtonLink(props: Props) {
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
    <Link
      {...props}
      className={cc(
        styles.button,
        styles[`button_variant_${variant}`],
        styles[`button_color_${color}`],
        styles[`button_size_${size}`],
        styles[`button_rounding_${rounding}`],
        styles.iconButtonLink,
        className,
      )}
    >
      <CustomSVG className={cc(styles.icon, iconClassName)}>{children}</CustomSVG>
    </Link>
  )
}

export default IconButtonLink
