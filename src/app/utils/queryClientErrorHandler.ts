import type { Query, QueryKey } from '@tanstack/react-query'
import { Paths } from '@/constants/paths'

export async function queryClientErrorHandler(type: string, query?: Query<unknown, unknown, unknown, QueryKey>) {
  if (query?.meta?.errCode) {
    location.href = Paths.NOT_FOUND
  }
}
