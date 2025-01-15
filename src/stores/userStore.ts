import { create } from 'zustand'
import { UserResponse } from 'models/user/api'

interface State {
  user: UserResponse | null
  setUser: (data: UserResponse) => void
}

export const useUserStore = create<State>(set => ({
  user: null,
  setUser: data => set(_state => ({ user: data }))
}))
