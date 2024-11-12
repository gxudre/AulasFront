import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";



const Menu = () => {
  const navigate = useNavigate();

  const {logout} = useContext(AuthContext);

  const onSair = () => {
    logout();
    navigate("/login");
  }
  


    return (
    <>
    <nav>
        <ul>
            <li>
                <NavLink to="/home">Home</NavLink>
            </li>
            <li>
                <NavLink to="/perfil">Perfil</NavLink>
            </li>
            <li>
                <NavLink to="/admin">Administração</NavLink>
            </li>
            <li>
                <NavLink onclick={onSair}>Sair</NavLink>
            </li>
        </ul>
    </nav>
    </>
  )
}

export default Menu
