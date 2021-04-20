import React from "react"
import { Button } from "./styles"

const ButtonComponent = (props) => {
    const { title, ...other } = props
    return <Button {...other}>{title}</Button>
}

export default ButtonComponent
