import InfoIcon from '@mui/icons-material/Info'
import AccountTreeIcon from '@mui/icons-material/AccountTree'
import RecentActorsIcon from '@mui/icons-material/RecentActors'
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
]
