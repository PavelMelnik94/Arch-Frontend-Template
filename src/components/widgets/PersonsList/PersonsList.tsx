import Person from '@/components/dummies/Person'
import Loader from '@/components/ui/Loader'
import { useTranslation } from 'react-i18next'
import styles from './styles.module.scss'
import usePersonsList from './usePersonsList'

interface Props {
  className?: string
}

function PersonsList({ className }: Props) {
  const { users, isUsersPending, deletePerson } = usePersonsList()
  const { t } = useTranslation(['main'])

  return (
    <div className={className}>
      <div className={styles.personsListHeader}>
        <div></div>
        <p className={styles.personsListHeaderText}>{t('main:personsListHeader.fullName')}</p>
        <p className={styles.personsListHeaderText}>{t('main:personsListHeader.companyTitle')}</p>
        <p className={styles.personsListHeaderText}>{t('main:personsListHeader.companyName')}</p>
        <p className={styles.personsListHeaderText}>{t('main:personsListHeader.age')}</p>
        <div></div>
        <div></div>
      </div>
      {isUsersPending
        ? (
            <Loader />
          )
        : (
            users?.map(user => (
              <Person
                key={user.id}
                avatar={user.image}
                fullname={`${user.firstName} ${user.lastName}`}
                companyTitle={user.company.title}
                companyName={user.company.name}
                age={user.age}
                handlePressDelete={() => deletePerson(user.id)}
              />
            ))
          )}
    </div>
  )
}

export default PersonsList
