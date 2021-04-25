import styled from "styled-components"

export const Movie = styled.div`
    width: 100%;
    max-width: 420px;
    height: 100%;
    max-height: 275px;
    display: flex;
    border-radius: 8px;
    position: relative;
`

export const PosterImage = styled.img`
    display: block;
    width: 180px;
    height: auto;
`

export const PosterContainer = styled.div`
    display: flex;
    width: 180px;
`

export const DescriptionContainer = styled.div`
    display: flex;
    width: 100%;
    position: relative;
    flex-direction: column;
    text-align: left;
    margin-left: 10px;
    justify-content: space-between;
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
    align-items: flex-start;
    padding-bottom: 1.02rem;
`

export const IconButton = styled.div`
    cursor: pointer;
`

export const IconButtonImg = styled.img`
    width: 24px;
    height: 24px;
`

export const DescriptionItemTitle = styled.h1`
    margin-top: auto;
    position: relative;
    padding-top: 5px;
    max-height: 78px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`

export const DescriptionContent = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.1em;
`
