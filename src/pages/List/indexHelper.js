import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower } from 'react-icons/fi';

import './styles.css';
import '../../global.css';

export default function ListHelper() {
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
                        <h2>Todos os pedidos de ajuda cadastrados:</h2>
                        <Link to="/list-helped">
                            <button className="ver-outras">Ver as ajudas oferecidas</button>
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
                        <li key="4">
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
                        <li key="5">
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
                        <li key="6">
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
                        <li key="7">
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