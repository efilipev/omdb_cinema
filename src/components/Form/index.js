import React from "react"
import { Formik } from "formik"

const FormComponent = (props) => {
    const { submit, initialValues, validationSchema, ...other } = props
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submit}
            {...other}
        >
            {props.children}
        </Formik>
    )
}

export default FormComponent
