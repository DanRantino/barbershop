import React from 'react'
import { useGlobalModalContext } from './GlobalModal'
import styled, { css } from 'styled-components'

export const SuccessModal = ({ style }: any) => {
  const { hideModal, store } = useGlobalModalContext()
  const { modalProps } = store || {}
  const { title, confirmBtn } = modalProps || {}
  console.log(style)
  const handleModalToggle = () => {
    hideModal()
  }
  return (
    <ModalWrapper>
      <Modal state={style.state}>
        <span>Sucesso</span>
        <div>
          <button onClick={() => handleModalToggle()}>close</button>
          {confirmBtn && <button onClick={() => confirmBtn()}>teste</button>}
        </div>
      </Modal>
    </ModalWrapper>
  )
}
type teste = {
  state: string
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

const Modal = styled.div<teste>`
  transform: translateY(${({ state }) =>
    state === 'entered' ? '0' : '-100%'});
  transition: transform 1s;
}
`
