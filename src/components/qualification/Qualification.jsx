import React from 'react';
import './qualification.css';

function Qualification() {
    return (
        <section className="qualification section">
            <h2 className="section__title">Qualificações</h2>
            <span className="section__subtitle">Minha jornada pessoal</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i> Educação
                    </div>

                    <div className="qualification__sections">
                        <div className="qualification__content qualification__content-active">
                            <div className="qualification__data">
                                <div>
                                    <h3 className="qualification__title">Ensino Médio</h3>
                                    <span className="qualification__subtitle">Colégio da Polícia Militar do Estado de Goiás</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i> 2016 - 2018
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>

                            <div className="qualification__data">
                                <div></div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>

                                <div>
                                    <h3 className="qualification__title">Ensino Superior</h3>
                                    <span className="qualification__subtitle">Universidade Federal de Goiás</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i> 2019 - Presente
                                    </div>
                                </div>
                            </div>

                            <div className="qualification__data">

                                <div>
                                    <h3 className="qualification__title">Data Analyst</h3>
                                    <span className="qualification__subtitle">Google Certificate</span>
                                    <div className="qualification__calender">
                                        <i className="uil uil-calendar-alt"></i> 2023
                                    </div>
                                </div>

                                <div>
                                    <span className="qualification__rounder"></span>
                                    <span className="qualification__line"></span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification