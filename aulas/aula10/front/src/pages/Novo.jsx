import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Conteudo from '../components/Conteudo'
import Formulario from './Formulario'
import {Adicionar} from '../services/ContatoService'

const Novo = () => {
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const OnSalvar = async (data) => {
    const resultado = await Adicionar(data);
    if (resultado.sucesso){
      setErro('');
      navigate("/");
    }else{
      setErro(`Deu Ruim! ${resultado.mensagem}`)
    }
  } 

  return (
    <>
      <Cabecalho/>
      <Conteudo>
        {erro && <p>{erro}</p>}
        <h2>Novo Contato</h2>
        <Formulario trataEnviar = {OnSalvar} />
      </Conteudo>
    </>
  )
}

export default Novo