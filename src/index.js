import React from "react"
import { store } from "./store"
import ReactDOM from "react-dom"
import App from "./containers/App"
import { Provider } from "react-redux"
import { SnackbarProvider } from "notistack"

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <SnackbarProvider maxSnack={3}>
                <App />
            </SnackbarProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
)
