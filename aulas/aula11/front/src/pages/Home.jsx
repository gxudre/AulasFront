import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'

const Home = () => {
    const navigate = useNavigate();
    const {logout} = useContext(AuthContext)
    
    const handleLogout = () => {
        logout();
        navigate('/login');
    }

    return (
    <>
        <h1>Home</h1>
        <button onClick={handleLogout}>Sair</button>
    </>
  )
}

export default Home