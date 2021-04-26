import { ModalType } from '../types';

const initialState = {
  addMovieModal: false,
  editMovieModal: false,
  deleteMovieModal: false,
  editMovie: {},
  deleteMovie: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ModalType.ADD_MOVIE_OPEN:
      return {
        ...state,
        addMovieModal: action.payload,
      };
    case ModalType.ADD_MOVIE_CLOSE:
      return {
        ...state,
        addMovieModal: action.payload,
      };
    case ModalType.DELETE_MOVIE_OPEN:
      return {
        ...state,
        deleteMovieModal: action.payload.deleteMovieModal,
        deleteMovie: action.payload.deleteMovie,
      };
    case ModalType.DELETE_MOVIE_CLOSE:
      return {
        ...state,
        deleteMovieModal: action.payload,
        deleteMovie: {},
      };
    case ModalType.EDIT_MOVIE_OPEN:
      return {
        ...state,
        editMovieModal: action.payload.editMovieModal,
        editMovie: action.payload.editMovie,
      };
    case ModalType.EDIT_MOVIE_CLOSE:
      return {
        ...state,
        editMovieModal: action.payload,
        editMovie: {},
      };
    default:
      return state;
  }
};
