import React from 'react'
import {useForm} from 'react-hook-form';

const App = () => {
  const {register, handleSubmit, formState: {errors}} = useForm();
  
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <label>E-mail</label>
        <input type="text" {...register('email', {required: { value: true , message: "Email é obrigatório!"},
        pattern : { value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: "Formato de email inválido !"}
        })} />
        {errors.email && <p>{errors.email.message}</p>}
        <label >Senha</label>
        <input type="password" {...register('senha', {required : {value :true , message: "Senha é obrigatória!"},
        minLength: {value: 6, message: "A senha deve conter no mínimo 6 caracteres"}
        })}/>
        {errors.senha && <p>{errors.senha.message}</p>}
        <button>Entrar</button>
      </form>
    </>
  )
}

export default App