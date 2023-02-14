import { SignUp } from '../components/Signup'
import { WithFormProvider } from '../shared/WithFormProvider/WithFormProvider'
import { useAuthForm } from '../hooks/useAuthForm'

export const Registro = () => {
  const { signUp } = useAuthForm()

  return (
    <WithFormProvider
      children={<SignUp isLoading={signUp.isLoading} />}
      handleSubmit={signUp.mutateAsync}
    />
  )
}
