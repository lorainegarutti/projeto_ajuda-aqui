import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css';
import '../../global.css';

export default function Form() {
    function handleSubmit() {

    }

    function handleChange() {

    }

    return (
        <section className="main">
        <div className="content">
            <div className="titulo-form">
                <h1>Cadastre já seu oferecimento ou pedido de ajuda!</h1>
                <p>Preencha todos os campos com atenção. <br /><br /> WhatsApp é opcional, mas uma forma bacana de entrarem em contato com você!</p>
                <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        <span>Voltar para painel</span>
                </Link>
            </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" value="Nome" onChange={handleChange} placeholder="Nome completo" />
                    <input type="e-mail" value="E-mail" onChange={handleChange} placeholder="E-mail" />
                    <input type="text" value="WhatsApp" onChange={handleChange} placeholder="WhatsApp => DDD + telefone (só números)" />
                    <div className="label">
                        <label>
                            <p>Você quer:</p>
                            <select className="primeiro-select" onChange={handleChange}>
                                <option value="pedir">Pedir ajuda</option>
                                <option value="oferecer">Oferecer ajuda</option>
                            </select>
                        </label>
                        <label>
                            <p>A ajuda é para:</p>
                            <select className="segundo-select"  onChange={handleChange}>
                                <option value="negocio">Pequeno negócio (profissional)</option>
                                <option value="familia">Família (pessoal)</option>
                                <option value="entidade">Uma entidade sem fins lucrativos</option>
                            </select>
                        </label>
                    </div>
                    <textarea name="description" value="Descricao" onChange={handleChange} cols="30" rows="10" placeholder="Descrição completa da ajuda"></textarea>
                    <button type="submit" value="Cadastrar">Cadastrar</button>
                </form>

        </div>
        </section>
    )
}