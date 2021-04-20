import React from "react"
import Modal from "../Modal"
import FormComponent from "../Form"
import ButtonComponent from "../Button"
import { genres, years } from "../../utils"
import InputField from "../Form/InputField"
import SelectField from "../Form/SelectField"
import { MovieAddValidationSchema } from "./validation"
import FileField from "../Form/FileField"

const MovieAddComponent = (props) => {
    const { isOpen, modalClose, addPoster, submitForm } = props
    const initialValues = {
        Title: "",
        Poster: "",
        Year: "",
        Runtime: "",
        Genre: "",
        Director: "",
    }
    return (
        <Modal isOpen={isOpen} closeButton={true} handleModalClose={modalClose}>
            <FormComponent
                initialValues={initialValues}
                validationSchema={MovieAddValidationSchema}
                submit={submitForm}
            >
                <InputField name="Title" label="Title" />
                <SelectField
                    name="Year"
                    label="Year"
                    options={years}
                    hiddenTitle="Select a year"
                />
                <InputField name="Runtime" label="Runtime" />
                <SelectField
                    name="Genre"
                    label="Genre"
                    options={genres}
                    hiddenTitle="Select Genre"
                />
                <InputField name="Director" label="Director" />
                <FileField
                    name="Poster"
                    addPoster={addPoster}
                    label="Choose a file"
                />
                <ButtonComponent type="submit" primary title="Submit" />
            </FormComponent>
        </Modal>
    )
}

export default MovieAddComponent
