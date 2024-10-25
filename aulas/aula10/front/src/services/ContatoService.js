import axios from "axios";

const url = import.meta.env.VITE_API_URL;

const BuscarTodos = () => {
  return axios
  .get(url)
  .then((response) => {
    return {sucesso: true, dados: response.data};
  })
  .catch((error) => {
    return {sucesso: false, mensagem: error.message};
  })
};

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

const Remover = (id) => {
  return axios
  .delete(`${url}/${id}`)
  .then((response => {
    return { sucesso: true, dados: response.data };
  }))
  .catch((error) => {
    return { sucesso: false, mensagem: error.message };
  })
};

export { BuscarTodos, Buscar, Adicionar, Atualizar, Remover };
