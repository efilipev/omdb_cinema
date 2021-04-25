import {
    IconButton,
    IconButtonImg,
    DescriptionItems,
    DescriptionButtons,
    DescriptionContent,
    DescriptionContainer,
    DescriptionItemTitle,
} from "./styles"
import React from "react"
import edit from "../../assets/edit.svg"
import trash from "../../assets/trash.svg"
import { normalizeMovieTitle } from "../../utils"

const MovieDescription = (props) => {
    const { movie, handleEditModal, handleDeleteModal } = props
    return (
        <DescriptionContainer>
            <DescriptionItems>
                <DescriptionItemTitle>
                    {normalizeMovieTitle(movie.Title)}
                </DescriptionItemTitle>
                <DescriptionContent>
                    <span>{`Year: ${movie.Year}`}</span>
                    <span>{`Runtime: ${movie.Runtime}`}</span>
                    <span>{`Genre: ${movie.Genre}`}</span>
                    <span>{`Director: ${movie.Director}`}</span>
                </DescriptionContent>
            </DescriptionItems>
            <DescriptionButtons>
                <IconButton onClick={() => handleEditModal(movie)}>
                    <IconButtonImg src={edit} alt="Edit movie icon" />
                </IconButton>
                <IconButton onClick={() => handleDeleteModal(movie)}>
                    <IconButtonImg src={trash} alt="Delete movie icon" />
                </IconButton>
            </DescriptionButtons>
        </DescriptionContainer>
    )
}

export default MovieDescription
