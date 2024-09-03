import BtnSubmit from "../components/BtnSubmit";
import Footer from "../components/Footer";
import InputEmail from "../components/InputEmail";
import InputSenha from "../components/InputSenha";
import Link from "../components/Link";
import Logo from "../components/Logo";
import Titulo from "../components/Titulo";

const Login = () => {
  return (
    <>
      <main>
        <Logo/>
        <Titulo/>
        <InputEmail/>
        <InputSenha/>
        <BtnSubmit/>
        <Link/>
      </main>
      <Footer />
    </>
  );
};


export default Login;