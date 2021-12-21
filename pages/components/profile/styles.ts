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

