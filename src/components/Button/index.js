import React from "react"
import { Button } from "./styles"
import LoaderComponent from "../Loader"

const ButtonComponent = (props) => {
    const { title, loading, ...other } = props
    return (
        <Button {...other} disabled={loading}>
            {loading ? (
                <LoaderComponent type="Oval" color="white" height={20} width={20} />
            ) : (
                title
            )}
        </Button>
    )
}

export default ButtonComponent
