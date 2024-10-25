import React, { useState } from "react";
import { useEffect } from "react";
import { BuscarTodos, Remover } from "../services/ContatoService";
import Cabecalho from "../components/Cabecalho";
import Conteudo from "../components/Conteudo";
import Listagem from "./Listagem";

const Listar = () => {
  const [contatos, setContatos] = useState([]);
  const [erro, setErro] = useState("");

  const Carregar = async () => {
    const resultado = await BuscarTodos();
    if (resultado.sucesso) {
      setContatos(resultado.dados);
      setErro("");
    } else {
      setContatos([]);
      setErro(resultado.mensagem);
    }
  };

  const onRemover = async (id) => {
    const resultado = await Remover(id);
    if (resultado.sucesso) {
      await Carregar()
    } else {
      setErro(resultado.mensagem);
    }
  };

  useEffect(() => {
    Carregar();
  }, []);

  return (
    <>
      <Cabecalho />
      <Conteudo>
        {erro && <p>{erro}</p>}
        <h2>Lista de Contatos</h2>
        <Listagem itens={contatos} onRemover={onRemover} />
      </Conteudo>
    </>
  );
};

export default Listar;
