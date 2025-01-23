import React from "react";
import style from "./inputForm.module.css";

function InputForm({ type, placeholder }) {
    return(
        <input 
            type={ type } 
            className={ style.input } 
            placeholder={ placeholder }
            minLength="6"
            maxLength="20"
            required
        />
    );
}

export default InputForm;