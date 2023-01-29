import { useMutation, useQuery } from '@tanstack/react-query'
import { fetchAreas } from '../api'
import { Empleado } from '../interfaces/'
import { postEmpleado } from '../api/apiEmpleado'

export const useEmpleadoForm = () => {
	const areaQuery = useQuery(['areas'], fetchAreas, {
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	})

	const altaEmpleadoMutation = useMutation((nuevoEmpleado: Empleado) =>
		postEmpleado(nuevoEmpleado)
	)

	return {
		areas: areaQuery.data,
		altaEmpleado: altaEmpleadoMutation,
	}
}
