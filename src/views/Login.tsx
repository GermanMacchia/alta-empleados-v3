import { SignIn } from '../components/SignIn'
import { WithFormProvider } from '../shared/WithFormProvider/WithFormProvider'
import { useAuthForm } from '../hooks/useAuthForm'
import { useMatches } from 'react-router-dom'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

export const Login = () => {
  const { signIn } = useAuthForm()
  const [match] = useMatches()
  const condition = match.pathname === '/' || match.pathname === '/registro'
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('user')
    if (condition && token) {
      navigate('/home')
    }
  })

  return (
    <WithFormProvider
      children={<SignIn isLoading={signIn.isLoading} />}
      handleSubmit={signIn.mutateAsync}
    />
  )
}
