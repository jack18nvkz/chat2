import React from "react";
import style from "./logo.module.css";

function EyeCrossedLogo ({ width, height, color }){
    return (
        <svg 
            className={ style.logo } 
            style={{ width: width, height: height, fill: color }} 
            viewBox="0 0 24 24">
        <path d="M23.821,11.181v0a15.736,15.736,0,0,0-4.145-5.44l3.032-3.032L21.293,1.293,18,4.583A11.783,11.783,0,0,0,12,3C4.5,3,1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64,15.736,15.736,0,0,0,4.145,5.44L1.293,21.293l1.414,1.414L6,19.417A11.783,11.783,0,0,0,12,21c7.5,0,10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM6,12a5.99,5.99,0,0,1,9.471-4.885L14.019,8.567A3.947,3.947,0,0,0,12,8a4,4,0,0,0-4,4,3.947,3.947,0,0,0,.567,2.019L7.115,15.471A5.961,5.961,0,0,1,6,12Zm6,6a5.961,5.961,0,0,1-3.471-1.115l1.452-1.452A3.947,3.947,0,0,0,12,16a4,4,0,0,0,4-4,3.947,3.947,0,0,0-.567-2.019l1.452-1.452A5.99,5.99,0,0,1,12,18Z"/></svg>
    );
}

export default EyeCrossedLogo;