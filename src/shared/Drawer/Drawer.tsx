import * as React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useTheme } from '@mui/material/styles'
import { AppBar, DrawerComponent, DrawerHeader, styles } from './styles'
import { buttons } from './buttons'
import { useNavigate } from 'react-router'
import { useAuthForm } from '../../hooks/useAuthForm'

export const Drawer = () => {
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const navigate = useNavigate()
  const { signOut } = useAuthForm()

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  return (
    <>
      <AppBar position='fixed' open={open}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h6' noWrap component='div'>
            Alta empleado
          </Typography>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{
              marginLeft: 5,
              ...(open && { display: 'none' }),
            }}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DrawerComponent anchor='right' variant='permanent' open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {buttons.map(btn => (
            <ListItem key={btn.label} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={
                  btn.label === 'Log Out' ? signOut : () => navigate(btn.link)
                }
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}>
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}>
                  {btn.icon}
                </ListItemIcon>
                <ListItemText
                  primary={btn.label}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </DrawerComponent>
      <Box component='main'>
        <DrawerHeader sx={styles.banner} />
      </Box>
    </>
  )
}
