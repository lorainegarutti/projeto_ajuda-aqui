import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiPower } from 'react-icons/fi';

import './styles.css';
import '../../global.css';

export default function Profile() {
    function handleDeleteIncident() {

    }

    function handleLogout() {

    }

    return (
        <>
            <section className="botoes-adicionar">
                <h2>Olá, Larissa! <br /> O que você quer fazer agora?</h2> 
                <Link to="/form">   
                <button>Quero oferecer ajuda!</button>
                </Link>
                <Link to="/form">
                <button>Quero pedir ajuda!</button>
                </Link>
                <button className="logout" onClick={handleLogout} type="button">
                    <FiPower size={20} color="#E02041" />
                </button>
            </section>
            <section className="lista-pessoal">
                <div className="apresentacao">

                        <h2>As ajudas que você ofereceu:</h2>

                    <ul>
                        <li key="0">
                            <div className="cabecalho">
                                <strong>PRECISO DE AJUDA PARA:</strong>
                                <button onClick={handleDeleteIncident} type="button">
                                    <FiTrash2 size={23} color="a8a8b3" />
                                </button>
                            </div>
                            <p>Meu pequeno negócio</p>

                            <strong>DESCRIÇÃO DA AJUDA:</strong>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat debitis natus itaque, est obcaecati possimus tenetur dicta officia architecto quisquam iusto ullam cupiditate. Maxime ratione consequatur quasi possimus, in harum?</p>
                        </li>
                    </ul>
                    <Link to="/list-helped">
                            <button className="ver-outras">Ver ofertas de ajuda de outras pessoas</button>
                    </Link>
                </div>
            </section>
            <section className="lista-pessoal">
                <div className="apresentacao">
                        <h2>Seus pedidos de ajuda:</h2>

                    <ul>
                        <li key="0">
                            <div className="cabecalho">
                                <strong>PRECISO DE AJUDA PARA:</strong>
                                <button onClick={handleDeleteIncident} type="button">
                                    <FiTrash2 size={23} color="a8a8b3" />
                                </button>
                            </div>
                            <p>Meu pequeno negócio</p>

                            <strong>DESCRIÇÃO DA AJUDA:</strong>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat debitis natus itaque, est obcaecati possimus tenetur dicta officia architecto quisquam iusto ullam cupiditate. Maxime ratione consequatur quasi possimus, in harum?</p>
                        </li>
                    </ul>

                    <Link to="/list-helper">
                        <button className="ver-outras">Ver pedidos de ajuda de outras pessoas</button>
                    </Link>
                </div>
            </section>
        </>
    )
    }