import { NextPage } from 'next'
import Image from 'next/image'
import { DivUser, ProfileWrapper } from './styles'

export const Profile: NextPage = () => {
  const nome = 'Daniel Fürst'
  return (
    <ProfileWrapper>
      <Image src={'/barberlogo.svg'} width={'100%'} height={'100%'} />
      <DivUser>
        <span>Ola {nome}, não encontrou alguma coisa? Use a caixa a baixo!</span>
        <input type='text' />
      </DivUser>
    </ProfileWrapper>
  )
}
