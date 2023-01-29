import { useRouteError } from 'react-router'
import { Link } from 'react-router-dom'

export function NotFound() {
  const error = useRouteError()

  return (
    <>
      <Link to='/'>Volver</Link>
      <h1>Error 404 - NotFound </h1>
      <p>{error && (error as any)?.data}</p>
    </>
  )
}
