import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../api';
import './styles.css';
import '../../../src/global.css';

export default function Register() {
    function handleRegister() {

    }
    return (
        <div className="container-register">
            <section className="register">

                <div className="cabecalho-form">
                    <h1>Você precisa de ajuda ou pode ajudar outra pessoa que precisa?</h1>
                    <p>
                        Então faça seu cadastro para entrar na plataforma e conseguir ajudar pessoas e pequenos
                        negócios que precisam!
                    </p>
                    <button className="fazer-logon">
                        <Link className="back-link" to="/">
                            <FiArrowLeft size={16} color="#E02041" />
                            <span>Já tenho cadastro</span>
                        </Link>
                    </button>
                </div>

                <form onSubmit={handleRegister}>
                    <input type="text" placeholder="Nome completo" className="nome" />
                    <input type="email" placeholder="E-mail" className="email" />
                    <input placeholder="WhatsApp => DDD + telefone (só números)" className="whatsapp" />
                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" style={{ width: 80 }} />
                    </div>
                    <button className="cadastrar" type="submit">Cadastrar</button>
                </form>
                
            </section>
        </div>
    );
}