"use client";
import Link from 'next/link';
import Image from 'next/image';

function ServiceOne(){

  
    return(
      <div>
          <div>
            <div className="tmp-services-area services-style--1 tmp-section-gap" style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #0a0a0a 100%)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Efecto de fondo adicional */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 20%, rgba(80, 80, 80, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.03) 0%, transparent 50%)',
                pointerEvents: 'none'
              }}></div>
              
              <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-head">
                      <div className="color-white section-sub-title center-title special-white-text">                        
                        <Image width={12} height={12}
                        alt="Business_Consulting_services"
                        src="/assets/images/services/section-custom-menubar-green.png " />
                        <span>
                          Revolucionando la Industria Alimentaria.
                        </span>
                      </div>
                      <h2 className="color-white title split-collab" data-aos="move-right" data-aos-delay="100">                        
                        Destacamos sus productos con la tecnología de empaque líder en el mercado.
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row g-5">
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="100">
                    <div className="single-services service-style-one" style={{ height: '100%' }}>
                      <div className="services-inner" style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '20px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                        padding: '30px',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        overflow: 'hidden'
                      }}>
                        {/* Efecto de brillo sutil */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '1px',
                          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)'
                        }}></div>
                        
                        <div className="thumbnail" style={{ marginBottom: '20px' }}>
                          <Image width={80} height={80}
                            alt="Business consulting services"
                            src="/assets/images/services/services-icon-1.png"
                          />
                        </div>
                        <div className="services-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                          <Link href={"/ServiceDetails"}>
                            <h5 className="title" style={{ color: '#ffffff', marginBottom: '15px' }}>
                              Inventario seguro y confiable
                            </h5>
                          </Link>
                          <p className="desctiption" style={{ 
                            color: 'rgba(255, 255, 255, 0.8)', 
                            flex: 1,
                            lineHeight: '1.6'
                          }}>
                            Gracias a una comunicación fluída con los productores, establecemos un servicio oportuno y seguro (SOS) para que sus niveles de producción no se vean afectados.
                          </p>
                          <Link className="icon angle-roted" href={"/ServiceDetails"} style={{
                            color: '#ffffff',
                            marginTop: '20px',
                            alignSelf: 'flex-start'
                          }}>
                            <i className="fa-solid fa-arrow-right" />
                          </Link>
                        </div>
                        <div className="number" style={{
                          position: 'absolute',
                          top: '20px',
                          right: '20px',
                          opacity: '0.3'
                        }}>
                          <Image width={60} height={60} alt="Business Consulting number" src="/assets/images/services/icon-01.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="300">
                    <div className="single-services service-style-one" style={{ height: '100%' }}>
                      <div className="services-inner" style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '20px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                        padding: '30px',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        overflow: 'hidden'
                      }}>
                        {/* Efecto de brillo sutil */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '1px',
                          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)'
                        }}></div>
                        
                        <div className="thumbnail" style={{ marginBottom: '20px' }}>
                          <Image width={80} height={80}
                            alt="Business consulting services"
                            src="/assets/images/services/services-icon-2.png"
                          />
                        </div>
                        <div className="services-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                          <Link href={"/ServiceDetails"}>
                            <h5 className="title" style={{ color: '#ffffff', marginBottom: '15px' }}>
                              Envios nacionales e internacionales
                            </h5>
                          </Link>
                          <p className="desctiption" style={{ 
                            color: 'rgba(255, 255, 255, 0.8)', 
                            flex: 1,
                            lineHeight: '1.6'
                          }}>
                            Donde sea que estés ubicado.
                          </p>
                          <Link className="icon angle-roted" href={"/ServiceDetails"} style={{
                            color: '#ffffff',
                            marginTop: '20px',
                            alignSelf: 'flex-start'
                          }}>
                            <i className="fa-solid fa-arrow-right" />
                          </Link>
                        </div>
                        <div className="number" style={{
                          position: 'absolute',
                          top: '20px',
                          right: '20px',
                          opacity: '0.3'
                        }}>
                          <Image width={60} height={60} alt="Business Consulting number" src="/assets/images/services/icon-02.png"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="500">
                    <div className="single-services service-style-one" style={{ height: '100%' }}>
                      <div className="services-inner" style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        backdropFilter: 'blur(20px)',
                        WebkitBackdropFilter: 'blur(20px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '20px',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                        padding: '30px',
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        position: 'relative',
                        overflow: 'hidden'
                      }}>
                        {/* Efecto de brillo sutil */}
                        <div style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          height: '1px',
                          background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)'
                        }}></div>
                        
                        <div className="thumbnail" style={{ marginBottom: '20px' }}>
                          <Image width={80} height={80}
                            alt="Business consulting services"
                            src="/assets/images/services/services-icon-3.png"
                          />
                        </div>
                        <div className="services-content" style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                          <Link href={"/ServiceDetails"}>
                            <h5 className="title" style={{ color: '#ffffff', marginBottom: '15px' }}>
                              Asesoría Técnica y Comercial
                            </h5>
                          </Link>
                          <p className="desctiption" style={{ 
                            color: 'rgba(255, 255, 255, 0.8)', 
                            flex: 1,
                            lineHeight: '1.6'
                          }}>
                            Maximizando el potencial de tus Productos.
                          </p>
                          <Link className="icon angle-roted" href={"/ServiceDetails"} style={{
                            color: '#ffffff',
                            marginTop: '20px',
                            alignSelf: 'flex-start'
                          }}>
                            <i className="fa-solid fa-arrow-right" />
                          </Link>
                        </div>
                        <div className="number" style={{
                          position: 'absolute',
                          top: '20px',
                          right: '20px',
                          opacity: '0.3'
                        }}>
                          <Image width={60} height={60}
                            alt="Business Consulting number"
                            src="/assets/images/services/icon-03.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="services-bottom">
                      <div className="services-bottom-inner">
                        <p className="description">
                          El equipo de especialistas de Vencol está comprometido con mejorar la seguridad, calidad y vida útil de los alimentos.
                        </p>
                        <p className="description">
                          ¿Quieres saber más?
                          <button className="btn-simple">
                            Contactanos
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}


export default ServiceOne





