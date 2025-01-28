import style from "./login.module.css";
import ButtonForm from "../components/UI/buttonForm/buttonForm";
import InputForm from "../components/UI/inputForm/inputForm";
import EyeLogo from "../components/UI/logo/eyeLogo";
import EyeCrossedLogo from "../components/UI/logo/eyeCrossedLogo";

export default function Login(){
    const onClick = ( event ) => {
        event.preventDefault();
    };

    return (
        <form className={ style.login }>
            <InputForm type="text" placeholder="Enter name"/>
            <InputForm type="password" placeholder="Enter password"/>
            <ButtonForm type="submit" onclick={ onClick }>Done</ButtonForm>
        </form>
    );
}