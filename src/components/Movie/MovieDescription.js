import {
    IconButton,
    IconButtonImg,
    DescriptionItems,
    DescriptionButtons,
    DescriptionContainer,
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
                <h1 className="movie-title" style={{ marginTop: "auto" }}>
                    {normalizeMovieTitle(movie.Title)}
                </h1>
                <span>Year: {movie.Year}</span>
                <span>Runtime: {movie.Runtime}</span>
                <span>Genre: {movie.Genre}</span>
                <span>Director: {movie.Director}</span>
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
