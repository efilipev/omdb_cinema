import styled from 'styled-components';

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FieldError = styled.div`
  margin-bottom: 5px;
  color: red;
`;

export const FieldElement = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const FieldLabel = styled.div`
  color: white;
  margin-bottom: 8px;
`;

export const FiledLabel = styled.div`
  color: white;
`;

export const FileFieldElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  height: 36px;
  border: 2px solid #dddddd;
  border-radius: 4px;
  outline: 0;
  margin-bottom: 5px;
  background: #0072d7;
`;

export const StyledFileField = styled.input`
  position: absolute;
  top: 0;
  right: 0;
  min-width: 100%;
  min-height: 100%;
  font-size: 100px;
  text-align: right;
  filter: alpha(opacity=0);
  opacity: 0;
  outline: none;
  cursor: inherit;
  display: block;
  font-family: 'Rubik', sans-serif;
  outline: 0;
  transition: 0.2s;
  margin-bottom: 8px;
  box-sizing: border-box;
  &:focus {
    border-color: #3c99f1;
  }
`;

const styles = `
    width: 250px;
    position: relative;
    height: 34px;
    padding: 0 16px;
    border: 2px solid #dddddd;
    border-radius: 4px;
    font-family: 'Rubik', sans-serif;
    outline: 0;
    transition: .2s;
    margin-bottom: 8px;
    box-sizing: border-box;
    &:focus {
        border-color: #3c99f1;
    }
`;

export const StyledInput = styled.input`
  ${styles}
`;

export const StyledSelect = styled.select`
  ${styles}
`;
