import React from "react";
import style from './index.module.css';
import ButtonForm from '../components/UI/buttonForm/buttonForm';

function Index(){
    return (
        <div className={ style.index }>
            <ButtonForm>Login</ButtonForm>
            <ButtonForm>Regsitration</ButtonForm>
        </div>
    );
}

export default Index;