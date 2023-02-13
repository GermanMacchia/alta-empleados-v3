import { FC } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Empleado } from '../../interfaces/empleado.interface'
import { Area } from '../../interfaces'

interface Props {
  data: Empleado[] | Area[]
  columns: GridColDef[]
}
export const Table: FC<Props> = ({ data, columns }) => {
  if (data?.length === 0) return <h2>Tabla sin datos</h2>
  return (
    <Box sx={{ height: '87vh', widht: '500px' }}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={row => row._id}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
  )
}
