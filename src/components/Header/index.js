import React from 'react';
import './styles.css'
import logo from '../../assets/logomulheres.png';

function Header() {
    return (
        <header>
            <img src={logo} alt="Logo de mulheres na computação de norte a sul" />

            <ul>
                <li><a href>Sobre</a></li>
                <li><a href>Agenda</a></li>
            </ul>
        </header>
    );
}

export default Header;