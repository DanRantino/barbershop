import React, { createContext, useContext, useState } from 'react'
import { CreateModal } from './CreateModal'
import { SuccessModal } from './SuccessModal'
import { Transition } from 'react-transition-group'

export const MODAL_TYPES = {
  CREATE_MODAL: 'CREATE_MODAL',
  DELETE_MODAL: 'DELETE_MODAL',
  UPDATE_MODAL: 'UPDATE_MODAL',
  SUCCESS_MODAL: 'SUCCESS_MODAL',
}

const MODAL_COMPONENTS: any = {
  [MODAL_TYPES.CREATE_MODAL]: CreateModal,
  [MODAL_TYPES.SUCCESS_MODAL]: SuccessModal,
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
  show: boolean
}
const type: con = { modalType: '', modalProps: '', show: false }
type transStyle = {
  unmounted: { opacity: number }
  entering: { opacity: number }
  entered: { opacity: number }
  exiting: { opacity: number }
  exited: { opacity: number }
}
let transitionStyles: transStyle = {
  unmounted: { opacity: 0.4 },
  entering: { opacity: 0.7 },
  entered: { opacity: 1 },
  exiting: { opacity: 0.5 },
  exited: { opacity: 0 },
}

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
      modalType: 'n',
      modalProps: {},
      show: false,
    })
  }

  const renderComponent = (state: any) => {
    const ModalComponent = MODAL_COMPONENTS[modalType]
    if (!modalType || !ModalComponent) {
      return null
    }
    // @ts-ignore
    return (
      <ModalComponent id="global-modal" {...modalProps} style={{ state }} />
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
