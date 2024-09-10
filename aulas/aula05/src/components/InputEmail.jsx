const InputEmail = (props) => {
  return (
    <>
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        name="email"
        value={props.valor}
        onChange={(event) => props.mudarValor(event.target.value)}
        required
      />
    </>
  );
};

export default InputEmail;
