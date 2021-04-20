import React from "react"
import { Field } from "formik"
import { FieldElement, FieldError, FieldLabel } from "../styles"

const InputField = (props) => {
    const { name, label, value, errors, touched, ...other } = props
    const renderErrorMessage = () => {
        if (errors && Boolean(errors[name]) && touched && Boolean(touched[name])) {
            return <FieldError>{errors[name]}</FieldError>
        }
        return null
    }
    return (
        <FieldElement>
            {label && <FieldLabel>{label}</FieldLabel>}
            <Field name={name} className="field-item" {...other}>
                {props.children}
            </Field>
            {renderErrorMessage()}
        </FieldElement>
    )
}

export default InputField
