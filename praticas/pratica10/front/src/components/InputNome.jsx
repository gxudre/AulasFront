import React from 'react'

const InputNome = (props) => {
  
  const regras = {
    required: "Nome é Obrigatório"
  }

    return (
    <>
        <label htmlFor="nome">Nome</label>
        <input type="text" {...props.register("nome" , regras)} />
        {props.error && <p>{props.error.messagem}</p>}
    </>
  )
}

export default InputNome