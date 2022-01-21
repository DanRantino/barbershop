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
import { FcSearch } from 'react-icons/fc'
import { MODAL_TYPES, useGlobalModalContext } from '../modal/GlobalModal'

export type props = {
  user: User
}

export const Profile: FC<props> = ({ user }) => {
  const { showModal } = useGlobalModalContext()
  const doSearch = () => {
    showModal(MODAL_TYPES.ERROR_MODAL, {
        title: 'Error',
        show: true,
        content: 'Ainda em desenvolvimento',
        confirmBtn: false,
      },
    )
  }

  return (
    <WrapperProfile>
      <ContainerProfile>
        <NextImage src={'/barberlogo.svg'} alt={'Foto do usuário'} layout={'fill'} height={1} width={1} />
      </ContainerProfile>
      <ContainerSearcher>
        <SpanWelcome>Olá {user?.firstName} {user?.lastName}</SpanWelcome>
      </ContainerSearcher>
      <ContainerInput>
        <SearchInput />
        <ButtonSearch onClick={doSearch}><FcSearch /></ButtonSearch>
      </ContainerInput>
    </WrapperProfile>

  )
}
