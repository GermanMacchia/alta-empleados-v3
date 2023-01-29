import { useMutation, useQuery } from '@tanstack/react-query'
import { deleteArea, editArea, fetchAreas, postAreas } from '../api'
import { Area } from '../interfaces'

export const useAreaForm = () => {
	const areaQuery = useQuery(['areas'], fetchAreas, {
		refetchOnMount: false,
		refetchOnWindowFocus: false,
	})

	const areaMutation = useMutation((nuevaArea: Area) => postAreas(nuevaArea), {
		onSuccess: () => {
			areaQuery.refetch()
		},
	})

	const areaDelete = useMutation((id: string) => deleteArea(id), {
		onSuccess: () => {
			areaQuery.refetch()
		},
	})

	const areaEdit = useMutation((data: any) => editArea(data), {
		onSuccess: () => {
			areaQuery.refetch()
		},
	})

	return {
		altaArea: areaMutation,
		areas: areaQuery,
		areaDelete: areaDelete,
		areaEdit,
	}
}
