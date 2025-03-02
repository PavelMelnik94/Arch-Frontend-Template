import type { ReactNode } from 'react'
import Loader from '@/components/ui/Loader'
import { Suspense as ReactSuspense } from 'react'
import styles from './styles.module.scss'

interface Props {
  children: ReactNode
}

function Suspense({ children }: Props) {
  return (
    <ReactSuspense
      fallback={(
        <div className={styles.loaderContainerRoot}>
          <Loader className={styles.loader} />
        </div>
      )}
    >
      {children}
    </ReactSuspense>
  )
}

export default Suspense
