import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import { FC } from 'react'
import { Empleado } from '../../interfaces/empleado.interface'
import { Typography } from '@mui/material'
import { capitalize } from '../../helpers'

interface Props {
  handleOpen: (isOpen: boolean) => any
  isOpen: boolean
  info: Empleado | undefined
}

export const InfoDrawer: FC<Props> = ({ handleOpen, isOpen, info }) => {
  const list = () => (
    <Box
      sx={{ width: 280, padding: '100px 10px' }}
      role='presentation'
      onClick={() => handleOpen(!isOpen)}>
      <Typography variant='h5'>
        {`${capitalize(info?.nombre as string)} 
        ${capitalize(info?.apellido as string)}`}
      </Typography>

      <Typography variant='body1'>{info?.area.toUpperCase()}</Typography>
    </Box>
  )

  return (
    <Drawer anchor={'left'} open={isOpen} onClose={() => handleOpen(!isOpen)}>
      {list()}
    </Drawer>
  )
}
