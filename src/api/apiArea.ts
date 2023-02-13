// import { sleep } from '../helpers/sleep'
import { api } from './api'
import { Area } from '../interfaces'

export const fetchAreas = async () => {
  // await sleep(1)
  const { data } = await api({ method: 'get', url: '/api/area' })
  return data
}

export const postAreas = async (nuevaArea: Area) => {
  const { nombre } = nuevaArea
  // await sleep(1)
  return await api({ method: 'post', url: '/api/area', data: { nombre } })
}

export const deleteArea = async (id: string) => {
  // await sleep(1)
  return await api({ method: 'delete', url: `/api/area/${id}` })
}

export const editArea = async (data: Area) => {
  // await sleep(1)
  return await api({
    method: 'patch',
    url: `/api/area/${data._id}`,
    data: data,
  })
}
