import React from "react";
import { Field } from "formik";
import { FieldElement, FieldLabel } from "../styles";

const SelectField = (props) => {
    const { name, label, options, hiddenTitle, ...other } = props;
    const mapOptions = (options) => {
        return options ?
            options.map((option) => {
                return <option key={option} value={option}>{option}</option>;
            }) : props.children
    }
    return (
        <FieldElement>
            {label && <FieldLabel>{label}</FieldLabel>}
            <Field className="field-item" as="select" name={name} {...other}>
                <option hidden>{hiddenTitle}</option>
                {mapOptions(options)}
            </Field>
        </FieldElement>
    )
}

export default SelectField;
