import React, { useEffect } from 'react'
import { useGlobalModalContext } from '../GlobalModal'
import { Modal, ModalActions, ModalContent, ModalContentWrapper, ModalWrapper } from '../styles'

export const ErrorModal = ({ style }: any) => {
  const { hideModal, store } = useGlobalModalContext()
  const { modalType, modalProps } = store || {}
  const { confirmBtn, content, timeToHide } = modalProps || {}
  console.log(confirmBtn)

  const endModal = () => {
    setTimeout(() => hideModal(), 3000)
  }

  useEffect(() => {
    endModal()
  }, [])

  const handleModalToggle = () => {
    hideModal()
  }

  const RenderButton = () => (
    <>
      <button onClick={() => handleModalToggle()}>close</button>
      <button onClick={() => confirmBtn()}>teste</button>
    </>
  )


  return (
    <ModalWrapper>
      <Modal state={style.state} type={'ERROR_MODAL'}>
        <ModalContentWrapper>
          <ModalContent>
            <span>{content}</span>
          </ModalContent>
          <ModalActions>
            {confirmBtn == true ? RenderButton() : null}
          </ModalActions>
        </ModalContentWrapper>

      </Modal>
    </ModalWrapper>
  )
}
