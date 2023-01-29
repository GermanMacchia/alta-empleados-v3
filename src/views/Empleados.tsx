import { EmpleadoForm } from '../components/EmpleadoForm'
import { EmpleadoTable } from '../components/EmpleadoTable'
import { Swipeable } from '../shared/Swipeable/Swipeable'
import { WithFormProvider } from '../shared/WithFormProvider/WithFormProvider'
import { useEmpleadoForm } from '../hooks/useEmpleadoForm'
import Box from '@mui/material/Box'
import { useEmpleadoList } from '../hooks/useEmpleadoList'
import CircularProgress from '@mui/material/CircularProgress'
import { useState, useEffect } from 'react'
import { Area } from '../interfaces/area.interface'
import { Empleado } from '../interfaces/empleado.interface'

export const Empleados = () => {
  const { altaEmpleado } = useEmpleadoForm()
  const { empleados, areas } = useEmpleadoList()
  const [listaEmpleados, setListaEmpleados] = useState([])

  const form = () => (
    <WithFormProvider
      handleSubmit={altaEmpleado.mutateAsync}
      children={<EmpleadoForm isLoading={altaEmpleado.isLoading} />}
    />
  )

  const getAreaName = (areas: Area[], id: string) => {
    return areas.find(area => area._id === id)?.nombre
  }

  useEffect(() => {
    if (empleados.data?.length && areas.data?.length) {
      setListaEmpleados(
        empleados.data.map((empleado: Empleado) => ({
          ...empleado,
          area: getAreaName(areas.data, empleado.area),
        }))
      )
    }
  }, [empleados.data, areas.data])

  if (!listaEmpleados.length)
    return (
      <Box sx={{ margin: '20px 33%' }}>
        <CircularProgress size='80px' color='success' />
      </Box>
    )

  return (
    <Box sx={{ width: '85vw' }}>
      <EmpleadoTable empleados={listaEmpleados} />
      <Swipeable children={form()} />
    </Box>
  )
}
