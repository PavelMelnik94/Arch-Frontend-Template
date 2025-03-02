import type { CustomAxiosError } from '@/models/common/api'

export function isAxiosError(error: any): error is CustomAxiosError {
  return 'response' in error
}
