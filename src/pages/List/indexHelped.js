import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import './styles.css';
import '../../global.css';

export default function ListHelped() {
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
            <section className="lista">
                <div className="apresentacao">
                    <div className="titulo">
                        <h2>Todas as ajudas que foram oferecidas:</h2>
                        <Link to="/list-helper">
                        <button className="ver-outras">Ver os pedidos de ajuda</button>
                        </Link>
                    </div>
                    <ul>
                        <li key="0">
                            <strong>NOME:</strong>
                            <p>Larissa</p>

                            <strong>PRECISO DE AJUDA PARA:</strong>
                            <p>Meu pequeno negócio</p>

                            <strong>DESCRIÇÃO DA AJUDA:</strong>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat debitis natus itaque, est obcaecati possimus tenetur dicta officia architecto quisquam iusto ullam cupiditate. Maxime ratione consequatur quasi possimus, in harum?</p>
                            <div className="botoes-casos">
                                <button className="email">Mandar e-mail</button>
                                <button className="whatsapp">Mandar WhatsApp</button>
                            </div>
                        </li>
                        <li key="1">
                            <strong>NOME:</strong>
                            <p>Larissa</p>

                            <strong>PRECISO DE AJUDA PARA:</strong>
                            <p>Meu pequeno negócio</p>

                            <strong>DESCRIÇÃO DA AJUDA:</strong>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat debitis natus itaque, est obcaecati possimus tenetur dicta officia architecto quisquam iusto ullam cupiditate. Maxime ratione consequatur quasi possimus, in harum?</p>
                            <div className="botoes-casos">
                                <button className="email">Mandar e-mail</button>
                                <button className="whatsapp">Mandar WhatsApp</button>
                            </div>
                        </li>
                        <li key="2">
                            <strong>NOME:</strong>
                            <p>Larissa</p>

                            <strong>PRECISO DE AJUDA PARA:</strong>
                            <p>Meu pequeno negócio</p>

                            <strong>DESCRIÇÃO DA AJUDA:</strong>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat debitis natus itaque, est obcaecati possimus tenetur dicta officia architecto quisquam iusto ullam cupiditate. Maxime ratione consequatur quasi possimus, in harum?</p>
                            <div className="botoes-casos">
                                <button className="email">Mandar e-mail</button>
                                <button className="whatsapp">Mandar WhatsApp</button>
                            </div>
                        </li>
                        <li key="3">
                            <strong>NOME:</strong>
                            <p>Larissa</p>

                            <strong>PRECISO DE AJUDA PARA:</strong>
                            <p>Meu pequeno negócio</p>

                            <strong>DESCRIÇÃO DA AJUDA:</strong>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat debitis natus itaque, est obcaecati possimus tenetur dicta officia architecto quisquam iusto ullam cupiditate. Maxime ratione consequatur quasi possimus, in harum?</p>
                            <div className="botoes-casos">
                                <button className="email">Mandar e-mail</button>
                                <button className="whatsapp">Mandar WhatsApp</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}