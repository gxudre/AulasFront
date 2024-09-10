import { useState } from "react";
import ButtonBtn from "../components/ButtonBtn";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";

const FormLogin = (props) => {
    
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const aoClicar = (event) => {
        event.preventDefault();
        props.navegaPara("/home")
        // fazer chamado backend
    }

    return(
        <>
            <InputEmail valor={email} mudarValor={setEmail}/>
            <InputSenha valor={senha} mudarValor={setSenha}/>
            <ButtonBtn texto ="Entrar" aoClicar={aoClicar}/>
        </>
    );
}

export default FormLogin;