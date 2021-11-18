import React from 'react'

function Button({color, bgColor, text}) {

    const style = {
        color: `${color}`,
        backgroundColor: `${bgColor}`
    }

    return (
        <button style={style}>
            {text}
        </button>
    )
}

export default Button
