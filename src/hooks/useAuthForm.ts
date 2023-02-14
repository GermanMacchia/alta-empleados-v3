import { useMutation } from '@tanstack/react-query'
import { authSignin, authSignup } from '../api/apiAuth'
import { User } from '../interfaces/user.interface'
import { useNavigate } from 'react-router'
import { useState, useEffect } from 'react'
import { signInWithPopup } from 'firebase/auth'
import { auth, googleProvider } from '../firebase.config'

export const useAuthForm = () => {
  const navigate = useNavigate()
  const [token, setToken] = useState('')
  const [isLoadingGoogle, setIsLoadingGoogle] = useState(false)

  const setLocalStorageToken = (data: string) => {
    localStorage.setItem('user', JSON.stringify(data))
  }

  const signIn = useMutation((usuario: User) =>
    authSignin(usuario).then(data => setToken(data))
  )

  const loginWithGoogle = async () => {
    setIsLoadingGoogle(true)
    const { user } = await signInWithPopup(auth, googleProvider).finally(() =>
      setIsLoadingGoogle(false)
    )

    await signIn
      .mutateAsync({
        email: user.email!,
        password: user?.uid,
      })
      .catch(async () => {
        await signUp
          .mutateAsync({
            email: user.email!,
            password: user?.uid,
          })
          .then(() => {
            signIn.mutateAsync({
              email: user.email!,
              password: user?.uid,
            })
          })
      })
  }

  const signUp = useMutation((usuario: User) => authSignup(usuario))

  useEffect(() => {
    if (token) {
      setLocalStorageToken(token)
      navigate('/home')
    }
  }, [token])

  const signOut = async () => {
    await auth.signOut()
    localStorage.removeItem('user')
    navigate('/')
  }

  return {
    signIn,
    signOut,
    signUp,
    loginWithGoogle,
    isLoadingGoogle,
  }
}
