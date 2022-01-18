import React, { FC, useState } from 'react'
import { ButtonShowPassword, Container, PasswordWrapper, ShowPassword } from './style'
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'

type props = {
  setUser: (value: unknown | ((prevState: unknown) => unknown)) => void
}

export const PasswordInput: FC<props> = ({ setUser }) => {
  const [isShowingPassword, setisShowingPassword] = useState(false)

  const showPassword = (e) => {
    e.preventDefault()
    setisShowingPassword(!isShowingPassword)
  }

  return (
    <PasswordWrapper>
      <Container>
        <ShowPassword type={isShowingPassword ? 'text' : 'password'} placeholder={'Password'}
                      onChange={(e) => setUser(prevState => ({
                        ...prevState, password: e.target.value,
                      }))} required={true} />
        <ButtonShowPassword onClick={showPassword}>{isShowingPassword ?
          <BsFillEyeSlashFill /> : <BsFillEyeFill />}</ButtonShowPassword>
      </Container>
    </PasswordWrapper>
  )
}
export default PasswordInput
