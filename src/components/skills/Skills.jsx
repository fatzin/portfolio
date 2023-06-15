import React from 'react'
import './skills.css';
import FrontEnd from './Frontend';
import BackEnd from './Backend';

function Skills() {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Habilidades</h2>
        <span className="section__subtitle">Nível técnico</span>

        <div className="skills__container container grid">
            <FrontEnd/>

            <BackEnd/>
        </div>
    </section>
  )
}

export default Skills