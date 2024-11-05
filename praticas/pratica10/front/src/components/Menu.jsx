import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
        <ul>
            <li>
                <NavLink to = '/'>Listar Contatos</NavLink>
            </li>
            <li>
                <NavLink to= '/novo'>Novo Contato</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Menu