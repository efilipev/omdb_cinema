import "./index.css"
import React from "react"
import { Form, Formik } from "formik"
import { FormContent } from "./styles"

const FormComponent = (props) => {
    const { submit, initialValues, validationSchema, ...other } = props
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={submit}
            {...other}
        >
            {({ errors, touched }) => (
                <Form>
                    <FormContent>
                        {React.Children.toArray(props.children).map((child) => {
                            return React.cloneElement(child, {
                                errors: { ...errors },
                                touched: { ...touched },
                            })
                        })}
                    </FormContent>
                </Form>
            )}
        </Formik>
    )
}

export default FormComponent
