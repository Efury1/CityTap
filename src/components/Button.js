import React from 'react';

/*Button component 
* Pass in custom title
* */
const buttonStyle = {
    margin: '10px 0'
};

const Button = ({ label, handleClick }) => (
    <button
        className={"btn btn-default"}
        style={buttonStyle}
        onClick={handleClick}
    >{label}</button>
)

export default Button;