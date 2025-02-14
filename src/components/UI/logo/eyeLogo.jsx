import React from "react";
import style from "./logo.module.css";

function EyeLogo ({ width, height, color }){
    return (
        <svg 
            className={ style.logo } 
            style={{ width: width, height: height, fill: color }} 
            viewBox="0 0 24 24">
        <path d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,18a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,18Z"/><circle cx="12" cy="12" r="4"/></svg>
    );
}

export default EyeLogo;