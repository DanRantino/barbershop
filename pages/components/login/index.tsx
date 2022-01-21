import React, { FC, FormEvent, useEffect, useState } from 'react'
import NextLink from 'next/link'
import PasswordInput from '../passwordInput'
import {
  ButtonLogin,
  FooterTemplate,
  Form,
  Image,
  ImageWithoutRotate,
  Link,
  LoginInputs,
  TitleSpan,
  WrapperFooter,
  WrapperForm,
  WrapperImage,
  WrapperLogin,
  WrapperSpan,
} from './styles'

type props = {
  type: 'sign in' | 'sign up',
  action: (e: FormEvent) => void,
  title: string[],
  showFooter: boolean
  state: [user: unknown, setUser: (value: unknown | ((prevState: unknown) => unknown)) => void]
}

const LoginEmailComponent: FC<props> = ({ type, action, title, state, showFooter = false }) => {
  const [user, setUser] = state
  const [isFirefox, setIsFirefox] = useState(false)


  useEffect(() => {
    window && setIsFirefox(window.navigator?.userAgent.indexOf('Firefox') !== -1)
  }, [isFirefox])

  const Footer = (login: boolean) => (
    <WrapperFooter>
      <FooterTemplate>
        <NextLink href={login ? '/signup' : '/login'}>
          <Link>
            {login ? 'Sign in' : 'Login'}
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
            <div key={'span' + i}>
              <TitleSpan show={i == 1}>
                {s}
              </TitleSpan>
              <br />
            </div>
          ))
        }
      </WrapperSpan>
      <WrapperImage>
        {
          isFirefox ? <ImageWithoutRotate src={'/barberlogo.svg'} layout={'fill'} priority={true} />
            :
            <Image src={'/barberlogo.svg'} layout={'fill'} priority={true} />
        }

      </WrapperImage>
      <WrapperForm>
        <Form type={type} onSubmit={action}>
          {
            type === 'sign up' ? (
              <>
                <LoginInputs
                  id={'firstName'}
                  type='text'
                  placeholder={'First Name'}
                  onChange={(e) =>
                    setUser((prevState) => ({
                      ...prevState,
                      firstName: e.target.value,
                    }))
                  }
                  required={true}
                />
                <LoginInputs
                  id={'lastName'}
                  type='lastName'
                  placeholder={'Last Name'}
                  onChange={(e) =>
                    setUser((prevState) => ({
                      ...prevState,
                      lastName: e.target.value,
                    }))
                  }
                  required={true}
                />
              </>
            ) : null
          }

          <label htmlFor={'name'} hidden>
            Nome
          </label>
          <LoginInputs
            id={'name'}
            type='email'
            placeholder={'Username'}
            onChange={(e) =>
              setUser((prevState) => ({
                ...prevState,
                user: e.target.value,
              }))
            }
            required={true}
          />
          <label htmlFor='password' hidden>
            Password
          </label>
          <PasswordInput setUser={setUser} />
          <ButtonLogin>{type.toUpperCase()}</ButtonLogin>
        </Form>
      </WrapperForm>
      {
        showFooter == true ? Footer(true) : Footer(false)
      }
    </WrapperLogin>
  )
}
export default LoginEmailComponent
