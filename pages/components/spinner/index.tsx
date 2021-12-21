import styled, { css } from 'styled-components'
import { RiLoaderLine } from 'react-icons/ri'

export const StyledSpinner = styled(RiLoaderLine)`
  animation: spin 10s linear infinite;
  color: blue;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      color: red;
    }
    50% {
      color: blue;
    }
    100% {
      transform: rotate(360deg);
      color: red;
    }
  }
`

export const WrapperSpinner = styled.div`
  ${() => css`
    background-color: #334551;
    width: 100%;
    height: 100vh;
    display: grid;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `}
`
