import React from 'react';
import "./footer.css";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Felipe Antônio</h1>
                <ul className='footer__list'>
                    <li>
                        <a href="#about" className="footer__link">Sobre mim</a>
                    </li>
                    <li>
                        <a href="#portfolio" className="footer__link">Projetos</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a href="https://www.instagram.com/lipegm1/" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://github.com/fatzin" className="footer__social-link" target="_blank" rel="noreferrer">
                        <i className="bx bxl-github"></i>
                    </a>
                </div>
                <span className="footer__copy">&#169; Fatzin. Todos os direitos reservados.</span>
            </div>
        </footer>
    )
}

export default Footer