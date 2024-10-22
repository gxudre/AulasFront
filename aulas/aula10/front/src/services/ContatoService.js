import axios from "axios";

const uri = import.meta.env.API_URL;

const BuscarTodos = () => {};

const Buscar = (id) => {};

const Adicionar = (contato) => {
  return axios
    .post(url, contato)
    .then((response) => {
      return { sucesso: true, dados: response.data };
    }) // sucesso dados
    .catch((error) => {
      return { sucesso: false, mensagem: error.message };
    }); // deu ruim mensagem
};

const Atualizar = (contato) => {};

const Remover = (id) => {};

export { BuscarTodos, Buscar, Adicionar, Atualizar, Remover };
