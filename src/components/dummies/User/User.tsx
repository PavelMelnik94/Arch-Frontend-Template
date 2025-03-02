import styles from './styles.module.scss'

interface Props {
  username: string | null
  avatar: string
}

function User({ username, avatar }: Props) {
  return (
    <div className={styles.user}>
      <div className={styles.avatarContainer}>
        <img className={styles.avatarIcon} src={avatar} alt="" />
      </div>
      {username && (
        <p className={styles.username}>
          @
          {username}
        </p>
      )}
    </div>
  )
}

export default User
