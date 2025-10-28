"use client"; 
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';




function TestimonialsFour() {
  return (
    <div>        
        {/* Inicio Testimonios con marca  */}
        <div className="testimonial-with-brand">
            {/* Inicio Área de Testimonios  */}
            <div className="testimonial-brand-area">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="testimonials-button-area">
                    <div className="section-head text-align-left">
                        <div className="section-sub-title">
                        <img
                            src="assets/images/services/section-custom-menubar.png "
                            alt="Servicio_Corporativo"
                        />
                        <span className="subtitle">Testimonios de Clientes</span>
                        </div>
                        <h2 className="title split-collab">
                        Lo que Dicen las Personas <br /> Sobre Nuestra Empresa
                        </h2>
                    </div>
                    <div className="button-next-prev">
                        <div className="swiper-button-prev" />
                        <div className="swiper-button-next" />
                    </div>
                    </div>
                </div>
                </div>
                <div className="row">
                <div className="col-lg-12">
                    {/* Contenedor principal del slider */}
                    <div className="swiper-style-one">
                    <div className="swiper-container-style-two">
                        {/* Wrapper adicional requerido */}
                        <Swiper
                                        // instalar módulos de Swiper
                                        modules={[Navigation, Pagination, EffectFade, Scrollbar, A11y, Autoplay]}
                                        className="mySwiper-portfolio-1"
                                        speed={500}
                                        slidesPerView={2}
                                        spaceBetween={30}
                                        loop={true}
                                        autoplay={{
                                            delay: 5500,
                                            disableOnInteraction: false,
                                        }}
                                        navigation={{
                                            nextEl: '.swiper-button-next',
                                            prevEl: '.swiper-button-prev',
                                        }}
                                        breakpoints={{
                                            1200: { slidesPerView: 2 },
                                            900: { slidesPerView: 2 },
                                            768: { slidesPerView: 2 },
                                            580: { slidesPerView: 1 },
                                            450: { slidesPerView: 1 },
                                            0: { slidesPerView: 1 },
                                        }}
                                        >
                                        <SwiperSlide>
                                            <div className="single-card card-horizontal agency-testimonials">
                                            <div className="card-inner">
                                                <div className="content">
                                                <div className="rating rating-style-three">
                                                    <div className="stars-group">
                                                    <div className="star">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star-half-stroke" />
                                                    </div>
                                                    </div>
                                                </div>
                                                <p className="description">
                                                    Los empaques biodegradables han transformado completamente 
                                                    nuestro negocio de carnes. La calidad es excepcional y 
                                                    nuestros clientes valoran nuestro compromiso ambiental. 
                                                    La frescura se mantiene perfecta y hemos reducido 
                                                    significativamente nuestro impacto ecológico.
                                                </p>
                                                <div className="content content-without-bg">
                                                    <div className="name">Carlos Mendoza</div>
                                                    <div className="designation">CEO &amp; Fundador</div>
                                                </div>
                                                </div>
                                                <div className="thumbnail">
                                                <img
                                                    src="assets/images/testimonial/testimonial-1.jpg"
                                                    alt="testimonio"
                                                />
                                                <div className="icon icon-quote">
                                                    <i className="fa-duotone fa-quote-left" />
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-card card-horizontal agency-testimonials">
                                            <div className="card-inner">
                                                <div className="content">
                                                <div className="rating rating-style-three">
                                                    <div className="stars-group">
                                                    <div className="star">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star-half-stroke" />
                                                    </div>
                                                    </div>
                                                </div>
                                                <p className="description">
                                                    Como distribuidora de productos del mar, necesitábamos 
                                                    empaques que mantuvieran la frescura sin dañar el océano. 
                                                    Estos empaques compostables son la solución perfecta. 
                                                    Excelente barrera de humedad y completamente sostenibles. 
                                                    Nuestros clientes están encantados.
                                                </p>
                                                <div className="content content-without-bg">
                                                    <div className="name">Ana Rodríguez</div>
                                                    <div className="designation">Gerente de Operaciones</div>
                                                </div>
                                                </div>
                                                <div className="thumbnail">
                                                <img
                                                    src="assets/images/testimonial/testimonial-2.jpg"
                                                    alt="testimonio"
                                                />
                                                <div className="icon icon-quote">
                                                    <i className="fa-duotone fa-quote-left" />
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="single-card card-horizontal agency-testimonials">
                                            <div className="card-inner">
                                                <div className="content">
                                                <div className="rating rating-style-three">
                                                    <div className="stars-group">
                                                    <div className="star">
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star" />
                                                        <i className="fa-solid fa-star-half-stroke" />
                                                    </div>
                                                    </div>
                                                </div>
                                                <p className="description">
                                                    Implementamos estos empaques ecológicos en toda nuestra 
                                                    cadena de supermercados. Los resultados han superado 
                                                    nuestras expectativas: menor desperdicio, mejor imagen 
                                                    corporativa y cumplimiento total con las nuevas 
                                                    regulaciones ambientales. Altamente recomendados.
                                                </p>
                                                <div className="content content-without-bg">
                                                    <div className="name">Miguel Torres</div>
                                                    <div className="designation">Director de Compras</div>
                                                </div>
                                                </div>
                                                <div className="thumbnail">
                                                <img
                                                    src="assets/images/testimonial/testimonial-1.jpg"
                                                    alt="testimonio"
                                                />
                                                <div className="icon icon-quote">
                                                    <i className="fa-duotone fa-quote-left" />
                                                </div>
                                                </div>
                                            </div>
                                            </div>
                                        </SwiperSlide>
                                        {/* <div className="swiper-button-next"></div>
                                        <div className="swiper-button-prev"></div>
                                        <div className="swiper-pagination"></div> */}
                        </Swiper>
                        {/* Si necesitamos botones de navegación */}
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
            {/* Fin Área de Testimonios  */}
            {/* Fin Área de Marca  */}
        </div>
        {/* Fin Testimonios con marca  */}



    </div>
  )
}

export default TestimonialsFour