
import { ReactNode } from 'react'
import { cc } from 'utils/combineClasses'
import { Header } from '../../widgets/Header'
import styles from './styles.module.scss'

interface Props {
  children: ReactNode
  className?: string
}

const MainLayout = ({ children, className }: Props) => {
  return (
    <div className={cc(styles.mainLayoutRoot, className)}>
        <Header />
        <div className={styles.content}>{children}</div>
    </div>
  )
}

export default MainLayout
