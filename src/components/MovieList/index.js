import { NoData } from "./styles"
import MovieComponent from "../Movie"
import React, { Fragment } from "react"

const MovieListComponent = (props) => {
    const { movies, handleEditModal, handleDeleteModal } = props
    return Object.keys(props.movies).length ? (
        <Fragment>
            {movies.map((movie) => (
                <MovieComponent
                    key={`${movie.imdbID}`}
                    movie={movie}
                    handleEditModal={handleEditModal}
                    handleDeleteModal={handleDeleteModal}
                />
            ))}
        </Fragment>
    ) : (
        <NoData>There are no data...</NoData>
    )
}

export default MovieListComponent
