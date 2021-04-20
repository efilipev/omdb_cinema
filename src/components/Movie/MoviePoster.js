import React from "react"
import { PosterImage, PosterContainer } from "./styles"

const MoviePoster = ({ url }) => {
    return (
        <PosterContainer>
            <PosterImage src={url} alt="Movie poster" />
        </PosterContainer>
    )
}

export default MoviePoster
