import FormLogin from "./formLogin";

const Login = (props) => {
    return(
        <>
            <h1>Login</h1>
            <FormLogin navegaPara={props.navegaPara}/>
        </>
    );
};

export default Login;