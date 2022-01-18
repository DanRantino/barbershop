import styled, { css } from 'styled-components'

export const PasswordWrapper = styled.div`
  ${() => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`

export const Container = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40.5vw;
    height: 32px;
    box-shadow: 3px 3px 3px 3px black;
    transition: all 0.5s ease-in-out, border 0.5s ease;
    outline: 2px solid #cce7ff;
    margin-bottom: 10px;
    border-radius: 5px 5px 5px 5px;
    opacity: 0.7;

    :hover {
      opacity: 1;
    }

    :focus-within {
      box-shadow: none;
      outline: 2px solid black;
    }

    @media (min-width: 1023px) {
      width: 20.5%;
  `}
`
export const ShowPassword = styled.input`
  ${() => css`
    background-color: #cce7ff;
    border: none;
    width: 90%;
    height: 30px;
    font-size: 1em;
    border-radius: 5px 0 0 5px;
    text-align: center;
    outline: 2px solid #cce7ff;
    padding-left: 8%;

    ::placeholder {
      color: #334551;
      font-size: 1.5em;
    }
  `}
`

export const ButtonShowPassword = styled.button`
  ${() => css`
    background-color: #cce7ff;
    border: none;
    width: 10%;
    height: 32px;
    font-size: 1em;
    transition: all 0.5s ease-in-out, border 0.5s ease;
    text-align: center;
    outline: 2px solid #cce7ff;
    border-radius: 0 5px 5px 0;

  `}
`



