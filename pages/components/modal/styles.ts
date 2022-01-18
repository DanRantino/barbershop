import styled, { css } from 'styled-components'

type transitionState = {
  state: string
  type: string
}
export const ModalWrapper = styled.div`
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

export const Modal = styled.div<transitionState>`
  ${({ state, type }) => css`
    display: flex;
    color: black;
    font-size: 1rem;
    width: 15%;
    //min-height: 5%;
    height: 10%;
    border-radius: 5px;
    flex-direction: row;
    background-color: ${
            type === 'SUCCESS_MODAL' && 'greenyellow'
            ||
            type === 'ERROR_MODAL' && ' #f26790;'
    };
    transform: translateX(${
            state === 'entered' ? '0' : '100%'});
    opacity: ${state === 'exited' ? '0' : state == 'entering' ? '0' : state == 'entering' ? '1' : null};
    transition: transform 0.25s ease-in, opacity 0.5s ease-in;
    margin: 10px;
  `}
}
`
export const ModalContentWrapper = styled.div`
  ${() => css`
    height: 100%;
    width: 100%;
  `}
`

export const ModalContent = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    order: -1;
  `}
`

export const ModalActions = styled.div`
  ${() => css`
    display: flex;
    align-items: flex-start;
    justify-content: flex-end;
    padding-left: 5px;
  `}
`

export const ModalButtonWrapper = styled.div`
  ${() => css`
    display: flex;
    height: 100%;
    width: 20%;
    justify-content: flex-start;
  `}
`
export const ModalButton = styled.button`
  ${() => css`
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f26790;
    border: none;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    cursor: pointer;
    box-shadow: 1px 1px 1px black;
    order: 99;
    margin: auto;
    opacity: 0.8;

    &:after {
      display: inline-block;
      content: "\\00d7"; /* This will render the 'X' */
    }

    &:hover {
      opacity: 1;
    }

    &:active {
      box-shadow: none;
    }
  `}
`
