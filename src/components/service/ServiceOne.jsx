"use client";
import Link from 'next/link';
import Image from 'next/image';

function ServiceOne(){

  
    return(
      <div>
          <div>
            <div className="tmp-services-area services-style--1 background-color-services tmp-section-gap">
              <div className="container">
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
                    <div className="single-services service-style-one">
                      <div className="services-inner with-shadow card-bg-color-white">
                        <div className="thumbnail">
                          <Image width={80} height={80}
                            alt="Business consulting services"
                            src="/assets/images/services/services-icon-1.png"
                          />
                        </div>
                        <div className="services-content">
                          <Link href={"/ServiceDetails"}>
                            <h5 className="title">
                              Inventario seguro y confiable
                            </h5>
                          </Link>
                          <p className="desctiption">
                            Gracias a una comunicación fluída con los productores, establecemos un servicio oportuno y seguro (SOS) para que sus niveles de producción no se vean afectados.
                          </p>
                          <Link className="icon angle-roted" href={"/ServiceDetails"}>
                            <i className="fa-solid fa-arrow-right" />
                          </Link>
                        </div>
                        <div className="number">
                          <Image width={80} height={80} alt="Business Consulting number" src="/assets/images/services/icon-01.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="300">
                    <div className="single-services service-style-one">
                      <div className="services-inner with-shadow card-bg-color-white">
                        <div className="thumbnail">
                          <Image width={80} height={80}
                            alt="Business consulting services"
                            src="/assets/images/services/services-icon-2.png"
                          />
                        </div>
                        <div className="services-content">
                          <Link href={"/ServiceDetails"}>
                            <h5 className="title">
                              Envios nacionales e internacionales
                            </h5>
                          </Link>
                          <p className="desctiption">
                            Donde sea que estés ubicado.
                          </p>
                          <Link className="icon angle-roted" href={"/ServiceDetails"}>
                            <i className="fa-solid fa-arrow-right" />
                          </Link>
                        </div>
                        <div className="number">
                          <Image width={80} height={80} alt="Business Consulting number" src="/assets/images/services/icon-02.png"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="500">
                    <div className="single-services service-style-one">
                      <div className="services-inner with-shadow card-bg-color-white">
                        <div className="thumbnail">
                          <Image width={80} height={80}
                            alt="Business consulting services"
                            src="/assets/images/services/services-icon-3.png"
                          />
                        </div>
                        <div className="services-content">
                          <Link href={"/ServiceDetails"}>
                            <h5 className="title">
                              Asesoría Técnica y Comercial
                            </h5>
                          </Link>
                          <p className="desctiption">
                            Maximizando el potencial de tus Productos.
                          </p>
                          <Link className="icon angle-roted" href={"/ServiceDetails"}>
                            <i className="fa-solid fa-arrow-right" />
                          </Link>
                        </div>
                        <div className="number">
                          <Image width={80} height={80}
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





