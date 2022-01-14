import React, { FormEvent, useState } from 'react'
import { NextPage } from 'next'
import nookies from 'nookies'
import { ServerLogin } from './utils/server'
import LoginEmailComponent from './components/login'

type User = {
  name: string
  password: string
  image: File | null | Blob
}

const Signup: NextPage = () => {
  const [user, setUser] = useState<User>({
    name: '',
    password: '',
    image: null,
  })
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const formData = new FormData()
    if (user.image) {
      formData.append('user', user.name)
      formData.append('password', user.password)
    }
    const { authorization } = nookies.get()
    await ServerLogin.loginFunction('/signup', formData, authorization)
  }
  return (
    <LoginEmailComponent type='sign up' action={onSubmit} title={'Bem vindo, cadastre-se aqui!'}
                         state={[user, setUser]} showFooter={false} />
  )
}

export default Signup
