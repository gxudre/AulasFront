import React from "react";
import { useContext } from "react";
import {useNavigate} from "react-router-dom"

import {AuthContext} from "../contexts/AuthContext"

const Registrar = () => {
  const navigate = useNavigate();

  const {registrar} = useContext(AuthContext);

  const onSalvar = () => {
    registrar({email: "fulano@iesb.br", senha: "abcd1234"});
    navigate('/home')
  }
  
  return (
    <>
      <h1>Cadastro de Usuários</h1>
      <button onClick={onSalvar}>Salvar</button>
    </>
  );
};

export default Registrar;
