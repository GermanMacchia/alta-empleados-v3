import InfoIcon from '@mui/icons-material/Info'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import RecentActorsIcon from '@mui/icons-material/RecentActors'
import LogoutIcon from '@mui/icons-material/Logout'

export const buttons = [
  {
    label: 'Plantilla',
    icon: <RecentActorsIcon />,
    link: '/home',
  },
  {
    label: 'Areas',
    icon: <AccountTreeIcon />,
    link: 'home/areas',
  },
  {
    label: 'Acerca',
    icon: <InfoIcon />,
    link: 'home/acerca',
  },
  {
    label: 'Log Out',
    icon: <LogoutIcon />,
    link: 'home/logout',
  },
]
