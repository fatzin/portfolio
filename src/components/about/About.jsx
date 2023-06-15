import React from 'react'
import './about.css';
import CV from "../../assets/FelipeCV.pdf";
import Info from './Info';
import {GrDocumentPdf} from 'react-icons/gr';

function About() {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">Sobre mim</h2>
        <span className="section__subtitle">Introdução</span>

        <div className="about__container container">
          
            <div className="about__data">
                <Info/>

                <p className="about__description">Web Developer, eu crio páginas com interfaces UI / UX, tenho experiência com projetos pessoais
                que desenvolvi durante os últimos anos.</p>

                <a download="" href={CV} className="button button--flex">Download CV
                  <GrDocumentPdf  className='button__icon'/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default About