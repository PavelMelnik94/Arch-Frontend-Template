import { Images } from 'constants/images'
import Loader from 'components/ui/Loader'
import { User } from '../../dummies/User'
import styles from './styles.module.scss'
import useHeader from './useHeader'

const Header = () => {
  const { user, isUserPending } = useHeader()

  return (
    <header className={styles.headerRoot}>
      {isUserPending ? (
        <Loader />
      ) : (
        user && (
          <User
            username={user.username || `${user.firstName} ${user.lastName}`}
            avatar={user.image ? user.image : Images.common.defaultAvatar}
          />
        )
      )}
    </header>
  )
}

export default Header
