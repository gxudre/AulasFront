const root = document.getElementById("root");


// componentes
const Cabecalho = () => {
    const header = document.createElement('header');
    return header;
}

const Conteudo = () => {
    const main = document.createElement("main");
    return main;
} ;

const Rodape = () => {
    const footer = document.createElement("footer");
    return footer;
}


// Páginas
const PageLogin = () => {
    const conteudo = Conteudo();
    const rodape = Rodape();
    root.append(conteudo, rodape);
}

const PageHome = () => {
    const cabecalho = Cabecalho()
    const conteudo = Conteudo()
    root.append(cabecalho, conteudo);
}

PageLogin();