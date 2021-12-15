import React from 'react'
import { useGlobalModalContext } from './GlobalModal'
import styled, { css } from 'styled-components'

export const SuccessModal = ({ style }: any) => {
  const { hideModal, store } = useGlobalModalContext()
  const { modalProps } = store || {}
  const { title, confirmBtn } = modalProps || {}

  const handleModalToggle = () => {
    hideModal()
  }
  return (
    <ModalWrapper teste={style.opacity}>
      <Modal title={title || 'Create Modal'}>
        <span>
          Sucesso
        </span>
        <div>
          <button onClick={() => handleModalToggle()}>close</button>
          {
            confirmBtn && <button onClick={() => confirmBtn()}>teste</button>
          }
        </div>
      </Modal>
    </ModalWrapper>
  )
}
type teste = {
  teste: number
}
const ModalWrapper = styled.div<teste>`
  ${({ teste }) => css`
    opacity: ${teste};
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
    display: flex;
    flex-direction: column;
    width: 50%;
    height: auto;
    background-color: green;
  `}
`
