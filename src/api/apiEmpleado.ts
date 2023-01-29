// import { sleep } from '../helpers'
import { api } from './api'
import { Empleado } from '../interfaces'

export const fetchEmpleados = async () => {
	// await sleep(1)
	const { data } = await api.get('/api/empleado')
	return data
}

export const deleteEmpleado = async (id: string) => {
	// await sleep(1)
	return await api.delete(`/api/empleado/${id}`)
}

export const editEmpleado = async (data: Empleado) => {
	// await sleep(1)
	return await api.patch(`/api/empleado/${data._id}`, data)
}

export const postEmpleado = async (nuevoEmpleado: Empleado) => {
	// await sleep(1)
	return await api.post('/api/empleado', nuevoEmpleado)
}
