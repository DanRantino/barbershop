import styled, { css } from 'styled-components'

export const WrapperPromo = styled.div`
  ${() => css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 165px;
  margin-top: 25px;
  overflow-y: hidden;
`}
`
export const ContentContainer = styled.div`
  ${() => css`
    background-color: #cce7ff;
    height: 90%;
    width: 80%;
    border-radius: 20px;
    color: #334551;
    display: flex;

    @media (max-width: 1000px) {
      width: 100%;
      height: 100%;
      justify-content: center;
    }
  `}
`
export const ContainerDescriptionPromo = styled.div`
  ${() => css`
    width: 80%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media (max-width: 1000px) {
      width: 90%;
      height: 90%;
      justify-content: space-evenly;
    }
  `}
`
export const WrapperPromoDescription = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 90%;
    height: 100%;
    @media (max-width: 1000px) {
      width: 100%;
      height: 100%;
    }
  `}
`

export const SpanPromo = styled.span`
  ${() => css`
    width: 87%;
    font-size: 0.9rem;
    text-align: center;

    @media (max-width: 1000px) {
      width: 100%;
      height: 100%;
    }
  `}
`

export const TitlePromo = styled.span`
  ${() => css`
    width: 100%;
    font-size: 2rem;
    justify-self: center;
    text-align: center;
    padding-bottom: 20px;
  `}
`

export const ContainerImagePromo = styled.div`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 100%;
  `}
`
