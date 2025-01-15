/* eslint-disable react-refresh/only-export-components */
import { Paths } from 'constants/paths'
import { NotFoundRoute, Route } from '@tanstack/react-router'
import Main from 'components/pages/Main'
import NotFound from 'components/pages/NotFound'
import Welcome from 'components/pages/Welcome'
import Suspense from 'components/wrappers/Suspense/Suspense'
import { rootRoute } from './router'

const welcomeRoute = new Route({
  getParentRoute: () => rootRoute,
  path: Paths.WELCOME,
  component: () => (
    <Suspense>
      <Welcome />
    </Suspense>
  )
})

const mainRoute = new Route({
  getParentRoute: () => rootRoute,
  path: Paths.MAIN,
  component: () => (
    <Suspense>
      <Main />
    </Suspense>
  )
})

export const notFoundRoute = new NotFoundRoute({
  getParentRoute: () => rootRoute,
  component: () => (
    <Suspense>
      <NotFound />
    </Suspense>
  )
})

export const routes = [welcomeRoute, mainRoute]
