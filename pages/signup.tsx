import React, { FormEvent, useState } from 'react'
import { NextPage } from 'next'
import nookies from 'nookies'
import { ServerLogin } from './utils/server'
import LoginEmailComponent from './components/login'


const Signup: NextPage = () => {
  const [user, setUser] = useState({
    user: '',
    password: '',
    firstName: '',
    lastName: '',
  })
  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const { authorization } = nookies.get()


    await ServerLogin.loginFunction('/user/signup', {
      email: user.user,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName,
    }, authorization)
    const ret = ServerLogin.getRet()
    if (ret.status !== 201) {
      alert(ret.error)
      setUser({ firstName: '', lastName: '', password: '', user: '' })
    }
  }
  return (
    <>
      <title>Sign up</title>
      <LoginEmailComponent type='sign up' action={onSubmit} title={['Bem vindo, cadastre-se aqui!']}
                           state={[user, setUser]} showFooter={false} />
    </>
  )
}

export default Signup
