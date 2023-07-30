import React from "react";
import '../css/btn.css'

function Button (props) {

    // return isNaN(value) && (value !== '.' && (value !== '='))
    const isOperator = value => {
        return isNaN(value);
    };

    return (
    <div 
        id = {props.children}
        className={`btn ${isOperator(props.children) ? 'operator' : ''}`.trimEnd()} 
        onClick={() => props.manageClick(props.children)}>
        {/*innerhtml*/}
        {props.children}
    </div>
    )
};

export default Button;
