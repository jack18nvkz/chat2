import { useState } from "react";
import style from "./registration.module.css";
import ButtonForm from "../components/UI/buttonForm/buttonForm";
import InputForm from "../components/UI/inputForm/inputForm";

export default function Regsitration(){
    const [ type, setType ] = useState( "password" );
    const [ isDoneDisabled, setIsDoneDisabled ] = useState( true );
    const [ colors, setColors ] = useState( new Array( 6 ).fill( "red" ) );
    
    console.log(colors);

    let timerId = null;

    function validateLogin( login ) {
        const regex = /^[a-zA-Z0-9]{4,20}$/;
        const length = login.length;
        const result = regex.test( login );

        return { result, length };
    }

    function onClick( event ) {
        event.preventDefault();
        console.log(true);
    };

    function loginOnChange( event ){
        if( timerId )
            clearTimeout( timerId );

        timerId = setTimeout( () => { 
            console.log( validateLogin( event.target.value ) );
            const res = validateLogin( event.target.value );
            if( res.length >= 4){ 
                setColors(colors.map( (v, i ) => {
                    i === 0 ? "green" : "red"
                } ));
                console.log(colors);
            }
        }, 1000 );
    }

    function checkBoxOnChange( event ){
        if( event.target.checked )
            setType( "text" );
        else setType( "password" );
    }

    return (
        <form className={ style.registration }>
            <InputForm type="text" placeholder="Логин" onChange={ loginOnChange }/>
            <ul>
                <li style={{ color: colors[0]}}>длина 4-20 символов</li>
                <li style={{ color: colors[1]}}>латинские буквы и цифры</li>
                <li style={{ color: colors[2]}}>логин не занят</li>
            </ul>
            <hr />
            <InputForm type={ type } placeholder="Пароль"/>
            <InputForm type={ type } placeholder="Повторите пароль"/>
            <ul>
                <li style={{ color: colors[3]}}>длина 8-20 символов</li>
                <li style={{ color: colors[4]}}>содержит буквы и цифры</li>
                <li style={{ color: colors[5]}}>пароли совпадают</li>
            </ul>
            <hr />
            <div className={ style.container }>
                <input type="checkbox" onChange={ checkBoxOnChange }/>
                <div>показать пароль</div>
            </div>
            <ButtonForm type="submit" onclick={ onClick } disabled={ isDoneDisabled }>Готово</ButtonForm>
        </form>
    );
}