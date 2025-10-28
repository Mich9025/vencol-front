"use client"; 
import React, { useState , useEffect }  from 'react';
import Link from 'next/link';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image';
import ModalVideo from 'react-modal-video';


function LargeVideo() {
    const [isOpen, setIsOpen] = useState(false);
    const videoLink = 'https://www.youtube.com/watch?v=bFgREmqH5kI'; // Define the video link here
    const [videoId, setVideoId] = useState(null);
    useEffect(() => {
        // Extract the video ID from the video link
        if (videoLink) {
            const urlParts = videoLink.split('v='); // Assuming YouTube URL with 'v=' param
            const id = urlParts.length > 1 ? urlParts[1].split('&')[0] : null;
            setVideoId(id);
        }
    }, [videoLink]);
    // Console log to debug
    console.log('Video ID:', videoId);

  return (
    <div>        
        <>
            {/* Inicio área faq  */}
            <div className="faq-area faq-style-two faq-bg-image-2 bg_image tmp-section-gap">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="faq-inner">
                        <div className="faq-content">
                        {/* icono de video */}
                        <div className="vedio-icone">
                            <Link className="video-play-button play-video" href="#" onClick={() => setIsOpen(true)}>
                                <span />
                            </Link>
                        </div>
                        {/* icono de video */}
                        <div className="title">Obtén soluciones para tu Negocio</div>
                        <p className="description">
                            Nuestros empaques ecosostenibles ofrecen la solución perfecta para empresas 
                            que buscan reducir su impacto ambiental sin comprometer la calidad. 
                            Diseñados especialmente para la industria alimentaria, nuestros productos 
                            garantizan la frescura y seguridad de carnes, aves, mariscos y otros alimentos, 
                            mientras contribuyen a un futuro más sostenible para tu empresa y el planeta.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* Fin área faq  */}
            {/* inicio área faq */}
            <div className="tmp-faq-area-three">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="main-faq">
                            <div className="shape-image">                            
                            <Image src="/assets/images/faq/03.png" alt="faq_negocio" width={100} height={100} />
                            </div>
                            <div className="row g-0 align-items-center">
                                <div className="col-lg-5">
                                    <div className="thumbnail">
                                    {/* <img src="assets/images/faq/faq-img-2.png" alt="Empaques Sostenibles" /> */}
                                    <Image src="/assets/photos/photo_8.jpg" alt="Empaques Sostenibles" width={750} height={750} />
                                    </div>
                                </div>
                                <div className="col-lg-7 pl--50 pl_sm--15">
                                    
                                    <div className="faq-accordion faq-accordion-style-two">
                                        <Accordion defaultActiveKey="0">
                                            <div className="section-head text-align-left mb--30">
                                                {/* <span className="subtitle color-gradiant">PREGUNTAS Y RESPUESTAS</span> */}
                                                <h2 className="title split-collab">Preguntas Frecuentes</h2>
                                            </div>

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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            {/* fin área faq */}
            {videoId && (
                <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId={videoId} // Pass the dynamic video ID here
                    onClose={() => setIsOpen(false)}
                />
            )}
        </>

    </div>
  )
}

export default LargeVideo