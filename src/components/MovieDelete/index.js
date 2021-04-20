import React from "react"
import Modal from "../Modal"
import ButtonComponent from "../Button"
import { MovieDeleteContent } from "./styles"

const MovieDeleteComponent = (props) => {
    const { isOpen, handleSubmit, handleClose, handleModalClose } = props
    return (
        <Modal
            isOpen={isOpen}
            closeButton={false}
            handleModalClose={handleModalClose}
        >
            <MovieDeleteContent>
                <ButtonComponent
                    title="Submit"
                    width="150px"
                    onClick={() => handleSubmit()}
                />
                <ButtonComponent
                    title="Cancel"
                    width="150px"
                    onClick={() => handleClose()}
                />
            </MovieDeleteContent>
        </Modal>
    )
}

export default MovieDeleteComponent
