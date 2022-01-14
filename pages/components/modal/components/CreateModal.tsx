import React from 'react'
import { useGlobalModalContext } from '../GlobalModal'
import styled, { css } from 'styled-components'

export const CreateModal = () => {
  const { hideModal, store } = useGlobalModalContext()
  const { modalProps } = store || {}
  const { title, confirmBtn } = modalProps || {}
  const handleModalToggle = () => {
    hideModal()
  }
  return (
    <ModalWrapper>
      <Modal title={title || 'Create Modal'}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
        <button onClick={() => hideModal()}>close</button>
        {confirmBtn && (
          <button onClick={() => handleModalToggle()}>teste</button>
        )}
      </Modal>
    </ModalWrapper>
  )
}

const ModalWrapper = styled.div`
  ${() => css`
    position: fixed;
    z-index: 99;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
  `}
`

const Modal = styled.div`
  ${() => css`
    width: 50%;
    height: 50%;
    background-color: white;
  `}
`
