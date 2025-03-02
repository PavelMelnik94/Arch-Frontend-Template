export function parseRetryAfter(retryAfter: string): number {
  const retryAfterSeconds = Number.parseInt(retryAfter, 10)

  if (!Number.isNaN(retryAfterSeconds)) {
    return retryAfterSeconds * 1000
  }
  else {
    const retryAfterDate = new Date(retryAfter)
    const now = new Date()
    const delay = retryAfterDate.getTime() - now.getTime()
    return delay > 0 ? delay : 1000
  }
}
