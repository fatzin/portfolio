import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';
import { BiMailSend } from 'react-icons/bi';

function Contact() {
const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bxdxvyw', 'template_mhhtqfa', form.current, 'DmmeAr4cf01AIeDvD')
    e.target.reset();
  };
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Entrar em contato!</h2>
            <span className="section__subtitle">Me contate</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Fale comigo</h3>

                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="bx bx-mail-send contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">felipe_second@hotmail.com</span>
                            <a href="mailto:felipe_second@hotmail.com" className="contact__button">Escreva um email! <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>

                        <div className="contact__card">
                            <i className='bx bxl-whatsapp' ></i>
                            <h3 className="contact__card-title">WhatsApp</h3>
                            <span className="contact__card-data">+5562985228864</span>
                            <a href="https://api.whatsapp.com/send?phone=5562985228864&text=Olá, gostaria de falar contigo!" className="contact__button">Fale via WhatsApp! <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className='contact__title'>Escreva para mim</h3>

                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Nome</label>
                            <input type="text" className="contact__form-input" placeholder='Insira seu nome' name='name' />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" className="contact__form-input" placeholder='Insira seu email' name='email' />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Mensagem</label>
                            <textarea name="message" cols="30" rows="10" className='contact__form-input' placeholder='Escreva a sua mensagem'></textarea>
                        </div>

                        <button className="button button--flex">
                            Enviar Mensagem
                            < BiMailSend className='button__icon'/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact