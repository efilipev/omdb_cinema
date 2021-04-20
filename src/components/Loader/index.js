import React from "react"
import Loader from "react-loader-spinner";
import { LoaderContainer } from "./styles"

const ThreeDotsLoader = props => {
    return <LoaderContainer>
        <Loader type="ThreeDots" color="#008BC9" height={80} width={80} />
    </LoaderContainer>
}

export default ThreeDotsLoader
