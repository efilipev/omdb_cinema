import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MovieEditComponent from '../../components/MovieEdit';
import { editMovie, movieEditModalClose } from '../../actions';

const MovieEditContainer = (props) => {
  const { movie, editMovie, editMovieModal, movieEditModalClose } = props;
  const initialValues = {
    imdbID: movie.imdbID || '',
    Title: movie.Title || '',
    Year: movie.Year || '',
    Runtime: movie.Runtime || '',
    Genre: movie.Genre.split(',')[0] || '',
    Director: movie.Director || '',
  };
  const submitForm = (values) => {
    if (values) {
      editMovie(values);
      movieEditModalClose();
    }
    movieEditModalClose();
  };
  return (
    <MovieEditComponent
      isOpen={editMovieModal}
      submitForm={submitForm}
      initialValues={initialValues}
      handleModalClose={movieEditModalClose}
    />
  );
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  ...bindActionCreators({ editMovie, movieEditModalClose }, dispatch),
});

export default connect(
  (state) => ({
    ...state.movieReducer,
    ...state.modalReducer,
  }),
  mapDispatchToProps
)(MovieEditContainer);
