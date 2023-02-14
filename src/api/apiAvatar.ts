import { api } from './api'
import { Empleado } from '../interfaces/'

export const postAvatar = async (empleado: Empleado, file: File) => {
  const formData = new FormData()
  formData.append('image', file, file.name)
  formData.append('_id', empleado._id as string)
  formData.append('nombre', `${empleado.nombre} ${empleado.apellido}`)

  await api({
    method: 'post',
    url: 'api/avatar',
    data: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
  })
}

export const getAvatarByID = async (id: string) => {
  return await api({
    method: 'get',
    url: `api/avatar/${id}`,
  })
}

export const deleteAvatarByID = async (id: string) => {
  await api({
    method: 'delete',
    url: `api/avatar/${id}`,
  })
}
