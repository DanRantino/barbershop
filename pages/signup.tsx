import React, { FormEvent, useState } from 'react'
import { NextPage } from 'next'
import { FileInput, LoginForm, LoginInputs, WrapperLogin } from './components/login/styles'
import ServerLogin from './utils/server'

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
      formData.append('image', user.image, 'teste.png')
      formData.append('user', user.name)
      formData.append('password', user.password)
    }
    ServerLogin.loginFunction('/signup', formData)
    //console.log(resp)
  }
  return (
    <WrapperLogin>
      <LoginForm onSubmit={(e) => onSubmit(e)}>
        <FileInput
          id='picture'
          type='file'
          placeholder={'File'}
          onChange={(e) =>
            setUser((prevState) => ({
              ...prevState,
              image: e.target.files ? e.target.files[0] : null,
            }))
          }
        />
        <label htmlFor={'name'} hidden>
          Nome
        </label>
        <LoginInputs
          id={'name'}
          type='text'
          placeholder={'Username'}
          onChange={(e) =>
            setUser((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
        />
        <label htmlFor='password' hidden>
          Password
        </label>
        <LoginInputs
          id='password'
          type='password'
          placeholder={'Password'}
          onChange={(e) =>
            setUser((prevState) => ({
              ...prevState,
              password: e.target.value,
            }))
          }
        />
        <button>click</button>
      </LoginForm>
    </WrapperLogin>
  )
}

export default Signup
