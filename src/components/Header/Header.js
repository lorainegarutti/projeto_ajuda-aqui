import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';
import '../../../src/global.css';

import precisoAjuda from '../../assets/preciso-ajuda.png';
import queroAjudar from '../../assets/quero-ajudar.png';
import logo from '../../assets/logo.svg';
import home from '../../assets/homepage.png';

export default function NavigationBar() {

    return (
        <header>
            <div className="logo">
                <Link className="logo" to="/">
                    <img src={logo} alt="logo" className="logo__icon" />
                </Link>
            </div>

            <nav className="navigation-bar">
                <div className="home topicos">
                    <img src={home} alt="home" className="home__icon itens-menu" />
                    <Link to="/" className="itens-menu">Home</Link>
                </div>
                <div className="quero-ajudar topicos">
                    <img src={queroAjudar} alt="quero ajudar" className="queroAjudar__icon  itens-menu" />
                    <Link to="/register" className="itens-menu">Quero ajudar!</Link>
                </div>
                <div className="preciso-ajuda topicos">
                    <img src={precisoAjuda} alt="preciso de ajuda" className="precisoAjuda__icon  itens-menu" />
                    <Link to="/register" className="itens-menu">Preciso de ajuda!</Link>
                </div>
            </nav>
        </header>
    );
}
