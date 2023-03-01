import React, { useState } from 'react';
import './services.css';

function Services() {

    const  [ toggleState, setToggleState] = useState(0);
    
    const toggleTab = (index) =>{
        setToggleState(index);
    }

    return (
        <section className="services section" id="services">
            <h2 className="section__title">Serviços</h2>
            <span className="section__subtitle">O que eu ofereço</span>

            <div className="services__container container grid">
                <div className="services__content">
                    <div>
                        <i className="uil uil-web-grid services__icon"></i>
                        <h3 className="services__title">Web Development</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>Ver mais
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Web Development</h3>
                            <p className="services__modal-description"></p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Desenvolvo aplicações web responsivas.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Crio UX interativas.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Eu uso de bastante criatividade em meus projetos.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Uso sua identidade visual para projetar o seu webapp.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="services__content">
                    <div>
                        <i className="uil uil-brackets-curly services__icon"></i>
                        <h3 className="services__title">BackEnd</h3>
                    </div>

                    <span className="services__button" onClick={() => toggleTab(2)}>Ver mais
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">BackEnd</h3>
                            <p className="services__modal-description"></p>

                            <ul className="services__modal-services grid">
                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Conecto sua aplicação com o seu banco de dados.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Faço o uso de API's para alimentar seu projeto.</p>
                                </li>

                                <li className="services__modal-service">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">Garanto a segurança de dados e informações.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            
            </div>
        </section>
    )
}

export default Services