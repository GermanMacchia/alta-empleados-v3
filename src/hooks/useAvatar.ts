import { useQuery, QueryClient, useQueryClient } from '@tanstack/react-query'
import { getAvatarByID, postAvatar, deleteAvatarByID } from '../api/apiAvatar'
import { useState } from 'react'
import { Empleado } from '../interfaces/empleado.interface'

export const useAvatar = (id: string) => {
  const [preview, setPreview] = useState('')
  const queryClient = useQueryClient()
  const avatarQuery = useQuery(['avatar', id], () => getAvatarByID(id), {
    refetchOnMount: true,
    cacheTime: 0,
  })

  const deleteAvatar = () => {
    setPreview('')
    deleteAvatarByID(id)
    queryClient.setQueriesData(['avatar', id], { data: '' })
  }

  const handleNewAvatar = async (e: any, empleado: Empleado) => {
    const inputFile = e.target.files[0]
    const objectUrl = URL.createObjectURL(inputFile)
    setPreview(objectUrl)
    postAvatar(empleado, inputFile)
    return () => URL.revokeObjectURL(objectUrl)
  }

  return {
    avatar: avatarQuery.data?.data[0],
    isLoading: avatarQuery.isLoading,
    handleNewAvatar,
    preview,
    deleteAvatar,
  }
}
