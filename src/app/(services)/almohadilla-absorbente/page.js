
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
        <Breadcrumb title="Almohadilla Absorbente" activeItem="Almohadilla Absorbente" bgImage="/assets/photos/photo_2.jpg" />
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
                                Absorbentes Tipo Almohadilla Aprobadas Globalmente
                                </h2>
                                <p className="disc mb--20">
                                Nuestros absorbentes tipo almohadilla están diseñados específicamente para la industria alimentaria, 
                                garantizando máxima frescura y presentación impecable de sus productos cárnicos. Estos absorbentes 
                                prolongan significativamente la vida útil de los alimentos, reducen los costosos envoltorios adicionales 
                                y mejoran la apariencia del producto final. Además, minimizan los derrames durante la distribución y 
                                garantizan productos libres de contaminación. La tecnología avanzada de nuestros fabricantes nos permite 
                                ofrecer una amplia variedad de soluciones disponibles en el mercado, adaptándose a las necesidades 
                                específicas de cada cliente.
                                </p>
                                <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    {/* chck-area-wrapper */}
                                    <div className="check-service-wrapper">
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>Máxima Absorción y Frescura</p>
                                    </div>
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>Prolongación de Vida Útil</p>
                                    </div>
                                    </div>
                                    {/* chck-area-wrapper end */}
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    {/* chck-area-wrapper */}
                                    <div className="check-service-wrapper">
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>Reducción de Costos de Empaque</p>
                                    </div>
                                    <div className="single-check">
                                        <i className="fa-light fa-circle-check" />
                                        <p>Atención Especializada 24/7</p>
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
                                    alt="absorbent_pad_freshness"
                                    />
                                    </div>
                                    <div className="information">
                                    <h6 className="title">Frescura Garantizada</h6>
                                    <p className="disc">
                                        Nuestros absorbentes mantienen la frescura de los productos cárnicos 
                                        por más tiempo, absorbiendo eficientemente los líquidos y preservando 
                                        la calidad del alimento.
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
                                    alt="cost_reduction_packaging"
                                    />
                                    </div>
                                    <div className="information">
                                    <h6 className="title">Reducción de Costos</h6>
                                    <p className="disc">
                                        Eliminan la necesidad de envoltorios adicionales costosos, 
                                        optimizando el proceso de empaque y reduciendo significativamente 
                                        los gastos operativos.
                                    </p>
                                    </div>
                                </div>
                                {/* single service large-details end */}
                                </div>
                            </div>
                            <div className="row g-5 mt--10">
                                <div className="col-lg-12">
                                <h2 className="title split-collab">Protección y Estética para Tus Productos</h2>
                                <p className="disc mb--20">
                                    La tecnología avanzada de nuestros fabricantes nos permite ofrecer una amplia 
                                    variedad de opciones de soluciones disponibles en el mercado. Nuestros absorbentes 
                                    tipo almohadilla no solo protegen sus productos de la contaminación, sino que también 
                                    mejoran significativamente su presentación visual, manteniendo la apariencia fresca 
                                    y atractiva que sus clientes esperan.
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
                                                <span>¿Los absorbentes son biodegradables y seguros para alimentos?</span>
                                                </div>
                                                <div className="accordion-button-right">
                                                <i className="fa-sharp fa-light fa-arrow-right" />
                                                </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                                Sí, nuestros absorbentes tipo almohadilla están fabricados con materiales 
                                                completamente biodegradables y cumplen con todas las normativas internacionales 
                                                de seguridad alimentaria. Están aprobados globalmente para el contacto directo 
                                                con productos alimenticios, especialmente carnes y productos frescos.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>
                                            <div className="accordion-button-left">
                                                <i className="fa-regular fa-question" />
                                                <span>¿Qué tipos de productos alimenticios pueden usar estos absorbentes?</span>
                                                </div>
                                                <div className="accordion-button-right">
                                                <i className="fa-sharp fa-light fa-arrow-right" />
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                                Nuestros absorbentes son ideales para carnes rojas, aves, pescados, mariscos 
                                                y productos frescos en general. Son especialmente efectivos para productos 
                                                que liberan líquidos naturalmente durante el almacenamiento y transporte, 
                                                manteniendo la presentación y frescura del producto.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>
                                            <div className="accordion-button-left">
                                                <i className="fa-regular fa-question" />
                                                <span>
                                                    ¿Cuál es la diferencia de costo comparado con empaques tradicionales?
                                                </span>
                                                </div>
                                                <div className="accordion-button-right">
                                                <i className="fa-sharp fa-light fa-arrow-right" />
                                            </div>
                                        </Accordion.Header>
                                        <Accordion.Body>
                                                Aunque la inversión inicial puede ser ligeramente mayor, nuestros absorbentes 
                                                generan ahorros significativos a largo plazo al reducir la necesidad de 
                                                envoltorios adicionales, disminuir las pérdidas por deterioro y mejorar 
                                                la vida útil del producto, resultando en un ROI positivo.
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
                                    <p>Almohadillas Absorbentes</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Empaques Biodegradables</p>
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
                                    <p>Soluciones Sostenibles</p>
                                    <i className="fa-light fa-arrow-right" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-category">
                                    <p>Consultoría Especializada</p>
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
                                    <h3 className="title">¿Necesitas Ayuda?</h3>
                                    <p className="disc">
                                    Estamos aquí para apoyarte en cualquier momento. Puedes escribirnos
                                    24/7 para responder tus preguntas.
                                    </p>
                                    <a style={{fontSize: '17px'}} href="mailto:contacto@vencol.com">servicioalcliente@vencol.com</a>
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
                                    <p>Catálogo de Productos</p>
                                    <i className="fa-light fa-cloud-arrow-down" />
                                    </a>
                                    {/* single category end */}
                                    {/* single category */}
                                    <a href="#" className="single-brocher">
                                    <p>Certificaciones</p>
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