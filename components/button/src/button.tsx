import React from 'react';
import "./button.css"

const COLORS = {
    "eclipse": "#6d6a7a",
    "declipse": "#4f465c",
    "soybean": "#e0d1b7",
    "dsoybean": " #d7c49e",
}

const STYLES = [
    "btn-pelerin-solid",
    "btn-pelerin-outline",
    "btn-pelerin-dark-solid",
    "btn-pelerin-dark-outline",
    "btn-warning-solid",
    "btn-warning-outline",
    "btn-success-solid",
    "btn-success-outline"
]

interface buttonProps {
    color?: string;
    children?: React.ReactNode;
    onClick?: Function;
    buttonStyle: string
}


export const PelerinButton = ({ children, onClick, buttonStyle }) => {

    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]

    return (
        <button className={`btn ${checkButtonStyle}`} onClick={onClick}>
            {children}
        </button>
    )
}