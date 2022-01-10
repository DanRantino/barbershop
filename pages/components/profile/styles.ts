import styled, { css } from 'styled-components'

export const ProfileWrapper = styled.div`
  ${() => css`
    grid-area: searchComponent;
    padding: 5% 10% 5% 10%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 2 1 20%;
    flex-wrap: wrap;
    width: 80%;
  `}
`
export const DivUser = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1 1 60%;
    flex-wrap: wrap;
  `}
`

export const InputUser = styled.input`
  ${() => css`
    background-color: #cce7ff;
    border: none;
    padding: 10px;
    width: 70%;
    border-radius: 10px;
    opacity: 0.8;

    :hover {
      opacity: 1;
    }

    :focus {
      outline: none;
      box-shadow: none;
    }
  `}
`
export const SpanUser = styled.span`
  ${() => css`
    padding: 5px;
    font-weight: bolder;
  `}
`

export const DivHorizontal = styled.div`
  ${() => css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `}
`

export const RedButtton = styled.div`
  ${() => css`
    background-color: #f26790;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20%;
    border-radius: 10px;
    opacity: 0.8;

    :hover {
      opacity: 1;
    }
  `}
`
