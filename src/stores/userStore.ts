import { create } from 'zustand'
import { UserResponse } from 'models/user/api'

interface State {
  user: UserResponse
  setUser: (data: UserResponse) => void
}

export const useUserStore = create<State>(set => ({
  user: {
    id: 0,
    username: null,
    firstName: null,
    lastName: null,
    image: null
  },
  setUser: data => set(_state => ({ user: data }))
}))
