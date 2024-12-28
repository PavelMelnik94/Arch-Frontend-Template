import { cc } from 'utils/combineClasses'
import styles from './styles.module.scss'
import MainLayout from 'components/layouts/MainLayout'

interface Props {
  className?: string
}

const Main = ({ className }: Props) => {
  return (
    <MainLayout>
      <div className={cc(styles.mainRoot, className)}>
        Main component
      </div>
    </MainLayout>
  )
}


export default Main
