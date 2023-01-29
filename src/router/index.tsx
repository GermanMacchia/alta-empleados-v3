import { createHashRouter } from 'react-router-dom'
import { Login } from '../components/Login'
import { NotFound, Home } from '../views'
import { Empleados } from '../views/Empleados'
import { Areas } from '../views/Areas'
import { Acerca } from '../views/Acerca'

export const router = createHashRouter([
  {
    path: '/',
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: '/home',
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/home',
        element: <Empleados />,
        errorElement: <NotFound />,
      },
      {
        path: 'home/areas',
        element: <Areas />,
        errorElement: <NotFound />,
      },
      {
        path: 'home/acerca',
        element: <Acerca />,
        errorElement: <NotFound />,
      },
      {
        path: 'home/*',
        element: <Home />,
        errorElement: <NotFound />,
      },
    ],
  },
])
