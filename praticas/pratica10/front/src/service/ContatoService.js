import axios from "axios"

const url = import.meta.env.VITE_API_URL

const BuscarTodos = () => {
    return axios.get(url)
    .then((response) => { return {sucesso: true, dados: response.data}})
    .catch((error) => { return {sucesso: false, mensagem: "Ocorreu um Erro!"}})
}

const BuscarUm = (id) => {
    return axios.get(`${url}/${id}`)
    .then((response) => { return {sucesso: true, dados: response.data}})
    .catch((error) => { return {sucesso: false, mensagem: "Ocorreu um Erro!"} })
}

const Adicionar = (contato) => {
    return axios.post(url, contato)
    .then((response) => { return {sucesso: true , dados: response.data}})
    .catch((error) => { return {sucesso: false , Mensagem: "Ocorreu um Erro!"}})
}

const Atualizar = (contato) => {
    return axios.put(`${url}/${contato.id}`, {nome: contato.nome, telefone: contato.telefone})
    .then((response) => { return {sucesso: true, dados: response.data}})
    .catch((error) => { return {sucesso: false, mensagem: "Ocorreu um Erro!"}})
}

const Remover = (id) => {
    return axios.delete(`${url}/${id}`)
    .then((response) => {return {sucesso: true, dados: response.data}})
    .catch((error) => {return {sucesso: false, mensagem: "Ocorreu um Erro!"}})
}


export {BuscarTodos, BuscarUm, Adicionar, Atualizar, Remover} ;