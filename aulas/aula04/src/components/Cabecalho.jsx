import InputPesquisar from "./InputPesquisar"
import Logo from "./Logo"
import Titulo from "./Titulo"

const Cabecalho = () => {
    return(
        <header>
            <Logo imagem="https://www.svgrepo.com/show/520490/student.svg" Texto="Logo da aplicação"/>
            <Titulo texto="Aluno Online"/>
            <InputPesquisar/>
            <Logo imagem="https://www.svgrepo.com/show/440165/search.svg" texto="Icone de Pesquisar"/>
        </header>
    )
}

export default Cabecalho