import styled from "styled-components"

export const ModalContainer = styled.div`
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 100;
    position: fixed;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const ModalCloseContainer = styled.div`
    height: 25vh;
    width: 100%;
    display: flex;
    cursor: pointer;
`

export const ModalMainContent = styled.div`
    display: flex;
    height: 75vh;
    width: 100%;
    justify-content: center;
    alight-items: center;
`
export const ModalCloseButton = styled.div`
    width: 37%;
    margin-left: auto;
    margin-top: auto;
`

export const ModalCloseImg = styled.img`
    display: block;
    width: 35px;
    height: 35px;
`
