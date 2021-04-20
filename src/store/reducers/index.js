import { combineReducers } from "redux";
import movieReducer from "./movie-reducer";
import modalReducer from "./modal-reducer";
import alertReducer from "./alert-reducer";

export default combineReducers({
    movieReducer,
    modalReducer,
    alertReducer
})
