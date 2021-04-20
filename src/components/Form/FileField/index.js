import React from "react"
import { FieldElement, FieldLabel, StyledFileField } from "../styles"

const FileField = (props) => {
    const { name, label, addPoster, ...other } = props;
    return (
        <FieldElement>
            {label && <FieldLabel>{label}</FieldLabel>}
            <StyledFileField
                name={name}
                type="file"
                {...other}
                onChange={(event) => {
                    const reader = new FileReader();
                    if (event.currentTarget.files[0]) {
                        reader.readAsDataURL(event.currentTarget.files[0]);
                        addPoster(reader);
                    }
                }}
            />
        </FieldElement>
    )
}

export default FileField
