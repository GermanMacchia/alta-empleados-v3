import { api } from './api'
import { User } from '../interfaces'

export const authSignin = async (usuario: User) => {
  const { data } = await api({
    method: 'post',
    url: '/auth/signin',
    data: usuario,
  })
  return data
}

export const authSignup = async (usuario: User) => {
  const { data } = await api({
    method: 'post',
    url: '/auth/signup',
    data: usuario,
  })
  return data
}
