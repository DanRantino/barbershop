import React, { FC, FormEvent } from 'react'
import {
  ButtonLogin,
  FooterTemplate,
  Form,
  Link,
  LoginInputs,
  TitleSpan,
  WrapperFooter,
  WrapperForm,
  WrapperImage,
  WrapperLogin,
  WrapperSpan,
} from './styles'
import NextImage from 'next/image'
import NextLink from 'next/link'

type props = {
  type: 'sign in' | 'sign up',
  action: (e: FormEvent) => void,
  title: string[],
  showFooter: boolean
  state: [user: unknown, setUser: (value: unknown | ((prevState: unknown) => unknown)) => void]
}

const LoginEmailComponent: FC<props> = ({ type, action, title, state }, showFooter = false) => {
  const [user, setUser] = state

  const Footer = () => (
    <WrapperFooter>
      <FooterTemplate>
        <NextLink href={'/signup'}>
          <Link>
            Sign in
          </Link>
        </NextLink>
      </FooterTemplate>
    </WrapperFooter>
  )

  return (
    <WrapperLogin>
      <WrapperSpan>
        {
          title.map((s, i) => (
            <>
              <TitleSpan show={i == 1}>
                {s}
              </TitleSpan>
              <br />
            </>
          ))
        }
      </WrapperSpan>
      <WrapperImage>
        <NextImage src={'/barberlogo.svg'} layout={'fill'} />
      </WrapperImage>
      <WrapperForm>
        <Form onSubmit={(e) => action(e)}>
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
          <ButtonLogin>{type}</ButtonLogin>
        </Form>
      </WrapperForm>
      {
        showFooter ? console.log('aqui') : null
      }
    </WrapperLogin>
  )
}
export default LoginEmailComponent
