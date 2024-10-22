import React from 'react'
import Cabecalho from '../components/Cabecalho'
import Conteudo from '../components/Conteudo'
import Formulario from './Formulario'

const Novo = () => {
  return (
    <>
      <Cabecalho/>
      <Conteudo>
        <h2>Novo Contato</h2>
        <Formulario trataEnviar = {() => {}} />
      </Conteudo>
    </>
  )
}

export default Novo