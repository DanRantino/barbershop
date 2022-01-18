import { FC } from 'react'
import NextImage from 'next/image'
import {
  ButtonSearch,
  ContainerInput,
  ContainerProfile,
  ContainerSearcher,
  SearchInput,
  SpanWelcome,
  WrapperProfile,
} from './styles'
import { User } from '../../types/user'

export type props = {
  user: User
}

export const Profile: FC<props> = ({ user }) => {
  return (
    <WrapperProfile>
      <ContainerProfile>
        <NextImage src={'/barberlogo.svg'} alt={'Foto do usuário'} layout={'fixed'} width={100} height={100} />
      </ContainerProfile>
      <ContainerSearcher>
        <SpanWelcome>Olá {user?.firstName} {user?.lastName}</SpanWelcome>
        <ContainerInput>
          <SearchInput />
          <ButtonSearch>Search</ButtonSearch>
        </ContainerInput>
      </ContainerSearcher>
    </WrapperProfile>

  )
}
