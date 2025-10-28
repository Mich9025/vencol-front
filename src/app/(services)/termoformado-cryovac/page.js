
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
        <Breadcrumb title="Film de Empaque Termoformado Cryovac" activeItem="Film de Empaque Termoformado Cryovac" bgImage="/assets/photos/photo_4.jpg" />
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
                                Film de Empaque Termoformado Cryovac - Tecnología de Vanguardia
                                </h2>
                                <p className="disc mb--20">
                                Maximiza la protección y la presentación de tus productos con nuestros films de empaque termoformado 
                                Cryovac. Resistentes y flexibles, son la solución perfecta para una amplia gama de aplicaciones 
                                industriales y alimentarias. Nuestros films están diseñados para ofrecer una selladura hermética, 
                                protegiendo contra la contaminación y el deterioro, a la vez que destacan la apariencia de tus 
                                productos en el punto de venta. La tecnología de vanguardia Cryovac garantiza calidad y resistencia 
                                en cada rollo, adaptándose a las necesidades específicas de cada cliente.
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
                                        <p>Resistencia y Flexibilidad</p>
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
                                        <p>Tecnología Cryovac de Vanguardia</p>
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
                                    alt="thermoforming_film_protection"
                                    />
                                    </div>
                                    <div className="information">
                                    <h6 className="title">Protección Hermética Superior</h6>
                                    <p className="disc">
                                        Nuestros films termoformados Cryovac ofrecen una barrera hermética 
                                        excepcional que protege contra la contaminación, humedad y deterioro, 
                                        manteniendo la integridad del producto.
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
                                    alt="thermoforming_flexibility"
                                    />
                                    </div>
                                    <div className="information">
                                    <h6 className="title">Flexibilidad y Resistencia</h6>
                                    <p className="disc">
                                        La tecnología de termoformado permite adaptarse a cualquier forma 
                                        de producto, ofreciendo resistencia superior y flexibilidad óptima 
                                        para aplicaciones industriales diversas.
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
                                    La tecnología de vanguardia Cryovac nos permite ofrecer films termoformados de la más alta 
                                    calidad disponibles en el mercado. Nuestros films no solo protegen sus productos de la 
                                    contaminación y el deterioro, sino que también destacan la apariencia de tus productos en 
                                    el punto de venta, manteniendo una presentación premium que sus clientes esperan.
                                </p>
                                </div>
                                <div className="col-lg-6">
                                <div className="thumbnail-service-details">                                    
                                    <Image
                                    width={500}
                                    height={500}
                                    src="/assets/photos/photo_3.jpg"
                                    alt="Thermoforming_Film_Technology"
                                />
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="service-detials-thumb-details">
                                    <p className="itelic disc">
                                    Nuestros clientes reciben asesoría técnica especializada desde la selección hasta la 
                                    implementación, garantizando la máxima eficiencia y resultados óptimos.
                                    </p>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Selladura Hermética de Precisión</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Certificación para Contacto Alimentario</p>
                                    </div>
                                    <div className="single-check">
                                    <i className="fa-light fa-circle-check" />
                                    <p>Resistencia a Perforación y Desgarro</p>
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
                                    <p>Soluciones de Termoformado Personalizadas</p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-lg-12">
                                <p className="disc">
                                    Nuestros films termoformados Cryovac están fabricados con materiales de la más alta 
                                    calidad, cumpliendo con todas las normativas internacionales de seguridad alimentaria. 
                                    La tecnología de termoformado avanzada utilizada garantiza una adaptabilidad excepcional 
                                    a cualquier forma de producto, manteniendo la integridad y calidad durante todo el proceso 
                                    de distribución y almacenamiento.
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
                                                <span>¿Los films termoformados Cryovac son seguros para contacto alimentario?</span>
                                                </div>
                                                <div className="accordion-button-right">
                                                <i className="fa-sharp fa-light fa-arrow-right" />
                                                </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                                Sí, nuestros films termoformados Cryovac están certificados para contacto 
                                                alimentario directo y cumplen con todas las normativas internacionales de 
                                                seguridad alimentaria. Están aprobados globalmente para el empaque de productos 
                                                alimenticios, proporcionando una barrera hermética y segura.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <div className="accordion-button-left">
                                                <i className="fa-regular fa-question" />
                                                <span>¿Qué tipos de productos se pueden empacar con films termoformados?</span>
                                                </div>
                                                <div className="accordion-button-right">
                                                <i className="fa-sharp fa-light fa-arrow-right" />
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                                Nuestros films termoformados son ideales para carnes, aves, pescados, productos 
                                                lácteos, alimentos preparados y productos frescos en general. Su flexibilidad 
                                                permite adaptarse a cualquier forma de producto, proporcionando un sellado 
                                                hermético que mantiene la frescura y calidad.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <div className="accordion-button-left">
                                                <i className="fa-regular fa-question" />
                                                <span>
                                                    ¿Cuáles son las ventajas del termoformado sobre otros métodos de empaque?
                                                </span>
                                                </div>
                                                <div className="accordion-button-right">
                                                <i className="fa-sharp fa-light fa-arrow-right" />
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                                El termoformado ofrece ventajas únicas: sellado hermético de precisión, 
                                                adaptabilidad a formas complejas, resistencia superior a perforación y 
                                                desgarro, presentación premium en punto de venta, y mayor eficiencia en 
                                                líneas de producción automatizadas.
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
                                    <p>Films Termoformados Cryovac</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Tecnología de Termoformado</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Empaque Hermético Avanzado</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Soluciones de Presentación</p>
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
                                    Nuestros ingenieros especializados están disponibles para brindarte 
                                    asesoría técnica personalizada en soluciones de termoformado.
                                    </p>
                                    <a style={{fontSize: '17px'}} href="mailto:contacto@vencol.com">ingenieria.termoformado@vencol.com</a>
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
                                    <p>Catálogo Films Termoformados</p>
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