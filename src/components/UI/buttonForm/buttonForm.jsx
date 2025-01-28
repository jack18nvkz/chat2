import React from 'react';
import style from './buttonForm.module.css'; 

function ButtonForm({ type, onclick, children, disabled }){
    return (
        <button 
            className={ style.button } 
            type={ type ? type : "button"}
            onClick={ onclick }
            disabled={ disabled }
        >{ children }</button>
    );
}

export default ButtonForm;
