import { Icons } from 'constants/icons'
import { Button } from 'react-aria-components'
import { cc } from 'utils/combineClasses'
import CustomSVG from '../CustomSVG'
import styles from './styles.module.scss'

interface Props {
  color: 'first' | 'second'
  value: number
  onDecrement: () => void
  onIncrement: () => void
  className?: string
  minValue?: number
  maxValue?: number
  isDisabled?: boolean
}

const NumberInput = ({
  color,
  value,
  onDecrement,
  onIncrement,
  className,
  minValue,
  maxValue,
  isDisabled
}: Props) => {
  return (
    <div className={cc(styles.numberInputRoot, styles[`numberInput_color_${color}`], className)}>
      <div className={styles.inputWrapper}>
        <Button
          type="button"
          className={cc(styles.actionMinus, styles.action)}
          onPress={onDecrement}
          isDisabled={value === minValue || isDisabled}
        >
          <CustomSVG className={styles.actionIcon}>{Icons.common.minus}</CustomSVG>
        </Button>
        <span className={styles.number}>{value}</span>
        <Button
          type="button"
          className={cc(styles.actionPlus, styles.action)}
          onPress={onIncrement}
          isDisabled={value === maxValue || isDisabled}
        >
          <CustomSVG className={styles.actionIcon}>{Icons.common.plus}</CustomSVG>
        </Button>
      </div>
    </div>
  )
}

export default NumberInput
