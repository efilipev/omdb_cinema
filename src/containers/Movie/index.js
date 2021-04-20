import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { MovieGridContainer } from "./styles"
import MovieListComponent from "../../components/MovieList"
import { movieDeleteModalOpen, movieEditModalOpen } from "../../actions"

const MovieContainer = (props) => {
    const { movies, movieEditModalOpen, movieDeleteModalOpen } = props
    return (
        <MovieGridContainer>
            <MovieListComponent
                movies={movies}
                handleEditModal={movieEditModalOpen}
                handleDeleteModal={movieDeleteModalOpen}
            />
        </MovieGridContainer>
    )
}

const mapDispatchToProps = (dispatch) => ({
    dispatch,
    ...bindActionCreators({ movieEditModalOpen, movieDeleteModalOpen }, dispatch),
})

export default connect(
    (state) => ({
        ...state.movieReducer,
    }),
    mapDispatchToProps
)(MovieContainer)
