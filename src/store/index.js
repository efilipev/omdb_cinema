import React from "react";
import rootReducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const middleWares = [thunkMiddleware];
const composeEnhancers = process.env.REACT_APP_ENV === "production" ? compose : composeWithDevTools;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleWares))
);
