import { cc } from '@/utils/combineClasses'
import styles from './styles.module.scss'

interface Props {
  value: number
  className?: string
}

function LabelCounter({ value, className }: Props) {
  return <div className={cc(styles.labelCounterRoot, className)}>{value}</div>
}

export default LabelCounter
