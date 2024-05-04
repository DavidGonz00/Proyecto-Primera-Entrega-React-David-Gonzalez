import logo from '../Components/Img/Gamingstar.png';
import React from 'react';
import CartWidget from './CartWidget';
import ItemListContainer from './ItemListContainer';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" width="100" height="100" className="d-inline-block align-top" />
        </a>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Playstation 4</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Playstation 5</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Nintendo</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Xbox</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">PC</a>
            </li>
          </ul>
        </div>
        <CartWidget />
        <ItemListContainer props="¡Bienvenido a nuestra tienda en línea!" />
      </div>
      <div> 
      </div>
    </nav>
  );
}

export default NavBar;
