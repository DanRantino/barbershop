import { NextPage } from 'next'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { MODAL_TYPES, useGlobalModalContext } from './components/modal/GlobalModal'
import { setCookie } from 'nookies'
import { ServerLogin } from './utils/server'
import LoginEmailComponent from './components/login'

const Login: NextPage = () => {
  const [login, setLogin] = useState({ user: '', password: '' })
  const router = useRouter()
  const { showModal } = useGlobalModalContext()

  const submit = async (e: any) => {
    e.preventDefault()
    if (login.user != '' && login.password != '') {
      await ServerLogin.loginFunction('/user/signin', { email: login.user, password: login.password }, '')
      const ret = ServerLogin.getRet()
      console.log(ret)
      if (ret.status > 205) {
        showModal(MODAL_TYPES.ERROR_MODAL, {
          title: 'Error',
          show: true,
          content: ret.error,
          confirmBtn: false,
        })
      }
      if ((ret.status === 200) && (ret.data.auth != '')) {
        setCookie(null, 'authorization', ret.authorization, {
          maxAge: 30 * 24 * 60 * 60,
        })
        await router.push('/')
      }
    }

  }
  return (
    <>
      <title>Login</title>
      <LoginEmailComponent type='sign in' action={submit} title={['BARBEARIA', 'Meio Corte']}
                           state={[login, setLogin]} showFooter={true} />
    </>
  )
}
export default Login
