import { Images } from 'constants/images'
import styles from './styles.module.scss'
import { User } from '../../dummies/User'
import useHeader from './useHeader'
import Loader from 'components/ui/Loader'

const Header = () => {
  const {user,isUserPending}=useHeader()

  return (
    <header className={styles.headerRoot}>
      {isUserPending?<Loader/>:
      <User
        username={user.username || `${user.firstName} ${user.lastName}`}
        avatar={user.image ? user.image : Images.common.defaultAvatar}
      />
    }
    </header>
  )
}

export default Header
