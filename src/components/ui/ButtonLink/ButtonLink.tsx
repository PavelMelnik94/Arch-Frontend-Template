
import { Link, LinkProps } from '@tanstack/react-router'
import { ReactNode } from 'react'
import { cc } from 'utils/combineClasses'
import Loader from '../Loader'
import styles from './styles.module.scss'

interface Props extends LinkProps {
  children: string | ReactNode
  variant?: 'solid' | 'outline'
  color?: 'first' | 'second' | 'third'
  className?: string
  externalHref?: string
  nonePadding?: boolean
  maxWidth?: boolean
  isDisabled?: boolean
  isLoading?: boolean
}

const ButtonLink = (props: Props) => {
  const {
    className,
    children,
    variant = 'solid',
    color = 'first',
    maxWidth,
    externalHref,
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
        className
      )}
      disabled={isLoading || isDisabled}
      {...otherProps}
    >
      {isLoading ? <Loader color={color} /> : children}
    </Link>
  )
}

export default ButtonLink
