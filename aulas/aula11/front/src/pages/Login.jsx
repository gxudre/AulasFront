import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../contexts/AuthContext'


const Login = () => {
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const handleLogin = () => {
        login({email: "fulano@iesb.br", senha: "abcd1234"})
        navigate('/home')
    }

    return (
    <>
        <h1>Login</h1>
        <button onClick={handleLogin}>Entrar</button>
    </>
  )
}

export default Login