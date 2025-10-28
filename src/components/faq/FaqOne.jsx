
"use client";
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image';

function FaqOne() {

  return (
    <div>

        {/* Área FAQ Inicio  */}
        <div className="background-color-services faq-area faq-style-one  tmp-section-gap mt-dec--180">
            <div className="container pt--180">
            <div className="row">
                <div className="col-lg-12">
                <div className="section-head">
                    <div className="section-sub-title center-title" data-aos="move-right" data-aos-delay="100">
                    
                    <Image width={12} height={12}
                    src="/assets/images/services/section-custom-menubar-green.png"
                    alt="Servicio de Empaques Sostenibles"
                    />
                    <span className="subtitle text-white">PREGUNTAS Y RESPUESTAS</span>
                    </div>
                    <h2 className="text-white title split-collab" data-aos="move-right" data-aos-delay="300">Preguntas Frecuentes</h2>
                </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6">
                <div className="thumbnail" data-aos="move-right" data-aos-delay="100">
                    <Image width={580} height={541}
                    src="/assets/images/faq/faq-1.png"
                    alt="FAQ Empaques Sostenibles para Alimentos"
                    />
                </div>
                </div>
                <div className="col-lg-6">
                    <div className="faq-accordion">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                <div className="accordion-button-left">
                                        <i className="fa-regular fa-question" />
                                        <span>¿Sus materiales de empaque son realmente biodegradables?</span>
                                        </div>
                                        <div className="accordion-button-right">
                                        <i className="fa-sharp fa-light fa-arrow-right" />
                                        </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                        Sí, todos nuestros materiales de empaque están certificados como biodegradables y compostables. 
                                        Se descomponen naturalmente en un período de 90-180 días en instalaciones de compostaje comercial, 
                                        sin dejar residuos dañinos. Nuestros materiales cumplen con estándares internacionales incluyendo 
                                        las certificaciones ASTM D6400 y EN 13432.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <div className="accordion-button-left">
                                        <i className="fa-regular fa-question" />
                                        <span>¿Qué tipos de productos alimentarios pueden manejar sus empaques?</span>
                                        </div>
                                        <div className="accordion-button-right">
                                        <i className="fa-sharp fa-light fa-arrow-right" />
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                        Nuestras soluciones de empaque sostenible están diseñadas para diversos productos alimentarios incluyendo 
                                        carnes frescas, aves, mariscos, productos lácteos, frutas, verduras y alimentos procesados. 
                                        Ofrecemos diferentes propiedades de barrera y resistencia a la temperatura para garantizar una 
                                        seguridad alimentaria óptima y una vida útil extendida.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <div className="accordion-button-left">
                                        <i className="fa-regular fa-question" />
                                        <span>
                                            ¿Cómo se comparan en costo sus empaques ecológicos con el empaque tradicional?
                                        </span>
                                        </div>
                                        <div className="accordion-button-right">
                                        <i className="fa-sharp fa-light fa-arrow-right" />
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                        Aunque el empaque sostenible puede tener un costo inicial ligeramente mayor, los beneficios a largo plazo 
                                        incluyen tarifas reducidas de eliminación de residuos, mejor reputación de marca y cumplimiento 
                                        con regulaciones ambientales. Ofrecemos precios competitivos y descuentos por volumen 
                                        para hacer el empaque ecológico accesible para empresas de todos los tamaños.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <div className="faq-buttom">
                        <h4 className="title">¿Aún Tienes Más Preguntas?</h4>
                        <p>
                            Contacta a Nuestro <a href="#">Equipo de Soporte Experto</a>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        {/* Área FAQ Fin  */}

    </div>
  )
}

export default FaqOne