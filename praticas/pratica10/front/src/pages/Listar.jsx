import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cabecalho from '../components/Cabecalho'
import Conteudo from '../components/Conteudo'
import { BuscarTodos, Remover } from '../service/ContatoService'
import Listagem from './Listagem'

const Listar = () => {
    const [contatos, setContatos] = useState([])
    const [erro, setErro] = useState('')
    const navigate = useNavigate()

    useEffect(() => {
        carregar();
    }, [])

    const carregar = async () => {
        const resposta = await BuscarTodos()
        if(resposta.sucesso){
            setContatos(resposta.dados);
            console.log(resposta.dados)
        }else{
            setErro(resposta.mensagem)
        }
    }

    const  trataAtualizar = (id) => {
        navigate(`/editar/${id}`)
    }

    const trataRemover = async (id) => {
        const resposta = await Remover(id);
        if (resposta.sucesso) {
            carregar();
            setErro('');
        }else {
            setErro(resposta.mensagem)
        }
    }

  return (
    <>
        <Cabecalho/>
        <Conteudo>
            <h2>Listar Contatos</h2>
            <Listagem itens={contatos}
            trataAtualizar={trataAtualizar}
            trataRemover={trataRemover}/>
            {erro && <p>{erro}</p>}
        </Conteudo>
    </>
  )
}

export default Listar