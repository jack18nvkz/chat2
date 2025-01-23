import React from 'react';
import style from './buttonForm.module.css'; 

function ButtonForm({ type, onclick, children }){
    return (
        <button 
            className={ style.button } 
            type={ type ? type : "button"}
            onClick={ onclick }
        >{ children }</button>
    );
}

export default ButtonForm;
