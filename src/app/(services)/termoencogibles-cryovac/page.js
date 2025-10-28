
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
        <Breadcrumb title="Bolsas Termoencogibles Cryovac" activeItem="Bolsas Termoencogibles Cryovac" bgImage="/assets/photos/photo_1.jpg" />
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
                                Bolsas/Fundas Termoencogibles Cryovac - Seguridad Alimentaria Avanzada
                                </h2>
                                <p className="disc mb--20">
                                Nuestras bolsas de empaque termoencogibles Cryovac ofrecen una barrera excepcional contra el oxígeno 
                                y la humedad, protegiendo tus productos alimenticios de contaminantes y prolongando su frescura de 
                                manera extraordinaria. Este empaque innovador para la conservación óptima es ideal para una variedad 
                                de alimentos, asegurando que tus productos lleguen al consumidor en condiciones óptimas, manteniendo 
                                su sabor y calidad intactos. La tecnología Cryovac representa la vanguardia en sistemas de empaque 
                                al vacío, proporcionando una protección superior que extiende significativamente la vida útil de 
                                los productos alimenticios mientras mantiene sus propiedades nutricionales y organolépticas.
                                </p>
                                <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    {/* chck-area-wrapper */}
                                    <div className="check-service-wrapper">
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>Barrera Excepcional Oxígeno/Humedad</p>
                                    </div>
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>Conservación Óptima de Sabor</p>
                                    </div>
                                    </div>
                                    {/* chck-area-wrapper end */}
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    {/* chck-area-wrapper */}
                                    <div className="check-service-wrapper">
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>Tecnología Cryovac Avanzada</p>
                                    </div>
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>Protección Contra Contaminantes</p>
                                    </div>
                                    </div>
                                    {/* chck-area-wrapper end */}
                                </div>
                                </div>
                            </div>                                                    
                            <div className="row g-5 mt--10">
                                <div className="col-lg-6 col-md-6">
                                {/* single service large-details */}
                                <div className="single-service-details">
                                    <div className="icon">                                   
                                    <Image
                                    width={50}
                                    height={500}
                                    src="/assets/images/services/details-1.png"
                                    alt="cryovac_barrier_protection"
                                    />
                                    </div>
                                    <div className="information">
                                    <h6 className="title">Barrera Excepcional</h6>
                                    <p className="disc">
                                        Las bolsas Cryovac crean una barrera superior contra oxígeno y humedad, 
                                        protegiendo los alimentos de contaminantes y preservando su frescura 
                                        y calidad nutricional por períodos extendidos.
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
                                    alt="cryovac_conservation_technology"
                                    />
                                    </div>
                                    <div className="information">
                                    <h6 className="title">Conservación Óptima</h6>
                                    <p className="disc">
                                        La tecnología Cryovac extiende significativamente la vida útil 
                                        de los productos, manteniendo sabor y textura originales mientras 
                                        reduce las pérdidas por caducidad.
                                    </p>
                                    </div>
                                </div>
                                {/* single service large-details end */}
                                </div>
                            </div>
                            <div className="row g-5 mt--10">
                                <div className="col-lg-12">
                                <h2 className="title split-collab">Tecnología Cryovac: Innovación en Empaque al Vacío</h2>
                                <p className="disc mb--20">
                                    La tecnología Cryovac representa la vanguardia en sistemas de empaque al vacío, 
                                    ofreciendo soluciones innovadoras que garantizan la máxima protección y conservación 
                                    de productos alimenticios. Nuestras bolsas termoencogibles no solo protegen contra 
                                    contaminantes externos, sino que también mantienen la presentación visual óptima, 
                                    asegurando que los productos lleguen al consumidor en condiciones perfectas.
                                </p>
                                </div>
                                <div className="col-lg-6">
                                <div className="thumbnail-service-details">                                    
                                    <Image
                                    width={500}
                                    height={500}
                                    src="/assets/photos/photo_3.jpg"
                                    alt="Cryovac_Shrink_Bag_Technology"
                                />
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="service-detials-thumb-details">
                                    <p className="itelic disc">
                                    Nuestros clientes reciben asesoría técnica especializada y soporte continuo, 
                                    garantizando la implementación exitosa de la tecnología Cryovac en sus procesos.
                                    </p>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Sellado Hermético de Alta Precisión</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Certificación para Contacto Alimentario</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Protección Integral Contra Contaminantes</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Transparencia Óptima para Exhibición</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Asesoría Técnica Especializada 24/7</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Adaptabilidad a Diferentes Productos</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-12">
                                <p className="disc">
                                    Las bolsas termoencogibles Cryovac están fabricadas con materiales de la más alta 
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
                                                <span>¿Cómo funciona la tecnología de barrera Cryovac?</span>
                                                </div>
                                                <div className="accordion-button-right">
                                                <i className="fa-sharp fa-light fa-arrow-right" />
                                                </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                                La tecnología Cryovac crea una barrera excepcional contra el oxígeno y la humedad 
                                                mediante un sellado hermético de alta precisión. Esta barrera protege los alimentos 
                                                de la oxidación, el crecimiento bacteriano y la pérdida de humedad, preservando 
                                                sus propiedades nutricionales y organolépticas por períodos extendidos.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <div className="accordion-button-left">
                                                <i className="fa-regular fa-question" />
                                                <span>¿Qué tipos de alimentos son compatibles con las bolsas Cryovac?</span>
                                                </div>
                                                <div className="accordion-button-right">
                                                <i className="fa-sharp fa-light fa-arrow-right" />
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                                Las bolsas Cryovac son ideales para una amplia variedad de productos alimenticios 
                                                incluyendo carnes rojas, aves, pescados, mariscos, quesos, embutidos y productos 
                                                preparados. Su versatilidad permite adaptarse a diferentes formas y tamaños de 
                                                productos, manteniendo la calidad y frescura en todos los casos.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <div className="accordion-button-left">
                                                <i className="fa-regular fa-question" />
                                                <span>
                                                    ¿Cuánto extiende la vida útil la tecnología Cryovac?
                                                </span>
                                                </div>
                                                <div className="accordion-button-right">
                                                <i className="fa-sharp fa-light fa-arrow-right" />
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                                La tecnología Cryovac puede extender la vida útil de los productos alimenticios 
                                                entre 2 a 5 veces más que los métodos de empaque tradicionales, dependiendo del 
                                                tipo de producto. Esta extensión significativa reduce las pérdidas por caducidad 
                                                y optimiza la cadena de suministro, generando ahorros sustanciales.
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
                                    <p>Bolsas Termoencogibles Cryovac</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Empaque al Vacío Avanzado</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Conservación de Alimentos</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Tecnología de Barrera</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Asesoría Técnica Especializada</p>
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
                                    Nuestros expertos en tecnología Cryovac están disponibles 24/7 
                                    para brindarte soporte especializado y soluciones personalizadas.
                                    </p>
                                    <a style={{fontSize: '17px'}} href="mailto:contacto@vencol.com">soporte.cryovac@vencol.com</a>
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
                                    <p>Catálogo Cryovac</p>
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