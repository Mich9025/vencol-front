
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
        <Breadcrumb title="Foils de marcación" activeItem="Foils de marcación" bgImage="/assets/photos/photo_5.jpg" />
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
                                Foils de marcación - Tecnología de Vanguardia para tus Empaques
                                </h2>
                                <p className="disc mb--20">
                                Maximiza la protección y la presentación de tus productos con nuestros films de empaque de última 
                                generación. Resistentes y flexibles, nuestros foils de marcación son la solución perfecta para una 
                                amplia gama de aplicaciones industriales y comerciales. Diseñados con tecnología avanzada, ofrecen 
                                una selladura hermética excepcional que protege contra la contaminación y el deterioro, mientras 
                                destacan la apariencia premium de tus productos en el punto de venta. La versatilidad y calidad 
                                superior de nuestros films garantizan resultados óptimos en cada aplicación.
                                </p>
                                <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    {/* chck-area-wrapper */}
                                    <div className="check-service-wrapper">
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>Selladura Hermética Avanzada</p>
                                    </div>
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>Resistencia y Flexibilidad Superior</p>
                                    </div>
                                    </div>
                                    {/* chck-area-wrapper end */}
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    {/* chck-area-wrapper */}
                                    <div className="check-service-wrapper">
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>Presentación Premium en Punto de Venta</p>
                                    </div>
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>Tecnología de Vanguardia</p>
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
                                    alt="hermetic_sealing_protection"
                                    />
                                    </div>
                                    <div className="information">
                                    <h6 className="title">Protección Hermética Superior</h6>
                                    <p className="disc">
                                        Nuestros foils de marcación ofrecen una selladura hermética excepcional 
                                        que protege contra la contaminación, humedad y deterioro, manteniendo 
                                        la integridad del producto durante todo su ciclo de vida.
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
                                    alt="flexibility_resistance_packaging"
                                    />
                                    </div>
                                    <div className="information">
                                    <h6 className="title">Flexibilidad y Resistencia</h6>
                                    <p className="disc">
                                        Diseñados con materiales de alta calidad, nuestros films combinan 
                                        flexibilidad excepcional con resistencia superior, adaptándose 
                                        perfectamente a diversas formas y aplicaciones de empaque.
                                    </p>
                                    </div>
                                </div>
                                {/* single service large-details end */}
                                </div>
                            </div>
                            <div className="row g-5 mt--10">
                                <div className="col-lg-12">
                                <h2 className="title split-collab">Calidad y Resistencia en Cada Rollo</h2>
                                <p className="disc mb--20">
                                    Nuestros films están diseñados para ofrecer una selladura hermética excepcional, 
                                    protegiendo contra la contaminación y el deterioro, a la vez que destacan la apariencia 
                                    de tus productos en el punto de venta. La tecnología de vanguardia utilizada en nuestros 
                                    foils de marcación garantiza máxima protección, presentación premium y versatilidad 
                                    para una amplia gama de aplicaciones industriales y comerciales.
                                </p>
                                </div>
                                <div className="col-lg-6">
                                <div className="thumbnail-service-details">                                    
                                    <Image
                                    width={500}
                                    height={500}
                                    src="/assets/photos/photo_3.jpg"
                                    alt="Marking_Foils_Technology"
                                />
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="service-detials-thumb-details">
                                    <p className="itelic disc">
                                    Nuestros clientes reciben asesoría técnica especializada desde la selección hasta la 
                                    implementación, garantizando resultados óptimos en cada aplicación.
                                    </p>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Selladura Hermética de Precisión</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Resistencia a Perforación y Desgarro</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Flexibilidad para Múltiples Aplicaciones</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Presentación Premium en Punto de Venta</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Equipo de Ingenieros Especializados</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Soluciones de Empaque Personalizadas</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-12">
                                <p className="disc">
                                    Nuestros foils de marcación están fabricados con materiales de la más alta calidad, 
                                    utilizando tecnología de vanguardia que garantiza una selladura hermética superior 
                                    y resistencia excepcional. Cada rollo es sometido a rigurosos controles de calidad 
                                    para asegurar un rendimiento consistente y confiable en todas las aplicaciones de empaque.
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
                                                <span>¿Qué ventajas ofrecen los foils de marcación sobre otros materiales de empaque?</span>
                                                </div>
                                                <div className="accordion-button-right">
                                                <i className="fa-sharp fa-light fa-arrow-right" />
                                                </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                                Nuestros foils de marcación ofrecen selladura hermética superior, resistencia 
                                                excepcional a la perforación y desgarro, y flexibilidad para adaptarse a 
                                                múltiples formas de productos. Además, proporcionan una presentación premium 
                                                que destaca en el punto de venta, protegiendo contra contaminación y deterioro.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <div className="accordion-button-left">
                                                <i className="fa-regular fa-question" />
                                                <span>¿Para qué tipos de aplicaciones son ideales estos films de empaque?</span>
                                                </div>
                                                <div className="accordion-button-right">
                                                <i className="fa-sharp fa-light fa-arrow-right" />
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                                Nuestros foils de marcación son perfectos para una amplia gama de aplicaciones 
                                                industriales y comerciales, incluyendo empaque de alimentos, productos farmacéuticos, 
                                                cosméticos, y productos electrónicos. Su versatilidad los hace ideales para 
                                                cualquier aplicación que requiera protección hermética y presentación premium.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <div className="accordion-button-left">
                                                <i className="fa-regular fa-question" />
                                                <span>
                                                    ¿Cómo garantizan la calidad y consistencia de los foils de marcación?
                                                </span>
                                                </div>
                                                <div className="accordion-button-right">
                                                <i className="fa-sharp fa-light fa-arrow-right" />
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                                Cada rollo de nuestros foils de marcación es sometido a rigurosos controles 
                                                de calidad utilizando tecnología de vanguardia. Nuestro equipo de ingenieros 
                                                especializados supervisa todo el proceso de fabricación para garantizar 
                                                un rendimiento consistente, selladura hermética superior y resistencia 
                                                excepcional en todas las aplicaciones.
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
                                    <h3 className="title">Servicios de Empaque</h3>
                                </div>
                                <div className="body">
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Foils de Marcación</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Tecnología de Vanguardia</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Selladura Hermética</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Soluciones Flexibles</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Ingeniería de Empaque</p>
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
                                    <h3 className="title">¿Necesitas Asesoría Técnica?</h3>
                                    <p className="disc">
                                    Nuestro equipo de ingenieros especializados está disponible
                                    24/7 para brindarte soporte técnico especializado.
                                    </p>
                                    <a style={{fontSize: '17px'}} href="mailto:ingenieria.foils@vencol.com">ingenieria.foils@vencol.com</a>
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
                                    <p>Catálogo Foils de Marcación</p>
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