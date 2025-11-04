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
                        <div className="tmp-banner-area banner-style-five inconstruction" style={{
                            backgroundImage: `url('/assets/images/banner/bg-black.jpg')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            height: '100vh',
                            minHeight: '100vh',
                            display: 'flex',
                            alignItems: 'center',
                            position: 'relative',
                            
                        }}>                                                       
                            <div className="container banner-content-wrapper" style={{ zIndex: 2 }}>
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-12">
                                        <div className="banner-startup-main-content-wrapper" style={{
                                            textAlign: 'left',
                                            position: 'relative',
                                            left: '50px',
                                            '@media (min-width: 768px)': {
                                                textAlign: 'center',
                                                left: '10px',
                                            }
                                        }}>
                                            <h1 className="title" style={{
                                                fontSize: 'clamp(0.8rem, 2.5vw, 1.5rem)',
                                                lineHeight: '1.2',
                                                marginBottom: '1rem',
                                                textAlign: 'left',
                                                '@media (min-width: 768px)': {
                                                    textAlign: 'center',
                                                    left: '10px',
                                                }
                                            }}>
                                                Innovación en empaques
                                            </h1>
                                            <h1 className="title" style={{
                                                fontSize: 'clamp(2.7rem, 5vw, 6rem)',
                                                lineHeight: '1.1',
                                                marginBottom: '1.5rem',
                                                textAlign: 'left',
                                                '@media (min-width: 768px)': {                                                    
                                                    textAlign: 'center',
                                                    left: '10px',
                                                }
                                            }}>
                                                Hacemos visible <br /> la frescura de tus alimentos
                                            </h1>
                                            <p className="disc" style={{
                                                fontSize: 'clamp(1.1rem, 2.5vw, 2rem)',
                                                marginBottom: '2rem',
                                                maxWidth: '500px',
                                                textAlign: 'left',
                                                left: '50px',                                                
                                                '@media (min-width: 768px)': {
                                                    textAlign: 'center',                                                   
                                                    left: '10px',
                                                }
                                            }}>
                                                Innovación en empaques que protege calidad y salud en cada etapa.
                                            </p>
                                            <Link href={'/Contact'} className="" style={{
                                                background: '#98e0243d',
                                                backdropFilter: 'blur(20px)',
                                                WebkitBackdropFilter: 'blur(20px)',
                                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                                borderRadius: '12px',
                                                padding: 'clamp(12px, 3vw, 15px) clamp(20px, 5vw, 30px)',
                                                color: '#ffffff',
                                                textDecoration: 'none',
                                                display: 'inline-block',
                                                transition: 'all 0.3s ease',
                                                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                                                position: 'relative',                                        
                                                transform: 'scale(1)',
                                                fontSize: 'clamp(1.3rem, 2vw, 1.5rem)',
                                                margin: '0 auto',
                                                textAlign: 'center'
                                            }}
                                            onMouseEnter={(e) => {
                                                e.target.style.transform = 'scale(1.05)';
                                                e.target.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.15)';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.transform = 'scale(1)';
                                                e.target.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)';
                                            }}>
                                                Conoce nuestras soluciones
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-12">
                                        <div className="banner-image-wrapper" style={{
                                            position: 'relative',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: '100%',
                                            padding: '2rem'
                                        }}>
                                            <div style={{
                                                position: 'relative',
                                                transform: 'perspective(1000px) rotateY(-15deg)',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                <Image
                                                    src="/assets/photos/pack_1.png"
                                                    alt="Empaques innovadores Vencol"
                                                    width={400}
                                                    height={500}
                                                    style={{
                                                        maxWidth: '100%',
                                                        height: 'auto',
                                                        filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3))'
                                                    }}
                                                    onError={(e) => {
                                                        e.target.style.display = 'none';
                                                        e.target.nextSibling.style.display = 'flex';
                                                    }}
                                                />
                                                <div style={{
                                                    display: 'none',
                                                    width: '300px',
                                                    height: '400px',
                                                    background: 'linear-gradient(135deg, rgba(152, 224, 36, 0.2), rgba(152, 224, 36, 0.1))',
                                                    backdropFilter: 'blur(20px)',
                                                    WebkitBackdropFilter: 'blur(20px)',
                                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                                    borderRadius: '15px',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    flexDirection: 'column',
                                                    color: 'rgba(255, 255, 255, 0.8)',
                                                    fontSize: '1.2rem',
                                                    fontWeight: '500',
                                                    textAlign: 'center',
                                                    padding: '2rem',
                                                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)'
                                                }}>
                                                    <div style={{
                                                        width: '80px',
                                                        height: '80px',
                                                        background: 'rgba(152, 224, 36, 0.3)',
                                                        borderRadius: '50%',
                                                        marginBottom: '1rem',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        fontSize: '2rem'
                                                    }}>
                                                        📦
                                                    </div>
                                                    Empaques<br />
                                                    <span style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                                                        Innovadores
                                                    </span>
                                                </div>
                                            </div>
                                            
                                            <div style={{
                                                position: 'absolute',
                                                top: '20%',
                                                right: '10%',
                                                width: '60px',
                                                height: '60px',
                                                background: 'rgba(152, 224, 36, 0.2)',
                                                borderRadius: '50%',
                                                backdropFilter: 'blur(10px)',
                                                animation: 'float 3s ease-in-out infinite'
                                            }}></div>
                                            
                                            <div style={{
                                                position: 'absolute',
                                                bottom: '30%',
                                                left: '5%',
                                                width: '40px',
                                                height: '40px',
                                                background: 'rgba(152, 224, 36, 0.15)',
                                                borderRadius: '50%',
                                                backdropFilter: 'blur(10px)',
                                                animation: 'float 4s ease-in-out infinite reverse'
                                            }}></div>
                                        </div>
                                    </div>
                                </div>
                            
                            {/* Barra de logos de clientes integrada */}
                            <div style={{
                                position: 'fixed',
                                bottom: '0',
                                left: '0',
                                right: '0',                                
                                background: 'transparent',
                                backdropFilter: 'blur(10px)',
                                WebkitBackdropFilter: 'blur(10px)',
                                border: 'none',
                                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                                padding: '15px 0',
                                zIndex: 3
                            }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: '30px',
                                                flexWrap: 'wrap'
                                            }}>
                                                <p style={{
                                                    color: 'rgba(255, 255, 255, 0.7)',
                                                    margin: 0,
                                                    fontSize: '12px',
                                                    fontWeight: '500',
                                                    minWidth: 'fit-content'
                                                }}>
                                                    Confían en nosotros:
                                                </p>
                                                <div style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '20px',
                                                    flexWrap: 'wrap',
                                                    justifyContent: 'center'
                                                }}>
                                                    {/* Logo placeholders - reemplazar con logos reales */}
                                                    <div style={{
                                                        width: '100px',
                                                        height: '30px',
                                                        background: 'rgba(255, 255, 255, 0.1)',
                                                        borderRadius: '6px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'rgba(255, 255, 255, 0.6)',
                                                        fontSize: '10px',
                                                        fontWeight: '500'
                                                    }}>
                                                        Cliente 1
                                                    </div>
                                                    <div style={{
                                                        width: '100px',
                                                        height: '30px',
                                                        background: 'rgba(255, 255, 255, 0.1)',
                                                        borderRadius: '6px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'rgba(255, 255, 255, 0.6)',
                                                        fontSize: '10px',
                                                        fontWeight: '500'
                                                    }}>
                                                        Cliente 2
                                                    </div>
                                                    <div style={{
                                                        width: '100px',
                                                        height: '30px',
                                                        background: 'rgba(255, 255, 255, 0.1)',
                                                        borderRadius: '6px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'rgba(255, 255, 255, 0.6)',
                                                        fontSize: '10px',
                                                        fontWeight: '500'
                                                    }}>
                                                        Cliente 3
                                                    </div>
                                                    <div style={{
                                                        width: '100px',
                                                        height: '30px',
                                                        background: 'rgba(255, 255, 255, 0.1)',
                                                        borderRadius: '6px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'rgba(255, 255, 255, 0.6)',
                                                        fontSize: '10px',
                                                        fontWeight: '500'
                                                    }}>
                                                        Cliente 4
                                                    </div>
                                                    <div style={{
                                                        width: '100px',
                                                        height: '30px',
                                                        background: 'rgba(255, 255, 255, 0.1)',
                                                        borderRadius: '6px',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        color: 'rgba(255, 255, 255, 0.6)',
                                                        fontSize: '10px',
                                                        fontWeight: '500'
                                                    }}>
                                                        Cliente 5
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                            
                        </div>
                        </div>
                    </SwiperSlide>
                    {/* <SwiperSlide>
                        <div className="tmp-banner-area banner-style-five inconstruction banner-bg-construction bg-two bg_image" style={{
                            height: '100vh',
                            minHeight: '100vh',
                            display: 'flex',
                            alignItems: 'center',
                            position: 'relative'
                        }}>
                            <div className="container" style={{ zIndex: 2 }}>
                            <div className="row">
                                <div className="col-lg-12">
                                <div className="banner-startup-main-content-wrapper">
                                    <h1 className="title" style={{
                                        fontSize: 'clamp(6rem, 5vw, 4rem)',
                                        lineHeight: '1.2',
                                        marginBottom: '1.5rem'
                                    }}>
                                     Hacemos visible <br /> la frescura de tus alimentos
                                    </h1>
                                    <p className="disc" style={{
                                        fontSize: 'clamp(2rem, 2vw, 1.25rem)',
                                        marginBottom: '2rem',
                                        maxWidth: '600px'
                                    }}>
                                    Innovación en empaques que protege calidad y salud en cada etapa.
                                    </p>
                                    <Link href={'/Contact'} className="" style={{
                                        background: '#98e0243d',
                                        backdropFilter: 'blur(20px)',
                                        WebkitBackdropFilter: 'blur(20px)',
                                        border: '1px solid rgba(255, 255, 255, 0.2)',
                                        borderRadius: '50px',
                                        padding: '15px 30px',
                                        color: '#ffffff',
                                        textDecoration: 'none',
                                        display: 'inline-block',
                                        transition: 'all 0.3s ease',
                                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
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
                    </SwiperSlide> */}
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