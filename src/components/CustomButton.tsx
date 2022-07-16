import React from "react";

type PropsType = {
    title: string,
    disabled: boolean
    click: () => void
}

export const CustomButton = ({click, title, disabled}: PropsType) => {
    return (
        <button onClick={click} disabled={disabled}>{title}</button>
    )
}