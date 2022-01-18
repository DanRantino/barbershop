import styled, { css } from 'styled-components'

export const WrapperProfile = styled.div`
  ${() => css`
    display: flex;
    width: 100%;
    height: 35%;
    flex-direction: row;
  `}
`
export const ContainerProfile = styled.div`
  ${() => css`
    position: relative;
    justify-self: flex-start;
    align-self: flex-start;
    display: flex;
    flex-direction: row;
    width: 10%;
    height: 100%;
  `}
`

export const SpanWelcome = styled.span`
  ${() => css`
    height: 30%;
    width: 30%;
    justify-self: center;
    align-self: center;
    font-family: 'Alfa Slab One', sans-serif;
    font-size: 2rem;
  `}
`

export const ContainerSearcher = styled.div`
  ${() => css`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    justify-self: flex-start;
    align-self: flex-start;
  `}
`

export const SearchInput = styled.input`
  ${() => css`
    background-color: #cce7ff;
    border: none;
    width: 87.5%;
    height: 100%;
    font-size: 1em;
    border-radius: 5px;
    transition: all 0.5s ease-in-out, border 0.5s ease;
    text-align: center;
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
  `}
`

export const ContainerInput = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 15%;
    justify-content: space-between;
  `}
`

export const ButtonSearch = styled.button`
  ${() => css`
    background-color: #f26790;
    width: 10%;
    height: calc(100% + 2px);
    border: none;
    border-radius: 5px;
    color: #cce7ff;
    font-weight: bold;
    cursor: pointer;
    outline: 2px solid #f26790;

    transition: all 0.5s ease-in-out, border 0.5s ease;

    &:active {
      outline: 2px solid black;
    }

    :hover {
      outline: 2px solid black;
    }
  `}
`

