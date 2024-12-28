export interface UserResponse {
  id: number
  username: string | null
  firstName: string | null
  lastName: string | null
  image: string | null
}


export interface UserRequest {
  id: number;
}