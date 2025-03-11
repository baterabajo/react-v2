import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'


function Navbar() {
  return (
    <nav className='navbar' >
      <h1 className='Titulo'>React</h1>
      <ul className='ul'>
        <li> <Link to="/">Inicio</Link></li>
        <li><Link to="/Contacto">Contacto</Link></li>
        <li><Link to="/pokemon">Pokemon</Link></li>
        <li><Link to="/ItemListContainer/Productos 1">Productos 1</Link></li>
        <li><CartWidget /></li>
        <li><Link to="/ItemListContainerFirebase">Productos Firebase</Link></li>
        <li><Link to="/Xxx">Xxx Firebase</Link></li>
      </ul>
      <br></br>
    </nav>
 
  )
}

export default Navbar