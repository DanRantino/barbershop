import { NextPage } from 'next'
import Image from 'next/image'
import { User } from '../../types/user'
import {
  DivHorizontal,
  DivUser,
  InputUser,
  ProfileWrapper,
  RedButtton,
  SpanUser,
} from './styles'


export const Profile: NextPage<User> = (props) => {
  const nome = `${props.firstName} ${props.lastName}`
  return (
    <ProfileWrapper>
      <Image src={'/barberlogo.svg'} width={'100%'} height={'100%'} />
      <DivUser>
        <DivHorizontal>
          <SpanUser>
            Ola {nome}, não encontrou alguma coisa? Use a caixa a baixo!
          </SpanUser>
        </DivHorizontal>
        <DivHorizontal>
          <InputUser type="text" />
          <RedButtton>Search</RedButtton>
        </DivHorizontal>
      </DivUser>
    </ProfileWrapper>
  )
}
