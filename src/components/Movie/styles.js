import styled from "styled-components"

export const Movie = styled.div`
    width: 100%;
    max-width: 420px;
    height: 100%;
    max-height: 260px;
    display: flex;
    margin: 2vh auto;
    border-radius: 8px;
    position: relative;
`

export const PosterImage = styled.img`
    display: block;
    width: 180px;;
    height: auto;
`

export const PosterContainer = styled.div`
    width: 180px;
`

export const DescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 10px;
    justify-content: space-around;
`

export const DescriptionItems = styled.div`
    display: flex;
    flex-direction: column;
`

export const DescriptionButtons = styled.div`
    display: flex;
    position: relative;
    width: 30%;
    justify-content: space-between;
`

export const IconButton = styled.div`
    cursor: pointer;
`

export const IconButtonImg = styled.img`
    width: 24px;
    height: 24px;
`
