import { Outlet, useMatches } from 'react-router-dom'
import { Drawer } from '../shared/Drawer/Drawer'
import Box from '@mui/material/Box'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'

export const Home = () => {
  const [match] = useMatches()
  const condition = match.pathname === '/' || match.pathname === '/registro'
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('user')
    if (!condition && !token) {
      navigate('/')
    }
  })

  return (
    <Box sx={{ width: '100%', height: '100%' }}>
      <Drawer />
      <Outlet />
    </Box>
  )
}
