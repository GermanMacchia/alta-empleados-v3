import { useState, useEffect, FC } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { useEmpleadoList } from '../../hooks'
import CircularProgress from '@mui/material/CircularProgress'
import { Area } from '../../interfaces/area.interface'
import { Empleado } from '../../interfaces/empleado.interface'

const columns: GridColDef[] = [
  {
    field: 'dni',
    headerName: 'Dni',
    type: 'number',
    width: 90,
  },
  {
    field: 'nombre',
    headerName: 'Nombre',
    width: 150,
    editable: false,
  },
  {
    field: 'apellido',
    headerName: 'Apellido',
    width: 150,
    editable: false,
  },
  {
    field: 'area',
    headerName: 'Area',
    width: 110,
    editable: false,
  },
  {
    field: 'esDesarrollador',
    headerName: 'Dev',
    type: 'boolean',
    width: 110,
    editable: false,
    sortable: false,
  },
  {
    field: 'descripcion',
    headerName: 'Descripción',
    type: 'string',
    width: 110,
    editable: false,
  },
]
interface Props {
  empleados: Empleado[]
}
export const EmpleadoTable: FC<Props> = ({ empleados }) => {
  if (empleados?.length === 0) return <h2>Tabla sin datos</h2>
  return (
    <Box sx={{ height: '87vh', widht: '500px' }}>
      <DataGrid
        density='comfortable'
        rows={empleados}
        columns={columns}
        getRowId={row => row.dni}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  )
}
