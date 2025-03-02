import type { UserRequest, UserResponse, UsersResponse } from '@/models/user/api'
import { http } from '@/app/config/axios/http'

export function getUser(data: UserRequest) {
  return http.get<UserResponse, UserResponse>(`/users/${data.id}`)
}

export const getUsers = () => http.get<UsersResponse, UsersResponse>('/users')
