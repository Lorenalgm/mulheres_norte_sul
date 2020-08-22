import React from 'react';
import './styles.css';
import logo from '../../assets/logomulheres.png';
import logomeninas from '../../assets/logo.png';
import logogurias from '../../assets/logogurias.png';

function Footer(){
    return(
        <footer>
            <img className="logo" src={logo} alt="Logo de mulheres na computação de norte a sul" />

            <aside>
                Realização
                <div className="projects">
                    <img className="meninas" src={logomeninas} alt="Meninas na computação" />
                    <img className="gurias" src={logogurias} alt="Gurias da computação" />
                </div>
            </aside>
        </footer>
    );
}

export default Footer;