import styled from "styled-components"

export const FormContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const FieldError = styled.div`
    marginbottom: 5px;
    color: red;
`

export const FieldElement = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const FieldLabel = styled.div`
    color: white;
    margin-bottom: 8px;
`

export const StyledFileField = styled.input`
    width: 100%;
    position: relative;
    height: 34px;
    padding: 0 16px;
    border: 2px solid #dddddd;
    border-radius: 4px;
    font-family: "Rubik", sans-serif;
    outline: 0;
    transition: 0.2s;
    margin-bottom: 8px;
    box-sizing: border-box;
    &:focus {
        border-color: #3c99f1;
    }
`
