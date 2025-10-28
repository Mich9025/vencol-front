
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import FooterTwo from "@/components/footer/FooterTwo"
import BackTop from "@/components/footer/BackToTop"
import Link from 'next/link';
import HeaderFour from "@/components/header/HeaderFour";


function page() {
  return (
    <div className="service-details contact-page">
        <HeaderFour/>
        <Breadcrumb title="Contáctanos" activeItem="Contáctanos" bgImage="assets/photos/photo_1.jpg" />
          

                    {/* tmp contact area */}
                    <div className="contact-area tmp-section-gap">
                        <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-5">
                            <div className="contact-inner">
                                <div className="section-head section-head-one-side text-align-left">
                                <span className="title">Contáctanos</span>
                                <p className="description">
                                    Estamos aquí para ayudarte. Ponte en contacto con nosotros para cualquier consulta, 
                                    solicitud de información o para conocer más sobre nuestros servicios especializados.
                                </p>
                                </div>
                                <ul className="ft-link ft-link-style-three">
                                {/* <li>
                                    <div className="single-contact background-transparent">
                                    <div className="icon">
                                        <i className="fa-light fa-phone" />
                                    </div>
                                    <div className="content">
                                        <span>Llámanos</span>
                                        <Link className="contact-here" href="tel:+4733378901">
                                        +123 34598768
                                        </Link>
                                    </div>
                                    </div>
                                </li> */}
                                <li>
                                    <div className="single-contact background-transparent">
                                    <div className="icon">
                                        <i className="fa-solid fa-envelope-open-text" />
                                    </div>
                                    <div className="content">
                                        <span>Correo Electrónico</span>
                                        <Link
                                        className="contact-here"
                                        href="mailto:webmaster@example.com"
                                        >
                                        servicioalcliente@vencol.com
                                        </Link>
                                    </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="single-contact background-transparent">
                                    <div className="icon">
                                        <i className="fa-regular fa-map-location-dot" />
                                    </div>
                                    <div className="content">
                                        <span>Dirección</span>
                                        <ul>
                                            <li className="contact-here">
                                                
                                                {' '}COLOMBIA - Carrera 69P #74B-71 Bogotá
                                                
                                            </li>
                                            <li className="contact-here">
                                                
                                                {' '}USA - 8209 NW 70 St. Miami, FL 33166
                                                
                                            </li>
                                            <li className="contact-here">
                                               
                                                {' '}MEXICO - Anillo Vial Fray Junipero, Salitre San Jusé El Alto, Solar Urbano 106 4, Queretaro
                                                
                                            </li>
                                            <li className="contact-here">
                                               
                                                {' '}ECUADOR - Vasco de Contreras N36-235 y Mañosca, Quito
                                                
                                            </li>
                                        </ul>    
                                    </div>
                                    </div>
                                </li>
                                </ul>                             
                                <div className="tmp-tag-list tag-list-one">
                                <Link className="tag-list" href="#">
                                    Facebook
                                </Link>
                                <Link className="tag-list" href="#">
                                    Tiktok
                                </Link>
                                <Link className="tag-list" href="#">
                                    Linkedin
                                </Link>
                                <Link className="tag-list" href="#">
                                    Instagram
                                </Link>                                
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-7">
                            <div className="contact-inner">
                                <div className="section-head section-head-one-side text-align-left">
                                <span className="title">PONTE EN CONTACTO</span>
                                <p className="description">
                                    Completa el formulario y nos pondremos en contacto contigo lo antes posible. 
                                    Estamos listos para atender tus consultas y brindarte la mejor atención.
                                </p>
                                </div>
                                <div className="contact-form style-two">
                                <div id="form-messages" />
                                    <form id="contact-form">
                                        <div className="contact-form-wrapper row">
                                            <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                className="input-field"
                                                name="name"
                                                placeholder="Nombre"
                                                id="contact-name"
                                                type="text"/>
                                            </div>
                                            </div>
                                            <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                className="input-field"
                                                name="phone"
                                                placeholder="Teléfono"
                                                type="text"/>
                                            </div>
                                            </div>
                                            <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                className="input-field"
                                                name="email"
                                                placeholder="Correo Electrónico"
                                                type="email"/>
                                            </div>
                                            </div>
                                            <div className="col-lg-6">
                                            <div className="form-group">
                                                <input
                                                className="input-field"
                                                name="subject"
                                                placeholder="Asunto"
                                                type="text"required
                                                />
                                            </div>
                                            </div>
                                            <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea
                                                className="input-field"
                                                name="message"
                                                placeholder="¿Cómo podemos ayudarte?"id="contact-message"
                                                />
                                            </div>
                                            </div>
                                            <div className="col-lg-12">
                                            <div className="form-submit-group">
                                                <button className="tmp-btn btn-primary" type="submit">
                                                Enviar Ahora
                                                </button>
                                            </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* tmp contact area
                    <div className="tmp-map-area tmp-sectiongapBottom">
                        <div className="map-area-flotimg-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.2859130569!2d85.24819285450387!3d27.709014520769113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sbd!4v1714324837639!5m2!1sen!2sbd"
                            width={600}
                            height={650}
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                        </div>
                    </div> */}

          
        <FooterTwo/>
        <BackTop/>
        
    </div>
  )
}

export default page