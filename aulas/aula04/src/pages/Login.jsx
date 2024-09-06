import Botao from "../components/Botao";
import Footer from "../components/Footer";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Link from "../components/Link";
import Logo from "../components/Logo";
import Titulo from "../components/Titulo";
import Conteudo from "../components/Conteudo";

const Login = () => {
  return (
    <>
      <Conteudo>
        <Logo imagem="https://www.svgrepo.com/show/520490/student.svg" Texto="Logo da aplicação"/>
        <Titulo texto="Aluno Online"/>
        <InputEmail/>
        <InputSenha/>
        <Botao texto="Entrar"/>
        <Link texto="Esqueceu a Senha?"/>
      </Conteudo>
      <Footer />
    </>
  );
};


export default Login;