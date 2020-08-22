import React from 'react';
import './styles.css';
import logo from '../../assets/logomulheres.png';

function Footer(){
    return(
        <footer>
            <img src={logo} alt="Logo de mulheres na computação de norte a sul" />

            <aside>
                Realização
                <img src="" alt="Meninas na computação" />
                <img src="" alt="Gurias da computação" />
            </aside>
        </footer>
    );
}

export default Footer;