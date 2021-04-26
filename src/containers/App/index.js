import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { HTTPApi } from '../../api/http-api';
import MovieContainer from '../../containers/Movie';
import LoaderComponent from '../../components/Loader';
import ButtonComponent from '../../components/Button';
import { AppContainer, ButtonWrapper } from './styles';
import MovieAddContainer from '../../containers/MovieAdd';
import MovieEditContainer from '../../containers/MovieEdit';
import MovieDeleteContainer from '../../containers/MovieDelete';
import { getMoviesById, movieAddModalOpen } from '../../actions';
import { BASE_OMDB_URL, OBDB_API_KEY, top100IMDBMovies } from '../../utils';

const App = (props) => {
  let totalMovies = 12;
  useEffect(() => {
    HTTPApi.init({
      apiAddress: BASE_OMDB_URL,
      apiKey: OBDB_API_KEY,
    });
    if (props.getMoviesById) {
      props.getMoviesById(top100IMDBMovies.splice(0, totalMovies));
    }
  }, []);

  const handleMovieAdd = () => {
    props.movieAddModalOpen();
  };

  const handleMovieLoad = (index, size) => {
    if (totalMovies + size <= top100IMDBMovies.length) {
      const ids = top100IMDBMovies.splice(index, size);
      props.getMoviesById(ids);
      totalMovies = totalMovies + size;
    }
  };

  if (!Object.keys(props.movies).length) {
    return (
      <LoaderComponent
        ch="100vh"
        type="Oval"
        color="#008BC9"
        height={60}
        width={60}
      />
    );
  }
  if (props.addMovieModal) {
    return <MovieAddContainer />;
  }
  if (props.editMovieModal) {
    if (Object.keys(props.editMovie).length) {
      return <MovieEditContainer movie={props.editMovie} />;
    }
  }
  if (props.deleteMovieModal) {
    if (Object.keys(props.deleteMovie).length) {
      return <MovieDeleteContainer movie={props.deleteMovie} />;
    }
  }

  return (
    <AppContainer>
      <ButtonWrapper ml="auto">
        <ButtonComponent
          width="150px"
          title="Add movie"
          onClick={handleMovieAdd}
        />
      </ButtonWrapper>
      <MovieContainer />
      {Object.keys(props.movies).length > 0 &&
        totalMovies <= top100IMDBMovies.length && (
          <ButtonWrapper mt="30px" alignSelf="center">
            <ButtonComponent
              loading={props.isFetching}
              width="150px"
              title="Load more"
              onClick={() => handleMovieLoad(totalMovies, 1)}
            />
          </ButtonWrapper>
        )}
    </AppContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
    ...bindActionCreators({ getMoviesById, movieAddModalOpen }, dispatch),
  };
};

export default connect(
  (state) => ({
    ...state.movieReducer,
    ...state.modalReducer,
  }),
  mapDispatchToProps
)(App);
