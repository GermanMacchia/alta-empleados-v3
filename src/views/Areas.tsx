import { EmpleadoForm } from '../components/EmpleadoForm'
import { Table } from '../components/Table'
import { Swipeable } from '../shared/Swipeable/Swipeable'
import { WithFormProvider } from '../shared/WithFormProvider/WithFormProvider'
import { useEmpleadoForm } from '../hooks/useEmpleadoForm'
import Box from '@mui/material/Box'
import { useEmpleadoList } from '../hooks/useEmpleadoList'
import CircularProgress from '@mui/material/CircularProgress'
import { GridColDef } from '@mui/x-data-grid'
import { AreaForm } from '../components/AreaForm/AreaForm'
import { useAreaForm } from '../hooks/useAreaForm'

const columns: GridColDef[] = [
  {
    field: 'nombre',
    headerName: 'Área',
    type: 'text',
    width: 120,
  },
]

export const Areas = () => {
  const { altaArea } = useAreaForm()
  const { areas } = useEmpleadoList()

  const form = () => (
    <WithFormProvider
      handleSubmit={altaArea.mutateAsync}
      children={<AreaForm isLoading={altaArea.isLoading} />}
    />
  )

  if (!areas.data?.length)
    return (
      <Box sx={{ margin: '20px 33%' }}>
        <CircularProgress size='80px' color='success' />
      </Box>
    )

  return (
    <Box sx={{ width: '85vw' }}>
      <Table data={areas.data} columns={columns} />
      <Swipeable children={form()} />
    </Box>
  )
}
