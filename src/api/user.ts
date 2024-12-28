import { http } from 'app/config/axios/http'
import {
  UserRequest,
  UserResponse
} from 'models/user/api'

export const getUser = (data: UserRequest) => http.get<UserResponse, UserResponse>(`/users/${data.id}`)