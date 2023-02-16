import { EmpleadoForm } from '../components/EmpleadoForm'
import { Table } from '../components/Table'
import { Swipeable } from '../shared/Swipeable/Swipeable'
import { WithFormProvider } from '../shared/WithFormProvider/WithFormProvider'
import { useEmpleadoForm } from '../hooks/useEmpleadoForm'
import Box from '@mui/material/Box'
import { useEmpleadoList } from '../hooks/useEmpleadoList'
import CircularProgress from '@mui/material/CircularProgress'
import { useState, useLayoutEffect } from 'react'
import { GridColDef } from '@mui/x-data-grid'
import { Area, Empleado } from '../interfaces'
import { capitalize } from '../helpers'

const columns: GridColDef[] = [
  {
    field: 'dni',
    headerName: 'Dni',
    type: 'number',
    width: 100,
  },
  {
    field: 'nyap',
    headerName: 'NyAP',
    width: 150,
    editable: false,
  },
  {
    field: 'area',
    headerName: 'Area',
    width: 120,
    editable: false,
  },
  {
    field: 'esDesarrollador',
    headerName: 'Dev',
    type: 'boolean',
    width: 50,
    editable: false,
    sortable: false,
  },
  {
    field: 'descripcion',
    headerName: 'Descripción',
    type: 'string',
    width: 150,
    editable: false,
  },
]

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

  useLayoutEffect(() => {
    if (empleados.data?.length && areas.data?.length) {
      setListaEmpleados(
        empleados.data.map((empleado: Empleado) => ({
          ...empleado,

          nyap: `${capitalize(empleado.nombre)} ${capitalize(
            empleado.apellido
          )}`,
          area: getAreaName(areas.data, empleado.area)?.toUpperCase(),
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
      <Table data={listaEmpleados} columns={columns} />
      <Swipeable children={form()} />
    </Box>
  )
}
