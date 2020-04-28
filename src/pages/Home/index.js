import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import instagram from '../../assets/instagram.png';
import './styles.css';
import '../../../src/global.css';

export default function Home() {
    function handleLogon() {

    }

    return (
        <section className="home">
            <div className="primeiro-container">
                <div className="logon-form">
                    <h2>Faça seu login</h2>
                    <form onSubmit={handleLogon}>
                        <input type="text" placeholder="Sua ID" className="nome" />
                        <input type="email" placeholder="E-mail" className="email" />
                        <button className="entrar" type="submit">Entrar</button>
                    </form>
                </div>
                <button className="sem-cadastro">
                        <Link to="/register">
                            <FiArrowLeft size={16} color="#E02041" />
                            <span>Não tenho cadastro</span>
                        </Link>
                </button>
            </div>

            <div className="container-home">
                <div className="texto">
                    <h1>Quem somos?</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum amet ad animi nostrum natus porro velit repellendus eaque odit! Ab consequatur fuga ipsam nobis quae, ex ullam dolores quod doloremque.
                    </p>
                    <h2>Regras para participação</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni vel aut nam facilis temporibus dignissimos, a illo architecto quod doloribus dicta accusamus sunt accusantium consequuntur voluptatum odit iste ipsa? Explicabo.
                    </p>
                    <p>
                        Fazemos o encontro de pessoas que estão precisando de ajuda financeira/projetos e de anjos que se disponibilizam a doar seu tempo e seu trabalho para ajudar!
                    </p>
                </div>

                <div className="contato">
                    <p className="nosso-contato">
                        Entre em contato conosco:
                    </p>
                    <div className="nomes">
                        <p>Loraine
                        <a className="instagram" href="http://www.instagram.com/lorainegarutti/">
                                <img className="logo-instagram" src={instagram} alt="logo do Instagram" />
                            </a>
                        </p>
                        <p>Womanas
                        <a href="http://www.instagram.com/_womanas/">
                                <img className="logo-instagram" src={instagram} alt="logo do Instagram" />
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
