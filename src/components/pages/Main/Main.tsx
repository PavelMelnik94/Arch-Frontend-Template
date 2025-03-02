import MainLayout from '@/components/layouts/MainLayout'
import PersonsList from '@/components/widgets/PersonsList'
import styles from './styles.module.scss'

function Main() {
  return (
    <MainLayout>
      <div className={styles.mainRoot}>
        <PersonsList />
      </div>
    </MainLayout>
  )
}

export default Main
