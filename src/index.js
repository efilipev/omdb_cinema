import React from "react"
import { store } from "./store"
import ReactDOM from "react-dom"
import App from "./containers/App"
import { Provider } from "react-redux"
import SnackbarProvider from "react-simple-snackbar"

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <SnackbarProvider>
                <App />
            </SnackbarProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
)
