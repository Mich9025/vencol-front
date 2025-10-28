"use client";
import Link from 'next/link';
import Image from 'next/image';

function WorkingProcess() {

  return (
    <div>
        <div className="tpm-services-process-area tmp-section-gap">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-head">
                    <div className="section-sub-title center-title"  data-aos="move-right" data-aos-delay="100">
                        <Image width={12} height={17} src="/assets/images/services/section-custom-menubar.png" alt="Corporate_service" />
                        <span className="subtitle">Beneficios</span>
                    </div>
                    <h2 className="title split-collab"  data-aos="move-right" data-aos-delay="100">Nuestras 3P para asegurar frescura y calidad</h2>
                    </div>
                </div>
            </div>

            <div className="row g-5">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12"  data-aos="fade-up" data-aos-delay="100">
                    <div className="single-services">
                    <div className="services-inner">
                        <div className="thumbnail thumbnail-rounded border-top-left hover-animation">
                        <Link href="#">
                            <Image width={305} height={305} src="/assets/images/services/services-round-1.png" alt="Business consulting services" />
                        </Link>
                        <div className="number-bg-round">
                            <span>01</span>
                        </div>
                        </div>
                        <div className="services-content services-content-style-1 text-center">
                        <h5 className="title">Protección</h5>
                        <p className="description">
                        Vencol garantiza alimentos seguros, libres de contaminantes, al absorber fluidos con bacterias. Resultado: alimentos frescos, inocuos y confianza del consumidor.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="300">
                    <div className="single-services">
                    <div className="services-inner">
                        <div className="thumbnail thumbnail-rounded border-top-left hover-animation">
                        <Link href="#">
                            <Image width={305} height={305} src="/assets/images/services/services-round-2.png" alt="Business consulting services" />
                        </Link>
                        <div className="number-bg-round">
                            <span>02</span>
                        </div>
                        </div>
                        <div className="services-content services-content-style-1 text-center">
                        <h5 className="title">Preservación</h5>
                        <p className="description">
                            Nuestras soluciones extienden la vida útil de los productos frescos, por varios días más, al prevenir la acumulación de líquidos y el crecimiento bacteriano. Reduce el desperdicio y beneficia tanto a clientes como a consumidores.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="500">
                    <div className="single-services">
                        <div className="services-inner">
                            <div className="thumbnail thumbnail-rounded border-top-left hover-animation">
                            <Link href="#">
                                <Image width={305} height={305} src="/assets/images/services/services-round-3.png" alt="Business consulting services" />
                            </Link>
                            <div className="number-bg-round">
                                <span>03</span>
                            </div>
                            </div>
                            <div className="services-content services-content-style-1 text-center">
                            <h5 className="title">Presentación</h5>
                            <p className="description">
                                Empaques limpios, sin &quot;sangrado&quot; ni malos olores, mejoran la apariencia del producto y generan confianza inmediata. Vencol ayuda a las marcas de alimentos a ofrecer presentaciones de calidad que el consumidor valora y prefiere, beneficiando a nuestros clientes comerciales.
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

export default WorkingProcess





