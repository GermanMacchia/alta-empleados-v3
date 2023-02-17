import { FC, useState } from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Area, Empleado } from '../../interfaces'
import { OptionButtons } from './OptionButtons'
import { useTableFilter } from '../../hooks/useTableFilter'
import { InfoDrawer } from '../InfoDrawer/InfoDrawer'
import { SearchDrawer } from './SearchDrawer'

interface Props {
  data: Empleado[] | Area[]
  columns: GridColDef[]
}

export const Table: FC<Props> = ({ data, columns }) => {
  const { handleFilter, filteredColumns, optionsActive } =
    useTableFilter(columns)
  const [isOpen, setIsOpen] = useState(false)
  const [infoEmpleado, setInfoEmpleado] = useState()

  const handleDrawer = (event: any) => {
    setIsOpen(!isOpen)
    setInfoEmpleado(event.row)
  }

  if (data?.length === 0) return <h2>Tabla sin datos</h2>

  return (
    <>
      <Box display='flex' justifyContent='center' m={1}>
        {columns[0].field === 'dni' && (
          <OptionButtons
            handleFilter={handleFilter}
            optionsActive={optionsActive}
          />
        )}
        <SearchDrawer />
      </Box>
      <Box sx={{ height: '75vh' }}>
        <DataGrid
          columns={filteredColumns}
          rows={data}
          getRowId={row => row._id as string}
          pageSize={8}
          rowsPerPageOptions={[8]}
          onRowClick={handleDrawer}
        />
      </Box>
      {infoEmpleado && (
        <InfoDrawer
          handleOpen={setIsOpen}
          isOpen={isOpen}
          info={infoEmpleado}
        />
      )}
    </>
  )
}
