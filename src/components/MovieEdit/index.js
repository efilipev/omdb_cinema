import React from "react"
import Modal from "../Modal"
import FormComponent from "../Form"
import ButtonComponent from "../Button"
import { genres, years } from "../../utils"
import InputField from "../Form/InputField"
import SelectField from "../Form/SelectField"
import { MovieEditValidationSchema } from "./validation"

const MovieEditComponent = (props) => {
    const { isOpen, initialValues, submitForm, handleModalClose } = props
    return (
        <Modal
            isOpen={isOpen}
            closeButton={true}
            handleModalClose={handleModalClose}
        >
            <FormComponent
                initialValues={initialValues}
                validationSchema={MovieEditValidationSchema}
                submit={submitForm}
            >
                <InputField name="Title" label="Title" />
                <SelectField name="Year" label="Year" options={years} />
                <InputField name="Runtime" label="Runtime" />
                <SelectField name="Genre" label="Genre" options={genres} />
                <InputField name="Director" label="Director" />
                <ButtonComponent type="submit" primary title="Submit" />
            </FormComponent>
        </Modal>
    )
}

export default MovieEditComponent
