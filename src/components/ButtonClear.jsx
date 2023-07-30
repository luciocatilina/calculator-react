import React from "react";
import '../css/btn_clear.css'

const ButtonClear = (props) => 
    <div className="btn_clear operator" onClick={props.manageClick}>
        {props.children}
    </div>

export default ButtonClear;