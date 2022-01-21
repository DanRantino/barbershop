import styled, { css } from 'styled-components'

export const WrapperProfile = styled.div`
  ${() => css`
    display: grid;
    width: 100%;
    height: 105px;
    grid-template-areas: 'photo name'
                          'photo input';
    grid-template-rows: 2fr 1fr;
    grid-template-columns: 1fr 9fr;

  `}
`
export const ContainerInput = styled.div`
  ${() => css`
    grid: 'input';
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: space-between;
  `}
`


export const ContainerProfile = styled.div`
  ${() => css`
    grid: 'photo';
    grid-row: 1/3;
    position: relative;
    display: flex;
    justify-content: center;
    align-content: flex-start;
    flex-direction: row;
    width: 85px;
    height: 100px;
    opacity: 0.5;
    background-color: #cce7ff;
    margin-right: 10px;
  `}
`

export const ContainerSearcher = styled.div`
  ${() => css`
    grid: 'name';
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `}
`

export const SpanWelcome = styled.span`
  ${() => css`
    height: 100%;
    width: 100%;
    padding-top: 2%;
    justify-content: center;
    min-width: fit-content;
    text-justify: inter-word;
    font-family: 'Alfa Slab One', sans-serif;
    font-size: 1.5rem;
    word-break: keep-all;
    color: #cce7ff;

    @media (max-width: 428px) {
      font-size: 1.25rem;
    }
  `}
`

export const SearchInput = styled.input`
  ${() => css`
    background-color: #cce7ff;
    border: none;
    width: 87.5%;
    height: 25px;
    font-size: 1em;
    border-radius: 5px;
    transition: all 0.5s ease-in-out, border 0.5s ease;
    text-align: center;
    outline: 2px solid #cce7ff;
    opacity: 0.7;

    @media (max-width: 428px) {
      width: 82.5%;
    }

    :hover {
      opacity: 1;
    }

    :focus {
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


export const ButtonSearch = styled.button`
  ${() => css`
    background-color: #f26790;
    width: 10%;
    height: 27px;
    border: none;
    border-radius: 5px;
    color: #cce7ff;
    font-weight: bold;
    cursor: pointer;
    outline: 2px solid #f26790;
    margin-left: 10px;

    transition: all 0.5s ease-in-out, border 0.5s ease;

    &:active {
      outline: 2px solid black;
    }

    :hover {
      outline: 2px solid black;
    }

    @media (max-width: 428px) {
      width: 10%;
    }
  `}
`

