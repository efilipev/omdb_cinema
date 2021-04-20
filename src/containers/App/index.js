import { connect } from "react-redux"
import { AppContainer } from "./styles"
import React, { Component } from "react"
import { bindActionCreators } from "redux"
import { HTTPApi } from "../../api/http-api"
import MovieContainer from "../../containers/Movie"
import ButtonComponent from "../../components/Button"
import ThreeDotsLoader from "../../components/Loader"
import MovieAddContainer from "../../containers/MovieAdd"
import MovieEditContainer from "../../containers/MovieEdit"
import MovieDeleteContainer from "../../containers/MovieDelete"
import { getMoviesById, movieAddModalOpen } from "../../actions"
import { BASE_OMDB_URL, OBDB_API_KEY, top100IMDBMovies } from "../../utils"

class App extends Component {
    constructor(props) {
        super(props)
        HTTPApi.init({
            apiAddress: BASE_OMDB_URL,
            apiKey: OBDB_API_KEY,
        })
        this.totalMovies = 12
    }

    componentDidMount() {
        if (this.props.getMoviesById) {
            this.props.getMoviesById(top100IMDBMovies.splice(0, this.totalMovies))
        }
    }

    handleMovieAdd = () => {
        this.props.movieAddModalOpen()
    }

    handleMovieLoad = (index, size) => {
        if (this.totalMovies + size <= top100IMDBMovies.length) {
            const ids = top100IMDBMovies.splice(index, size)
            this.props.getMoviesById(ids)
            this.totalMovies = this.totalMovies + size
        }
    }

    render() {
        if (!Object.keys(this.props.movies).length) {
            return <ThreeDotsLoader />
        }
        if (this.props.addMovieModal) {
            return <MovieAddContainer />
        }
        if (this.props.editMovieModal) {
            if (Object.keys(this.props.editMovie).length) {
                return <MovieEditContainer movie={this.props.editMovie} />
            }
        }
        if (this.props.deleteMovieModal) {
            if (Object.keys(this.props.deleteMovie).length) {
                return <MovieDeleteContainer movie={this.props.deleteMovie} />
            }
        }

        return (
            <AppContainer>
                <ButtonComponent
                    title="Add movie"
                    width="150px"
                    style={{ marginLeft: "auto" }}
                    onClick={this.handleMovieAdd}
                />
                <MovieContainer movies={this.props.movies} />
                {Object.keys(this.props.movies).length > 0 &&
                    this.totalMovies <= top100IMDBMovies.length && (
                        <ButtonComponent
                            width="150px"
                            style={{ alignSelf: "center", marginTop: "50px" }}
                            title="Load more"
                            onClick={() => this.handleMovieLoad(this.totalMovies, 1)}
                        />
                    )}
            </AppContainer>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        ...bindActionCreators({ getMoviesById, movieAddModalOpen }, dispatch),
    }
}

export default connect(
    (state) => ({
        ...state.movieReducer,
        ...state.modalReducer,
    }),
    mapDispatchToProps
)(App)
