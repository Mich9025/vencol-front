"use client";
import Link from 'next/link';
import Image from 'next/image';

function FooterTwo() {
  return (
    <div>
        {/* Inicio del Área de Footer  */}
        <footer className="footer-area footer-style-one-wrapper bg-color-footer-2 bg_images tmp-section-gap">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="subscribe-area subscribe-style-1">
                    <div className="subscribe-inner">
                    <div className="title">Suscríbete al Boletín</div>
                    <form action="#" className="newsletter-form-1 mt--40">
                        <input type="email" placeholder="Tu Email" required="" />
                        <button type="submit" className="tmp-btn btn-primary">
                        Suscribirse Ahora{" "}
                        <i className="fa-sharp fa-regular fa-paper-plane" />
                        </button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer-main footer-style-one">
                <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <div className="single-footer-wrapper border-right mr--20">
                    <div className="logo">
                        <a href="index.html">
                        <Image width={188} height={61} src="/assets/logos/logo-vencol.webp" alt="logo de la empresa" />
                        </a>
                    </div>
                    <p className="description">
                        Líderes en empaques sostenibles para alimentos. Ofrecemos soluciones 
                        innovadoras y ecológicas que protegen tus productos y el medio ambiente.
                    </p>
                    <div className="day-time">
                        <div className="icon" style={{color: '#98e024'}}>
                        <i className="fa-solid fa-alarm-clock" />
                        </div>
                        <div className="content">
                        <div className="day">Domingo - Viernes:</div>
                        <div className="time">9:00 AM – 8:00 PM</div>
                        </div>
                    </div>
                    <ul className="social-icons solid-social-icons rounded-social-icons">
                        <li>
                        <a href="#" style={{backgroundColor: '#98e024', borderColor: '#98e024'}}>
                            <i className="fa-brands fa-facebook-f" />
                        </a>
                        </li>
                        <li>
                        <a href="#" style={{backgroundColor: '#98e024', borderColor: '#98e024'}}>
                            <i className="fa-brands fa-linkedin-in" />
                        </a>
                        </li>
                        <li>
                        <a href="#" style={{backgroundColor: '#98e024', borderColor: '#98e024'}}>
                            <i className="fa-brands fa-twitter" />
                        </a>
                        </li>
                        <li>
                        <a href="#" style={{backgroundColor: '#98e024', borderColor: '#98e024'}}>
                            <i className="fa-brands fa-instagram" />
                        </a>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6">
                    <div className="single-footer-wrapper pl-50 pl_md--0 pl_sm--0">
                    <h5 className="ft-title" style={{color: '#98e024'}}>Enlaces Rápidos</h5>
                    <ul className="ft-link">
                        <li>
                        <a href="about.html">Sobre la Empresa</a>
                        </li>
                        <li>
                        <a href="team.html">Nuestro Equipo</a>
                        </li>
                        <li>
                        <a href="service.html">Nuestros Servicios</a>
                        </li>
                        <li>
                        <a href="blog.html">Noticias y Medios</a>
                        </li>
                        <li>
                        <a href="contact.html">Contáctanos</a>
                        </li>                        
                    </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-footer-wrapper pr--15">
                    <h5 className="ft-title" style={{color: '#98e024'}}>Publicaciones Recientes</h5>
                    <div className="single-post">
                        <div className="thumbnail">
                        <Image width={80} height={80}
                            src="/assets/images/footer/small-post.jpg"
                            alt="Empaques Sostenibles"
                        />
                        </div>
                        <div className="content">
                        <div className="date">
                            <i className="fa-light fa-calendar-days" style={{color: '#98e024'}} />
                            <span>12 Feb, 2024</span>
                        </div>
                        <a href="blog-details.html">
                            <h6 className="title">
                            Innovaciones en Empaques Biodegradables para Carnes
                            </h6>
                        </a>
                        </div>
                    </div>
                    <div className="single-post">
                        <div className="thumbnail">
                        <Image width={80} height={80}
                            src="/assets/images/footer/small-post-2.jpg"
                            alt="Sostenibilidad Alimentaria"
                        />
                        </div>
                        <div className="content">
                        <div className="date">
                            <i className="fa-light fa-calendar-days" style={{color: '#98e024'}} />
                            <span>8 Feb, 2024</span>
                        </div>
                        <a href="blog-details.html">
                            <h6 className="title">
                            Reduciendo el Impacto Ambiental en la Industria Alimentaria
                            </h6>
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-footer-wrapper">
                    <h5 className="ft-title" style={{color: '#98e024'}}>Información:</h5>
                    <ul className="ft-link">
                        <li className="ft-location">
                        <i className="fa-light fa-location-dot" style={{color: '#98e024'}} />
                        {' '}COLOMBIA - Carrera 69P #74B-71 Bogotá
                        </li>
                         <li className="ft-location">
                        <i className="fa-light fa-location-dot" style={{color: '#98e024'}} />
                        {' '}USA - 8209 NW 70 St. Miami, FL 33166
                        </li>
                         <li className="ft-location">
                        <i className="fa-light fa-location-dot" style={{color: '#98e024'}} />
                        {' '}MEXICO - Anillo Vial Fray Junipero, Salitre San Jusé El Alto, Solar Urbano 106 4, Queretaro
                        </li>
                         <li className="ft-location">
                        <i className="fa-light fa-location-dot" style={{color: '#98e024'}} />
                        {' '}ECUADOR - Vasco de Contreras N36-235 y Mañosca, Quito
                        </li>
                        <li style={{width: '310px'}}>
                        <div className="single-contact">
                            <div className="icon" style={{backgroundColor: '#98e024'}}>
                            <i className="fa-solid fa-envelope-open-text" />
                            </div>
                            <div className="content">
                            <span>E-mail:</span>
                            <a href="mailto:info@empaquessostenibles.com">
                                servicioalcliente@vencol.com
                            </a>
                            </div>
                        </div>
                        </li>
                        <li>
                        {/* <div className="single-contact">
                            <div className="icon" style={{color: '#98e024'}}>
                            <i className="fa-light fa-phone" />
                            </div>
                            <div className="content">
                            <span>Teléfono:</span>
                            <a href="tel:+573001234567">+57 300 123 4567</a>
                            </div>
                        </div> */}
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </footer>
        <div className="copyright-area-one two" style={{backgroundColor: '#19161a'}}>
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="main-wrapper">
                    <p>
                    © Copyright 2024. Todos los Derechos Reservados por{" "}
                    <a href="#" style={{color: '#98e024'}}>VENCOL</a>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* Fin del Área de Footer  */}



    </div>
  )
}

export default FooterTwo