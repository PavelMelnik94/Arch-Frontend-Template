
import { Paths } from 'constants/paths'
import { useTranslation } from 'react-i18next'
import ButtonLink from 'components/ui/ButtonLink'
import styles from './styles.module.scss'

const Welcome = () => {
  const { t } = useTranslation(['welcome'])

  return (
    <div className={styles.welcomeRoot}>
      <div className={styles.contentBlock}>
        <p className={styles.welcomeDescription}>{t('welcome:description')}</p>
        <ButtonLink
          color="second"
          to={Paths.MAIN}
          maxWidth
          className={styles.welcomeButton}
        >
          {t('welcome:button')}
        </ButtonLink>
      </div>
    </div>
  )
}

export default Welcome
