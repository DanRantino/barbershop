import styled, { css } from 'styled-components'

export const WrapperLogin = styled.div`
  ${() => css`
    background-color: #334551;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}
`

export const LoginForm = styled.form`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 20vh;
  `}
`

export const LoginInputs = styled.input`
  ${(props) => css`
    background-color: #cce7ff;
    border: none;
    width: 70%;
    height: 20px;
    padding: 5px;
    font-size: 1em;
    border-radius: 5px;
    transition: width 0.5s ease-in-out, border 0.5s ease;
    text-align: center;
    box-shadow: 2px 2px 2px 2px black;

    ::placeholder {
      color: #334551;
      font-size: 1.5em;
    }

    :focus {
      outline: none;
      width: 100%;
      border-radius: 10px;
      box-shadow: none;
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

    &:active {
      box-shadow: none;
    }
  `}
`
export const TitleSpan = styled.span`
  ${() => css`
    font-family: 'Mea Culpa', cursive;
    font-size: 6rem;
    color: white;
    font-weight: bold;
  `}
`

export const LoginFooter = styled.footer`
  ${() => css`
    position: sticky;
    display: flex;
    height: 20vh;
    width: 100vw;
    bottom: 0;
    left: 0;
    align-items: flex-end;
    justify-content: flex-end;
  `}
`
export const DivFooter = styled.div`
  ${() => css`
    display: flex;
    padding: 20px;
  `}
`

export const FileInput = styled.input`
  ${() => css``}
`
