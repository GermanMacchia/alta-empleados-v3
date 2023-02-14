import { SignIn } from '../components/SignIn'
import { WithFormProvider } from '../shared/WithFormProvider/WithFormProvider'
import { useAuthForm } from '../hooks/useAuthForm'

export const Login = () => {
  const { signIn } = useAuthForm()
  return (
    <WithFormProvider
      children={<SignIn isLoading={signIn.isLoading} />}
      handleSubmit={signIn.mutateAsync}
    />
  )
}
