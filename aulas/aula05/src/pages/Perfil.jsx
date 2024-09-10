import Menu from "../components/Menu";

const Perfil = (props) => {
    return(
        <>
            <h1>Perfil do Usuário</h1>
            <Menu navegaPara={props.navegaPara}/>
        </>
    );
}

export default Perfil;