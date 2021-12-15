import React, { createContext, useContext, useState } from 'react'
import { CreateModal } from './CreateModal'

export const MODAL_TYPES = {
  CREATE_MODAL: 'CREATE_MODAL',
  DELETE_MODAL: 'DELETE_MODAL',
  UPDATE_MODAL: 'UPDATE_MODAL',
}

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.CREATE_MODAL]: CreateModal,
}

type GlobalModalContext = {
  showModal: (modalType: string, modalProps?: any) => void
  hideModal: () => void
  store: any
}

const initalState: GlobalModalContext = {
  showModal: () => {},
  hideModal: () => {},
  store: {},
}

const GlobalModalContext = createContext(initalState)
export const useGlobalModalContext = () => useContext(GlobalModalContext)

type con = {
  modalType: any
  modalProps: any
}
const type: con = { modalType: '', modalProps: '' }

export const GlobalModal: React.FC<{}> = ({ children }) => {
  const [store, setStore] = useState(type)
  const { modalType, modalProps } = store || {}
  console.log(modalType)
  const showModal = (modalType: string, modalProps: any = {}) => {
    setStore({
      ...store,
      modalType,
      modalProps,
    })
  }

  const hideModal = () => {
    setStore({
      ...store,
      modalType: null,
      modalProps: {},
    })
  }

  const renderComponent = () => {
    const ModalComponent = MODAL_COMPONENTS[modalType]
    if (!modalType || !ModalComponent) {
      return null
    }
    return <ModalComponent id="global-modal" {...modalProps} />
  }

  return (
    <GlobalModalContext.Provider value={{ store, showModal, hideModal }}>
      {renderComponent()}
      {children}
    </GlobalModalContext.Provider>
  )
}
