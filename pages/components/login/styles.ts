import styled, { css } from 'styled-components'
import NextImage from 'next/image'

export const WrapperLogin = styled.div`
  ${() => css`
    background-color: #334551;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    @keyframes rotate {
      from {
        transform: rotateY(0deg);
        width: 100vw;
      }

      to {
        transform: rotateY(360deg);
        width: 100vw;

      }
    }
  `}
`

export const WrapperForm = styled.div`
  ${() => css`
    display: flex;
    height: 38vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
  `}
`

type propsForm = {
  type: 'sign in' | 'sign up'
}

export const Form = styled.form<propsForm>`
  ${({ type }) => css`
    display: flex;
    flex: 1;
    justify-content: ${type == 'sign up' ? 'space-between' : 'space-evenly'};
    flex-direction: column;
    height: ${type == 'sign up' ? '90%' : '70%'};
    width: 100%;
    align-items: center;
  `}
`
export const LoginInputs = styled.input`
  ${() => css`
    background-color: #cce7ff;
    border: none;
    width: 40vw;
    height: 30px;
    font-size: 1em;
    border-radius: 5px;
    transition: all 0.5s ease-in-out, border 0.5s ease;
    text-align: center;
    box-shadow: 3px 3px 3px 3px black;
    outline: 2px solid #cce7ff;
    opacity: 0.7;

    :hover {
      opacity: 1;
    }

    ::placeholder {
      color: #334551;
      font-size: 1.5em;
    }

    :focus {
      box-shadow: none;
      outline: 2px solid black;
    }

    @media (min-width: 1023px) {
      width: 20%;
    }
  `}
`
export const WrapperImage = styled.div`
  ${() => css`
    display: flex;
    height: 25vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    position: relative;
  `}
`

export const WrapperSpan = styled.div`
  ${() => css`
    display: flex;
    height: 25vh;
    width: 100vw;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    :last-child {
      font-family: 'Lobster', sans-serif;
    }
  `}
`
type props = {
  show: boolean
}
export const TitleSpan = styled.span<props>`
  ${({ show }) => css`
    font-family: ${show ? 'Lobster,sans-serif' : 'Alfa Slab One,sans-serif'};
    font-size: 2.2rem;
    color: #cce7ff;

    @media (min-width: 391px) {
      font-size: 3rem;
    }

    @media (min-width: 600px) {
      font-size: 3.5rem;
    }
    @media (min-width: 810px) {
      font-size: 4rem;
    }
  `}
`


export const WrapperFooter = styled.div`
  ${() => css`
    display: flex;
    height: 5vh;
    width: 100vw;
    align-items: flex-end;
    justify-content: flex-end;
  `}
`
export const FooterTemplate = styled.footer`
  ${() => css`
    display: flex;
    align-self: flex-end;
    justify-content: flex-end;
    padding: 10px;
    width: 100%;
  `}
`

export const Link = styled.a`
  ${() => css`
    text-decoration: none;
    background-color: black;
    color: #334551;
    padding: 5px;

    :visited {
      text-decoration: none;
      color: white;
    }

    &:hover {
      cursor: pointer;
      background-color: #cce7ff;
      color: black;
    }

    &:active {
      cursor: pointer;
      background-color: #cce7ff;
      color: black;
    }
  `}
`

export const ButtonLogin = styled.button`
  ${() => css`
    background-color: #f26790;
    width: 80px;
    height: 40px;
    border: none;
    border-radius: 10px;
    color: #cce7ff;
    font-weight: bold;
    box-shadow: 2px 2px 2px 2px black;
    cursor: pointer;

    &:active {
      box-shadow: none;
    }
  `}
`

export const Image = styled(NextImage)`
  ${() => css`
    filter: invert(92%) sepia(65%) saturate(4235%) hue-rotate(175deg) brightness(101%) contrast(103%);
    animation-name: rotate;
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    animation-delay: 0s;
  `}
`

export const ImageWithoutRotate = styled(NextImage)`
  ${() => css`
    filter: invert(92%) sepia(65%) saturate(4235%) hue-rotate(175deg) brightness(101%) contrast(103%);
  `}
`
