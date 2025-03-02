import type { UsersResponse } from '@/models/user/api'
import { getUsers } from '@/api/user'
import { QueryKeys } from '@/constants/queryKeys'
import { useQuery, useQueryClient } from '@tanstack/react-query'

function usePersonsList() {
  const queryClient = useQueryClient()

  const deletePerson = (userId: number) => {
    queryClient.setQueryData([QueryKeys.USERS], (usersData: UsersResponse) => ({
      ...usersData,
      users: usersData.users.filter(user => user.id !== userId),
    }))
  }

  const { data: usersData, isPending: isUsersPending } = useQuery({
    queryKey: [QueryKeys.USERS],
    queryFn: () => getUsers(),
  })

  return { users: usersData?.users, isUsersPending, deletePerson }
}

export default usePersonsList
