export enum Paths {
  WELCOME = '/',
  MAIN = '/main',
  NOT_FOUND = '/404'
}

type Pathnames = {
  [key in Paths]: string
}

export const PathsNames: Pathnames = {
  [Paths.WELCOME]: 'common:pathnames.welcome',
  [Paths.MAIN]: 'common:pathnames.main',
  [Paths.NOT_FOUND]: 'common:pathnames.notFound'
}
