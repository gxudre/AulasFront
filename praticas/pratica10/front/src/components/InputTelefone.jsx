import React from 'react'

const InputTelefone = (props) => {
 
    const regras = {
        required: "Telefone é Obrigatório"
    }
 
    return (
    <>
    <label htmlFor="telefone">Telefone</label>
    <input type="tel"  {...props.register("telefone", regras)} />
    {props.error && <p>{props.error.mensagem}</p>}
    </>
  )
}

export default InputTelefone