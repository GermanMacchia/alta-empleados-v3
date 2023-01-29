import { Outlet } from 'react-router-dom'
import { Drawer } from '../shared/Drawer/Drawer'
import Box from '@mui/material/Box'

export const Home = () => {
  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Drawer />
      <Outlet />
    </Box>
  )
}
