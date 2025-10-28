
"use client";
import HeaderFour from "@/components/header/HeaderFour"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image';



import FooterTwo from "@/components/footer/FooterTwo"
import BackTop from "@/components/footer/BackToTop"

function SerViceDetails() {
  return (

    <div className="index-one">
        <HeaderFour/>
        <Breadcrumb title="Foils para elaboración de etiquetas" activeItem="Foils para elaboración de etiquetas" bgImage="/assets/photos/photo_6.jpg" />
         <div>        
                    {/* tmp service section */}
                    <div className="tmp-service-section tmp-section-gap">
                        <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                            <div className="tmp-large-service-detials">                                
                                <Image
                                width={1200}
                                height={500}
                                src="/assets/photos/photo_2.jpg"
                                alt="corporate_business_details"
                                />
                            </div>
                            {/* single service details component */}
                            <div className="single-service-details-component mt--40">
                                <h2 className="title split-collab">
                                Foils para elaboración de etiquetas - Etiquetado Duradero, Marca Destacada
                                </h2>
                                <p className="disc mb--20">
                                Asegura que tu marca permanezca visible y atractiva, incluso bajo condiciones extremas. Nuestras 
                                películas para etiquetado soportan desde la congelación hasta la cocción, manteniendo la legibilidad 
                                e integridad de la información del producto. Con nuestras soluciones de etiquetado, tu producto no 
                                solo se verá bien, sino que también comunicará efectivamente su valor a los consumidores, fortaleciendo 
                                tu marca en el mercado. La innovación en presentación y comunicación que ofrecemos garantiza que cada 
                                etiqueta sea una herramienta poderosa de marketing y información.
                                </p>
                                <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    {/* chck-area-wrapper */}
                                    <div className="check-service-wrapper">
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>Resistencia a Condiciones Extremas</p>
                                    </div>
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>Legibilidad Permanente</p>
                                    </div>
                                    </div>
                                    {/* chck-area-wrapper end */}
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    {/* chck-area-wrapper */}
                                    <div className="check-service-wrapper">
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>Fortalecimiento de Marca</p>
                                    </div>
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>Innovación en Presentación</p>
                                    </div>
                                    </div>
                                    {/* chck-area-wrapper end */}
                                </div>
                                </div>
                            </div>
                            {/* single service details component end */}
                            <div className="row g-5 mt--10">
                                <div className="col-lg-6 col-md-6">
                                {/* single service large-details */}
                                <div className="single-service-details">
                                    <div className="icon">                                   
                                    <Image
                                    width={50}
                                    height={500}
                                    src="/assets/images/services/details-1.png"
                                    alt="foil_label_durability"
                                    />
                                    </div>
                                    <div className="information">
                                    <h6 className="title">Durabilidad Extrema</h6>
                                    <p className="disc">
                                        Nuestros foils para etiquetas mantienen su integridad y legibilidad desde la 
                                        congelación hasta la cocción, garantizando que la información del producto 
                                        permanezca visible y atractiva en todas las condiciones.
                                    </p>
                                    </div>
                                </div>
                                {/* single service large-details end */}
                                </div>
                                <div className="col-lg-6 col-md-6">
                                {/* single service large-details */}
                                <div className="single-service-details">
                                    <div className="icon">                                    
                                    <Image
                                    width={50}
                                    height={500}
                                    src="/assets/images/services/details-2.png"
                                    alt="effective_communication_branding"
                                    />
                                    </div>
                                    <div className="information">
                                    <h6 className="title">Comunicación Efectiva</h6>
                                    <p className="disc">
                                        Con nuestras soluciones de etiquetado, tu producto comunica efectivamente su 
                                        valor a los consumidores, fortaleciendo tu marca en el mercado y mejorando 
                                        la presentación en el punto de venta.
                                    </p>
                                    </div>
                                </div>
                                {/* single service large-details end */}
                                </div>
                            </div>
                            <div className="row g-5 mt--10">
                                <div className="col-lg-12">
                                <h2 className="title split-collab">Calidad y Visibilidad en Cada Etiqueta</h2>
                                <p className="disc mb--25">
                                    Nuestros foils para elaboración de etiquetas representan la vanguardia en tecnología de 
                                    etiquetado duradero. Cada producto está diseñado con materiales de alta calidad que garantizan 
                                    máxima resistencia y visibilidad permanente de tu marca, incluso bajo condiciones extremas.
                                </p>
                                </div>
                                <div className="col-lg-6">
                                <div className="thumbnail-service-details">                                    
                                    <Image
                                    width={500}
                                    height={500}
                                    src="/assets/photos/photo_3.jpg"
                                    alt="Absorbent_Pad_Technology"
                                />
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="service-detials-thumb-details">
                                    <p className="itelic disc">
                                    Nuestros clientes reciben atención especializada desde el pedido hasta la entrega, 
                                    garantizando la máxima satisfacción y resultados óptimos.
                                    </p>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Absorción Superior de Líquidos</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Aprobación Global para Alimentos</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Prevención de Contaminación Cruzada</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Mejora de Presentación Visual</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Equipo de Expertos Especializados</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Soluciones Personalizadas</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-12">
                                <p className="disc">
                                    Nuestros absorbentes tipo almohadilla están fabricados con materiales de la más alta 
                                    calidad, cumpliendo con todas las normativas internacionales de seguridad alimentaria. 
                                    La tecnología avanzada utilizada en su fabricación garantiza una absorción eficiente 
                                    y uniforme, manteniendo la integridad del producto durante todo el proceso de distribución 
                                    y almacenamiento.
                                </p>
                                </div>
                            </div>

                            <div className="row mt--40">
                                <div className="col-lg-12">
                                <div className="faq-accordion">

                                    <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>
                                        <div className="accordion-button-left">
                                                <i className="fa-regular fa-question" />
                                                <span>¿Los foils para etiquetas resisten condiciones extremas de temperatura?</span>
                                                </div>
                                                <div className="accordion-button-right">
                                                <i className="fa-sharp fa-light fa-arrow-right" />
                                                </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                                Sí, nuestros foils para elaboración de etiquetas están diseñados para soportar 
                                                condiciones extremas desde la congelación hasta la cocción, manteniendo la 
                                                legibilidad e integridad de la información del producto. La tecnología avanzada 
                                                garantiza que tu marca permanezca visible y atractiva en todas las condiciones.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <div className="accordion-button-left">
                                                <i className="fa-regular fa-question" />
                                                <span>¿Qué tipos de productos pueden utilizar estos foils para etiquetado?</span>
                                                </div>
                                                <div className="accordion-button-right">
                                                <i className="fa-sharp fa-light fa-arrow-right" />
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                                Nuestros foils son ideales para productos alimenticios, farmacéuticos, cosméticos 
                                                y cualquier producto que requiera etiquetado duradero. Son especialmente efectivos 
                                                para productos que se someten a procesos de cocción, congelación o condiciones 
                                                ambientales extremas, manteniendo la información visible y la marca destacada.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <div className="accordion-button-left">
                                                <i className="fa-regular fa-question" />
                                                <span>
                                                    ¿Cómo fortalecen estos foils la presencia de marca en el mercado?
                                                </span>
                                                </div>
                                                <div className="accordion-button-right">
                                                <i className="fa-sharp fa-light fa-arrow-right" />
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                                Nuestros foils para etiquetas no solo mantienen la información visible, sino que 
                                                también comunican efectivamente el valor del producto a los consumidores. La 
                                                innovación en presentación y comunicación garantiza que cada etiqueta sea una 
                                                herramienta poderosa de marketing, fortaleciendo tu marca en el punto de venta.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    </Accordion>

                                    <div className="faq-buttom">
                                    <h4 className="title">¿Aún Tienes Más Preguntas?</h4>
                                    <p>
                                        Contacta a Nuestro <a href="#">Equipo de Soporte Especializado</a>
                                    </p>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-4 pl--50 pl_md--15 pl_sm--10 mt_md--50 mt_sm--50">
                            <div className="side-bar-details-page">
                                {/* single bar */}
                                {/* <div className="signle-side-bar search-area">
                                <div className="body">
                                    <div className="search-area">
                                    <input type="text" placeholder="Buscar servicios..." />
                                    <i className="fa-solid fa-magnifying-glass" />
                                    </div>
                                </div>
                                </div> */}
                                {/* single bar end */}
                                {/* single bar */}
                                <div className="signle-side-bar category-area">
                                <div className="header">
                                    <h3 className="title">Servicios de Etiquetado</h3>
                                </div>
                                <div className="body">
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Foils para Etiquetas</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Etiquetado Duradero</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Resistencia Extrema</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Fortalecimiento de Marca</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Innovación en Presentación</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                </div>
                                </div>
                                {/* single bar end */}
                                {/* single bar */}
                                <div className="signle-side-bar overlay call-to-action">
                                <div className="easy-call-to-action">
                                    <div className="icon-center-call">
                                    <i className="fa-light fa-envelope" />
                                    </div>
                                    <h3 className="title">¿Necesitas Asesoría en Etiquetado?</h3>
                                    <p className="disc">
                                    Nuestro equipo especializado en soluciones de etiquetado está disponible 
                                    para brindarte asesoría técnica personalizada.
                                    </p>
                                    <a style={{fontSize: '17px'}} href="mailto:etiquetado.tecnico@vencol.com">etiquetado.tecnico@vencol.com</a>
                                </div>
                                </div>
                                {/* single bar end */}
                                {/* single bar */}
                                <div className="signle-side-bar brochure">
                                <div className="header">
                                    <h3 className="title">Descargas</h3>
                                </div>
                                <div className="body">
                                    {/* single category */}
                                    <a href="#" className="single-brocher">
                                    <p>Catálogo Foils Etiquetas</p>
                                    <i className="fa-light fa-cloud-arrow-down" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-brocher">
                                    <p>Especificaciones Técnicas</p>
                                    <i className="fa-light fa-note" />
                                    </a>
                                    {/* single category end */}
                                </div>
                                </div>
                                {/* single bar end */}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* tmp service section end */}
        
    </div>

        <FooterTwo/>
        <BackTop/>
        
    </div>
  )
}

export default SerViceDetails