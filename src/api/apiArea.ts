// import { sleep } from '../helpers/sleep'
import { api } from './api'
import { Area } from '../interfaces'
import { sleep } from '../helpers'

export const fetchAreas = async () => {
  await sleep(2)
  const { data } = await api.get('/api/area')
  return data
}

export const postAreas = async (nuevaArea: Area) => {
  const { nombre } = nuevaArea
  // await sleep(1)
  return await api.post('/api/area', { nombre })
}

export const deleteArea = async (id: string) => {
  // await sleep(1)
  return await api.delete(`/api/area/${id}`)
}

export const editArea = async (data: Area) => {
  // await sleep(1)
  return await api.patch(`/api/area/${data._id}`, data)
}
