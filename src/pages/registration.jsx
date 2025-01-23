import React from "react";
import style from "./registration.module.css";
import ButtonForm from "../components/UI/buttonForm/buttonForm";
import InputForm from "../components/UI/inputForm/inputForm";

function Regsitration(){
    const onClick = ( event ) => {
        event.preventDefault();
    };
    
    const [a, b, c] = document.querySelectorAll("input");

    return (
        <form className={ style.registration }>
            <InputForm type="text" placeholder="Enter name"/>
            <InputForm type="password" placeholder="Enter password"/>
            <InputForm type="password" placeholder="Repeat password"/>
            <ButtonForm type="submit" onclick={ onClick }>Done</ButtonForm>
        </form>
    );
}

export default Regsitration;