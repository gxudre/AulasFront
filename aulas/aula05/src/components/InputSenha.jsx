const InputSenha = (props) => {
  return (
    <>
      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        id="senha"
        name="senha"
        value={props.valor}
        onChange={(event) => props.mudarValor(event.target.value)}
        required
      />
    </>
  );
};

export default InputSenha;
