import React from 'react'

const Welcome = props => {
    return (
        <h1>Hello, {props.name}</h1>
    );
}

Welcome.defaultProps = {
    name : "Friend" 
}

export default Welcome;