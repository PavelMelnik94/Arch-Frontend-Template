import type { LinkProps } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import { cc } from '@/utils/combineClasses'
import { Link } from '@tanstack/react-router'
import Loader from '../Loader'
import styles from './styles.module.scss'

interface Props extends LinkProps {
  children: string | ReactNode
  variant?: 'solid' | 'outline'
  color?: 'first' | 'second' | 'third'
  className?: string
  nonePadding?: boolean
  maxWidth?: boolean
  isDisabled?: boolean
  isLoading?: boolean
}

function ButtonLink(props: Props) {
  const {
    className,
    children,
    variant = 'solid',
    color = 'first',
    maxWidth,
    isLoading = false,
    isDisabled = false,
    ...otherProps
  } = props

  return (
    <Link
      className={cc(
        styles[`button_variant_${variant}`],
        styles[`button_color_${color}`],
        isLoading && styles.buttonLoading,
        maxWidth && styles.maxWidth,
        className,
      )}
      disabled={isLoading || isDisabled}
      {...otherProps}
    >
      {isLoading ? <Loader color={color} /> : children}
    </Link>
  )
}

export default ButtonLink
