import { useMutation, useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import {
	deleteEmpleado,
	editEmpleado,
	fetchAreas,
	fetchEmpleados,
} from '../api'

export const useEmpleadoList = () => {
	const [isActive, setIsActive] = useState({
		nombre: true,
		apellido: true,
		dni: true,
		esDesarrollador: true,
		descripcion: true,
		area: true,
		fechaNac: true,
	})

	const handleActiveCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsActive({
			...isActive,
			[event.target.name]: event.target.checked,
		})
	}

	const areaQuery = useQuery(['areas'], fetchAreas, {
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	})

	const empleadosQuery = useQuery(['empleados'], fetchEmpleados, {
		enabled: areaQuery.data ? true : false,
		refetchOnMount: true,
		refetchOnWindowFocus: false,
	})

	const empleadoDelete = useMutation((id: string) => deleteEmpleado(id), {
		onSuccess: () => {
			empleadosQuery.refetch()
		},
	})

	const empleadoEdit = useMutation((data: any) => editEmpleado(data), {
		onSuccess: () => {
			empleadosQuery.refetch()
		},
	})

	return {
		empleados: empleadosQuery,
		areas: areaQuery,
		empleadoDelete: empleadoDelete,
		empleadoEdit: empleadoEdit,
		isActive,
		handleActiveCheck,
	}
}
