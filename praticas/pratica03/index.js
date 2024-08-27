
const d = document;

const root = d.getElementById("root");

//Login

const Conteudo = (...elementos) => {
    const main = d.createElement("main");
    elementos.forEach((elemento) => main.append(elemento));
    return main ;
};

const Rodape = (texto) => {
    const paragrafo = d.createElement("p");
    paragrafo.innerText = texto;
    const footer = d.createElement("footer");
    footer.append(paragrafo);
    return footer;

};

const Titulo = (texto) => {
    const h1 = d.createElement("h1");
    h1.innerText = texto;
    return h1;
};

const Icone = (origem, texto)  => {
    const img = d.createElement("img");
    img.setAttribute("src", origem);
    img.setAttribute("alt", texto);
    return img;   
};

const Input = (id, tipo, rotulo) => {
    const label = d.createElement("label");
    label.setAttribute("for", id);
    label.innerText = rotulo;
    const input = d.createElement("input");
    input.setAttribute("type", tipo);
    input.setAttribute("id", id);
    input.setAttribute("name", id);
    const div = d.createElement("div");
    div.append(label, input);
    return div;
};

const InputSubmit = (valor) => {
    const enviar = d.createElement("input");
    enviar.setAttribute("type", "submit");
    enviar.setAttribute("value", valor);
    return enviar ; 
};

const Link = (rota, texto) => {
    const a = d.createElement("a");
    a.setAttribute("href", rota);
    a.innerText = texto;
    return a ;
}; 

const onLogin = (event) => {
    event.preventDefault();
    Navega("/home");
};

const FormLogin = () => {
    const form = d.createElement("form")
    form.setAttribute("action" , "/login");
    form.setAttribute("method", "post");
    const inputEmail = Input("email", "email", "E-mail");
    const inputSenha = Input("senha", "password", "Senha");
    const inputEntrar = InputSubmit("Entrar");
    form.append(inputEmail, inputSenha, inputEntrar);
    form.addEventListener("submit", onLogin);
    return form; 
};

const PageLogin = () => {
    const logo = Icone("https://www.svgrepo.com/show/411955/learn.svg", "Logo da Aplicação");
    const titulo = Titulo("Aluno Online");
    const form = FormLogin();
    const esqueceuSenha = Link("/esqueceu-senha", "Esqueceu sua Senha?");
    const conteudo = Conteudo(logo, titulo, form, esqueceuSenha);
    const rodape = Rodape("Aluno Online ₢ Todos os Direitos Reservados.");
    root.append(conteudo, rodape);
    document.title = "Login - Aluno Online"
}

const Navega = (rota) => {
    root.innerHTML = null;
    if (rota === "/login"){
        PageLogin()
    }else if(rota === "/home"){
        PageHome()
    }else if(rota === "/perfil"){
        PagePerfil()
    }else{
        root.innerHTML = "<p>Erro 404. Página não encontrada.</p>"
    }
}

Navega("/login");

//HOME

const InputSearch = () => {
    const input = d.createElement("input")
    input.setAttribute("type", "search");
    input.setAttribute("placeholder", "Pesquisar...");
    return input;
}

const Cabecalho = () => {
    const logo = Icone ("https://www.svgrepo.com/show/411955/learn.svg",
    "Logo da Aplicação");
    const titulo = Titulo("Aluno Online");
    const grupo1 = d.createElement("div");
    grupo1.append(logo, titulo);
    const input = InputSearch();
    const icone = Icone("https://www.svgrepo.com/show/507851/search-square.svg",
    "Ícone de Pesquisar");
    const grupo2 = d.createElement("div");
    grupo2.append(input,icone);
    const header = d.createElement("header");
    header.append(grupo1,grupo2);
    return header;
};

const onClickMenu = (event) => {
    event.preventDefault();
    Navega(event.target.getAttribute("href"));
};

const Menu = () => {
    const opcoes = [
        {rota: "/home", titulo: "Home"},
        { rota: "/perfil", titulo: "Perfil"},
        {rota: "/login", titulo: "Sair"},
    ];
    const lista = d.createElement("ul");
    opcoes.forEach((opcao) => {
        const link = Link (opcao.rota, opcao.titulo);
        link.addEventListener("click", onClickMenu);
        const item = d.createElement("li");
        item.append(link);
        lista.append(item);
    });
    const nav = d.createElement("nav");
    nav.append(lista);
    return nav;
};

const Subtitulo = (texto) => {
    const h2 = d.createElement("h2")
    h2.innerText = texto
    return h2;
};

const Painel = (nome) => {
    const titulo = d.createElement("h3");
    titulo.innerText = nome;
    const lista = d.createElement("ul");
    const painel = d.createElement("article");
    painel.append(titulo, lista);
    return painel;
}

const Secao = (nome, conteudo) => {
    const titulo = Subtitulo(nome);
    const section = d.createElement("section");
    section.append(titulo, conteudo);
    return section;
};

const PageHome = () => {
    const menu = Menu();
    const grupo = d.createElement("div");
    const itens = ["Mural de Avisos", "Agenda Academica", "Histórico de Notas", "Histótico de Faltas",];
    itens.forEach((item) => grupo.append(Painel(item)));
    const secao = Secao("Página Inicial", grupo);
    const conteudo = Conteudo (menu, secao);
    const cabecalho = Cabecalho();
    root.append(cabecalho, conteudo);
    document.title = "Home - Aluno Online";
};

const onSalvar = (event) => {
    event.preventDefault();
    Navega("/perfil");
};

const FormPerfil = () => {
    const form = document.createElement("form");
    form.setAttribute("action", "/perfil");
    form.setAttribute("method", "post");
    const inputNome = Input("nome", "text", "Nome");
    const inputEmail = Input("email", "email", "E-mail");
    const inputSenha = Input("senha", "password", "Senha");
    const inputSalvar = InputSubmit("Salvar");
    form.append(inputNome, inputEmail, inputSenha, inputSalvar);
    form.addEventListener("submit", onSalvar);
    return form;  
}

const PagePerfil = () => {
    const menu = Menu();
    const form = FormPerfil();
    const secao = Secao("Perfil do Aluno", form);
    const conteudo = Conteudo(menu, secao);
    const cabecalho = Cabecalho();
    root.append(cabecalho, conteudo);
    document.title = "Perfil - Aluno Online";
  }
  