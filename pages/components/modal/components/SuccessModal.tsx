import React, { useEffect } from 'react'
import { useGlobalModalContext } from '../GlobalModal'
import { Modal, ModalButton, ModalButtonWrapper, ModalContent, ModalContentWrapper, ModalWrapper } from '../styles'

export const SuccessModal = ({ style }: any) => {
  const { hideModal, store } = useGlobalModalContext()
  const { modalType, modalProps } = store || {}
  const { confirmBtn, content, timeToHide } = modalProps || {}
  const handleModalToggle = () => {
    hideModal()
  }
  useEffect(() => {
    setTimeout(() => {
      hideModal()
    }, timeToHide)
  }, [])


  return (
    <ModalWrapper>
      <Modal state={style.state} type={modalType}>
        <ModalContentWrapper>
          <ModalContent>{content}</ModalContent>
        </ModalContentWrapper>
        <ModalButtonWrapper>
          <ModalButton onClick={() => handleModalToggle()} />
        </ModalButtonWrapper>
      </Modal>
    </ModalWrapper>
  )
}
