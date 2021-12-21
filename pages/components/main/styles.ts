import styled, { css } from 'styled-components'

export const WrapperMain = styled.div`
  ${() => css`
    background-color: #334551;
    display: grid;
    width: 100vw;
    height: 100vh;
    grid-template-areas: 'searchComponent searchComponent searchComponent searchComponent'
                          ' promotioBanner promotioBanner promotioBanner promotioBanner'
                          ' servicesDisplay servicesDisplay servicesDisplay servicesDisplay';
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-auto-columns: 1fr 1fr 1fr;
  `}
`
