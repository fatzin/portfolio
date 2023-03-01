import React from 'react'

function Info() {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-award about__icon'></i>
            <h3 className="about__title">Experiência</h3>
            <span className="about__subtitle">1 Ano Estudando FrontEnd</span>
        </div>
        <div className="about__box">
        <i class='bx bx-briefcase-alt about__icon' ></i>
            <h3 className="about__title">Completos</h3>
            <span className="about__subtitle">38 + Projetos</span>
        </div>
        <div className="about__box">
        <i class='bx bx-support about__icon' ></i>
            <h3 className="about__title">Dúvidas?</h3>
            <span className="about__subtitle">Disponível 24/7</span>
        </div>
    </div>
  )
}

export default Info