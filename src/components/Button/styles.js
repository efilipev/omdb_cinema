import styled, { css } from "styled-components"

export const Button = styled.button`
    outline: none;
    border: none;
    background: #2d3038;
    color: white;
    border-radius: 7px;
    padding: 10px;
    height: 40px;
    font-size: 16px;
    :disabled {
        opacity: 0.4;
    }
    :hover {
        box-shadow: 0px 0px 7px 0px rgba(19, 17, 23, 0.93);
    }
    ${({ width, shape, size, status, fullWidth, pulse, appearance }) => css`
        width: ${width};
        letter-spacing: 0.4px;
        transition: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        white-space: nowrap;
        vertical-align: middle;
        user-select: none;

        &:hover,
        &:focus {
            text-decoration: none;
        }
    `}
`
