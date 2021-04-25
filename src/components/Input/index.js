import React from "react"
import { FieldElement, FieldError, FieldLabel, StyledInput } from "../Form/styles"

const Input = (props) => {
    const { name, label, field, errors, touched } = props
    console.log("errors ===", errors, label, name)
    const renderErrorMessage = () => {
        if (errors && Boolean(errors[label]) && touched && Boolean(touched[label])) {
            return <FieldError>{errors[label]}</FieldError>
        }
        return null
    }
    return (
        <FieldElement>
            {label && <FieldLabel>{label}</FieldLabel>}
            <StyledInput {...field} {...props} />
            {renderErrorMessage()}
        </FieldElement>
    )
}

export default Input
