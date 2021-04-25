import React from "react"
import Loader from "react-loader-spinner"
import { LoaderContainer } from "./styles"

const LoaderComponent = (props) => {
    return (
        <LoaderContainer height={props.ch}>
            <Loader {...props} />
        </LoaderContainer>
    )
}

export default LoaderComponent
