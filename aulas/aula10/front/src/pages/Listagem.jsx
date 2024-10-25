import React, { useState } from 'react'
import { useEffect } from 'react'
import { BuscarTodos } from '../services/ContatoService'

const Listagem = (props) => {


  return (
    <ul>
        <li>
            <span>Nome</span>
            <span>Telefone</span>
            <span>Ações</span>
        </li>
        {props.itens.map((item,index) => (
            <li key={index}>
                <span>{item.nome}</span>
                <span>{item.telefone}</span>
                <span>
                    <button onClick={() => {}}>Editar</button>
                    <button onClick={() => props.onRemover(item.id)}>Remover</button>
                </span>
            </li>
        ))}
    </ul>
  )
}

export default Listagem