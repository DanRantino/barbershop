import React, { createContext, useContext, useState } from 'react'
import { CreateModal } from './CreateModal'
import { SuccessModal } from './SuccessModal'
import { Transition } from 'react-transition-group'
import { ErrorModal } from './ErrorModal'

export const MODAL_TYPES = {
  CREATE_MODAL: 'CREATE_MODAL',
  DELETE_MODAL: 'DELETE_MODAL',
  UPDATE_MODAL: 'UPDATE_MODAL',
  SUCCESS_MODAL: 'SUCCESS_MODAL',
  ERROR_MODAL: 'ERROR_MODAL',
}

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.CREATE_MODAL]: CreateModal,
  [MODAL_TYPES.SUCCESS_MODAL]: SuccessModal,
  [MODAL_TYPES.ERROR_MODAL]: ErrorModal,
}

type GlobalModalContext = {
  showModal: (modalType: string, modalProps?: any) => void
  hideModal: () => void
  store: any
}

const initalState: GlobalModalContext = {
  showModal: () => {
  },
  hideModal: () => {
  },
  store: {},
}

const GlobalModalContext = createContext(initalState)
export const useGlobalModalContext = () => useContext(GlobalModalContext)

type ModalProps = {
  modalType: any
  modalProps: any
  title?: string
  content: string
  show: boolean,
  timeToHide: number
}
const type: ModalProps = { modalType: '', modalProps: '', title: '', content: '', show: false, timeToHide: 5000 }


export const GlobalModal: React.FC<{}> = ({ children }) => {
  const [store, setStore] = useState(type)
  const { modalType, modalProps } = store || {}
  const showModal = (modalType: string, modalProps: any = {}) => {
    setStore({
      ...store,
      modalType,
      modalProps,
      show: true,
    })
  }

  const hideModal = () => {
    setStore({
      ...store,
      modalType: null,
      modalProps: {},
      show: false,
    })
  }

  const renderComponent = (state: string) => {
    const ModalComponent = MODAL_COMPONENTS[modalType]
    if (!modalType || !ModalComponent) {
      return null
    }
    return (
      <ModalComponent id='global-modal' {...modalProps} style={{ state }} />
    )
  }
  return (
    <GlobalModalContext.Provider value={{ store, showModal, hideModal }}>
      <Transition in={store.show} timeout={400}>
        {(state) => {
          return renderComponent(state)
        }}
      </Transition>
      {children}
    </GlobalModalContext.Provider>
  )
}
