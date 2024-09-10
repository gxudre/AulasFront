const ButtonBtn = (props) => {
    return(
        <button onClick={props.aoClicar}>{props.texto}</button>
    );
}

export default ButtonBtn;