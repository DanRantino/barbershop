import React, { useEffect } from 'react'
import { useGlobalModalContext } from './GlobalModal'
import { Modal, ModalActions, ModalContent, ModalWrapper } from './styles'

export const ErrorModal = ({ style }: any) => {
  const { hideModal, store } = useGlobalModalContext()
  const { modalType, modalProps } = store || {}
  const { confirmBtn, content, timeToHide } = modalProps || {}
  useEffect(() => {
    setTimeout(() => hideModal(), timeToHide)
  })

  const handleModalToggle = () => {
    hideModal()
  }
  return (
    <ModalWrapper>
      <Modal state={style.state} type={modalType}>
        <ModalContent>
          <span>{content}</span>
        </ModalContent>
        <ModalActions>
          <button onClick={() => handleModalToggle()}>close</button>
          {confirmBtn && <button onClick={() => confirmBtn()}>teste</button>}
        </ModalActions>
      </Modal>
    </ModalWrapper>
  )
}
