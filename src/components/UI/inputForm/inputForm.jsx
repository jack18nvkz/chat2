import React from "react";
import style from "./inputForm.module.css";

function InputForm({ type, placeholder, onChange }) {
    return(
        <input 
            type={ type } 
            className={ style.input } 
            placeholder={ placeholder }
            minLength="6"
            maxLength="20"
            onChange={ onChange }
            required
        />
    );
}

export default InputForm;