import React from 'react';
import { FileFieldElement, FiledLabel, StyledFileField } from '../styles';

const FileField = (props) => {
  const { name, label, addPoster, ...other } = props;
  return (
    <FileFieldElement>
      {label && <FiledLabel>{label}</FiledLabel>}
      <StyledFileField
        name={name}
        type="file"
        {...other}
        onChange={(event) => {
          const reader = new FileReader();
          if (event.currentTarget.files[0]) {
            reader.readAsDataURL(event.currentTarget.files[0]);
            addPoster(reader);
          }
        }}
      />
    </FileFieldElement>
  );
};

export default FileField;
