import { NextPage } from 'next'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { MODAL_TYPES, useGlobalModalContext } from './components/modal/GlobalModal'

const Login: NextPage = () => {
  const [login, setLogin] = useState({ user: '', password: '' })
  const router = useRouter()
  const { showModal } = useGlobalModalContext()
  const confirmBtn = () => {
    confirm('teste')
  }
  const submit = async (e: any) => {
    e.preventDefault()
    showModal(MODAL_TYPES.SUCCESS_MODAL, { title: 'teste', confirmBtn, show: true })
    /*
    if (login.user != '' && login.password != '') {
      const { data } = await loginFunction('/login', 'POST', login)
      if (data.auth) {
        setCookie(null, 'authorization', data.token)
        await router.push('/')
      }
    } else {
    }
     */
  }
  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor='name'>Name</label>
        <input
          id='name'
          type='text'
          value={login.user}
          onChange={(v) => setLogin({ ...login, user: v.target.value })}
        />
        <label htmlFor='password'>Password</label>
        <input
          id='password'
          type='password'
          value={login.password}
          onChange={(v) => setLogin({ ...login, password: v.target.value })}
        />
        <button>click</button>
      </form>
    </div>
  )
}
export default Login
