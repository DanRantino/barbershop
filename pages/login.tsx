import { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {
  MODAL_TYPES,
  useGlobalModalContext,
} from './components/modal/GlobalModal'
import loginFunction from './utils/loginFunction'
import { setCookie } from 'nookies'
import {
  ButtonLogin,
  DivFooter,
  LoginFooter,
  LoginForm,
  LoginInputs,
  TitleSpan,
  WrapperLogin,
} from './components/login/styles'
import Link from 'next/link'

const Login: NextPage = () => {
  const [login, setLogin] = useState({ user: '', password: '' })
  const router = useRouter()
  const { showModal } = useGlobalModalContext()

  const submit = async (e: any) => {
    e.preventDefault()
    if (login.user != '' && login.password != '') {
      const { data } = await loginFunction('/login', 'POST', login)
      if (data.auth) {
        setCookie(null, 'authorization', data.token)
        await router.push('/')
      } else {
        showModal(MODAL_TYPES.ERROR_MODAL, {
          title: 'teste',
          show: true,
          content: data.msg,
          timeToHide: 4000,
        })
      }
    } else {
      showModal(MODAL_TYPES.ERROR_MODAL, {
        title: 'teste',
        show: true,
        content: 'Digite senha e/ou usuário',
        timeToHide: 4000,
      })
    }
  }
  return (
    <WrapperLogin>
      <TitleSpan>Barbearia CorteLiso</TitleSpan>
      <Image src={'/barberlogo.svg'} width={500} height={500} />
      <LoginForm onSubmit={submit}>
        <label htmlFor="name" hidden>
          Name
        </label>
        <LoginInputs
          id="name"
          type="text"
          value={login.user}
          placeholder={'Username'}
          onChange={(v) => setLogin({ ...login, user: v.target.value })}
        />
        <br />
        <label htmlFor="password" hidden>
          Password
        </label>
        <LoginInputs
          id="password"
          type="password"
          value={login.password}
          placeholder={'Password'}
          onChange={(v) => setLogin({ ...login, password: v.target.value })}
        />
        <ButtonLogin>Login</ButtonLogin>
      </LoginForm>
      <LoginFooter>
        <DivFooter>
          <Link href={'/signup'}>Cadastrar-se</Link>
        </DivFooter>
      </LoginFooter>
    </WrapperLogin>
  )
}
export default Login
