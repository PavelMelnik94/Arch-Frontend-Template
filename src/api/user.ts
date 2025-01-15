import { http } from 'app/config/axios/http'
import { UserRequest, UserResponse, UsersResponse } from 'models/user/api'

export const getUser = (data: UserRequest) =>
  http.get<UserResponse, UserResponse>(`/users/${data.id}`)

export const getUsers = () => http.get<UsersResponse, UsersResponse>('/users')
