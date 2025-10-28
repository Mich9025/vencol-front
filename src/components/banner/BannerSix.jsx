"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import './BannerVideo.css';



function BannerSix() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Función para intentar reproducir el video
      const playVideo = async () => {
        try {
          video.currentTime = 0; // Asegurar que empiece desde el inicio
          await video.play();
          console.log('Video started playing successfully');
        } catch (error) {
          console.log('Autoplay was prevented:', error);
          // Intentar reproducir en la primera interacción del usuario
          const handleFirstInteraction = async () => {
            try {
              await video.play();
              console.log('Video started after user interaction');
              document.removeEventListener('click', handleFirstInteraction);
              document.removeEventListener('touchstart', handleFirstInteraction);
            } catch (err) {
              console.log('Video play failed even after interaction:', err);
            }
          };
          
          document.addEventListener('click', handleFirstInteraction);
          document.addEventListener('touchstart', handleFirstInteraction);
        }
      };

      // Eventos del video
      const handleCanPlay = () => {
        console.log('Video can start playing');
        playVideo();
      };

      const handleLoadedData = () => {
        console.log('Video data loaded');
      };

      const handleError = (e) => {
        console.error('Video error:', e);
      };

      // Agregar event listeners
      video.addEventListener('canplay', handleCanPlay);
      video.addEventListener('loadeddata', handleLoadedData);
      video.addEventListener('error', handleError);

      // Cleanup
      return () => {
        video.removeEventListener('canplay', handleCanPlay);
        video.removeEventListener('loadeddata', handleLoadedData);
        video.removeEventListener('error', handleError);
      };
    }
  }, []);
  return (
    <div>               
        <div className="startup-banner-swiper-wrapper construction-banner-top-wrapper">
            <div className="swiper swiper-startup-banner-construction">                
             <Swiper                    
                    modules={[Navigation, Pagination, EffectFade, Scrollbar, A11y, Autoplay]}
                    className="banner-style-five"
                    speed={800}
                    slidesPerView={1}
                    effect='fade'
                    spaceBetween={0}
                    loop={true}
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    breakpoints={{
                        1200: { slidesPerView: 1 },
                        900: { slidesPerView: 1 },
                        768: { slidesPerView: 1 },
                        580: { slidesPerView: 1 },
                        450: { slidesPerView: 1 },
                        0: { slidesPerView: 1 },
                    }}
                    >
                    <SwiperSlide>
                        <div className="tmp-banner-area banner-style-five inconstruction tmp-section-gap banner-bg-construction bg_image banner-video-container">                                                       
                            <div className="container banner-content-wrapper">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="banner-startup-main-content-wrapper">
                                    <h1 className="title">
                                    Hacemos visible <br /> la frescura de tus alimentos
                                    </h1>
                                    <p className="disc">
                                     Innovación en empaques que protege calidad y salud en cada etapa.
                                    </p>
                                    <Link href={'/Contact'} className="tmp-btn btn-primary">
                                    Conoce nuestras soluciones
                                    </Link>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div className="shape-image banner-shape-image">
                                <Image
                                src="/assets/images/banner/shape/05.png"
                                alt="shape"
                                width={1000}
                                height={1500}
                                />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="tmp-banner-area banner-style-five inconstruction tmp-section-gap banner-bg-construction bg-two bg_image">
                            <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="banner-startup-main-content-wrapper">
                                    <h1 className="title">
                                     Hacemos visible <br /> la frescura de tus alimentos
                                    </h1>
                                    <p className="disc">
                                    Innovación en empaques que protege calidad y salud en cada etapa.
                                    </p>
                                    <Link href={'/Contact'} className="tmp-btn btn-primary">
                                    Conoce nuestras soluciones
                                    </Link>
                                </div>
                                </div>
                            </div>                            
                            </div>
                            <div className="shape-image">
                            <Image    
                            src="/assets/images/banner/shape/05.png"
                            alt="shape"
                            width={1000}
                            height={1500}
                            />
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                        <div className="tmp-banner-area banner-style-five inconstruction tmp-section-gap banner-bg-construction bg-three bg_image">
                                <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                    <div className="banner-startup-main-content-wrapper">
                                        <h1 className="title">
                                        Making Your <br /> Future Buildings
                                        </h1>
                                        <p className="disc">
                                        Network with potential clients, attend industry events,
                                        and leverage your existing connections to generate leads
                                        and acquire clients.
                                        </p>
                                        <Link href={'/Contact'} className="tmp-btn btn-primary">
                                        Get Started Now
                                        </Link>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div className="shape-image">
                                <img src="assets/images/banner/shape/04.png" alt="shape" />
                                </div>
                        </div>
                    </SwiperSlide> */}

                    {/* <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div> */}
                </Swiper> 

            </div>
        </div>
        {/* start startup banner swiper main wrapper end */}


    </div>
  )
}

export default BannerSix