import { errorMessages, ErrorTypes } from '@/models/errors'
import { isAxiosError } from 'axios'

export function getErrorMessage(type?: string) {
  const errorType = Object.values(ErrorTypes).find(errorType => errorType === type)
  return errorType ? errorMessages[errorType] : errorMessages.unknown
}

export function getErrorType(error: unknown): string {
  if (isAxiosError(error)) {
    const errorData = error.response?.data
    if (errorData && 'type' in errorData) {
      return errorData.type
    }
  }
  return ErrorTypes.UNKNOWN
}
