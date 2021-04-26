import React from 'react';
import { FieldElement, FieldLabel, StyledSelect } from '../Form/styles';

const Select = (props) => {
  const { name, label, field, options, hiddenTitle } = props;
  const mapOptions = (options) => {
    return options
      ? options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })
      : props.children;
  };
  return (
    <FieldElement>
      {label && <FieldLabel>{label}</FieldLabel>}
      <StyledSelect {...field} {...props}>
        <option hidden>{hiddenTitle}</option>
        {mapOptions(options)}
      </StyledSelect>
    </FieldElement>
  );
};

export default Select;
