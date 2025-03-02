import IconButton from '@/components/ui/IconButton'
import { Icons } from '@/constants/icons'
import { cc } from '@/utils/combineClasses'
import styles from './styles.module.scss'

interface Props {
  avatar: string
  fullname: string
  companyTitle: string
  companyName: string
  age: number
  handlePressDelete: () => void
  className?: string
}

function Person({
  avatar,
  fullname,
  companyTitle,
  companyName,
  age,
  handlePressDelete,
  className,
}: Props) {
  return (
    <div className={cc(styles.personRoot, className)}>
      <div className={cc(styles.alignMiddle, styles.alignCenter)}>
        <img className={styles.avatar} src={avatar} alt="" />
      </div>
      <div className={styles.alignMiddle}>
        <p className={styles.text}>{fullname}</p>
      </div>
      <div className={styles.alignMiddle}>
        <p className={styles.text}>{companyTitle}</p>
      </div>
      <div className={styles.alignMiddle}>
        <p className={styles.text}>{companyName}</p>
      </div>
      <div className={styles.alignMiddle}>
        <p className={styles.text}>{age}</p>
      </div>
      <div className={cc(styles.alignMiddle, styles.alignCenter)}>
        <IconButton onPress={handlePressDelete}>{Icons.common.trash}</IconButton>
      </div>
    </div>
  )
}

export default Person
