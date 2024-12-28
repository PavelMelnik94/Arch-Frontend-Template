/* eslint-disable react-refresh/only-export-components */
import { DEFAULT_ARIA_LOCALE } from 'constants/variables'
import { RouterProvider } from '@tanstack/react-router'
import { I18nProvider } from 'react-aria'
import { router } from './constants/router'
import { withAppProviders } from './providers/appProvider'
import './styles/global.scss'
import { useEffect } from 'react'
import { useUserStore } from 'stores/userStore'
import { QueryKeys } from 'constants/queryKeys'
import { useQuery } from '@tanstack/react-query'
import { getUser } from 'api/user'

function App() {
  const setUser = useUserStore(state => state.setUser)
  const fakeUserId = 1;

  const { data: user } = useQuery({
    queryKey: [QueryKeys.USER],
    queryFn: () => getUser({id: fakeUserId})
  })

  useEffect(() => {
    if (user) {
      setUser(user)
    }
  }, [user])

  return (
    <I18nProvider locale={DEFAULT_ARIA_LOCALE}>
      <RouterProvider router={router} />
    </I18nProvider>
  )
}

export default withAppProviders(App)
