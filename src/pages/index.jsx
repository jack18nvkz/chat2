import style from './index.module.css';
import ButtonForm from '../components/UI/buttonForm/buttonForm';

export default function Index(){
    return (
        <div className={ style.index }>
            <ButtonForm>Login</ButtonForm>
            <ButtonForm>Regsitration</ButtonForm>
        </div>
    );
}