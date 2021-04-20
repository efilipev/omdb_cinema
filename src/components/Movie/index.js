import React from "react"
import { Movie } from "./styles"
import MoviePoster from "./MoviePoster"
import MovieDetails from "./MovieDetails"
import MovieDescription from "./MovieDescription"

const MovieComponent = (props) => {
    const { movie, handleEditModal, handleDeleteModal } = props
    return (
        <Movie>
            <MoviePoster url={movie.Poster} />
            <MovieDetails>
                <MovieDescription
                    movie={movie}
                    handleEditModal={handleEditModal}
                    handleDeleteModal={handleDeleteModal}
                />
            </MovieDetails>
        </Movie>
    )
}

export default MovieComponent
