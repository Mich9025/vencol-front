"use client"; 
import Link from 'next/link';
import Image from 'next/image';

function BrandTwo() {
  return (
    <div>
        

        <div className="tmp-brand-section tmp-section-gapBottom">
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="brand-main-wrapper-company">
                        <h2 className="tmp-title-2">Nuestros Clientes</h2>
                    <div className="tmp-brand-section-start">
                        <Link href="#">                        
                        <Image src="/assets/logos/bucanero-150x150.png" alt="brand" width={150} height={150} />
                        </Link>
                        <Link href="#">
                        <Image src="/assets/logos/Cargill-150x150.png" alt="brand" width={150} height={150} />
                        </Link>
                        <Link href="#">
                        <Image src="/assets/logos/Friko-150x150.jpg" alt="brand" width={150} height={150} />
                        </Link>
                        <Link href="#">
                        <Image src="/assets/logos/La-Fazenda-150x150.jpg" alt="brand" width={150} height={150} />
                        </Link>                       
                    </div>
                    {/* <div className="tmp-brand-section-start">
                        <Link href="#">
                        <img src="assets/images/brand/06.png" alt="brand" />
                        </Link>
                        <Link href="#">
                        <img src="assets/images/brand/07.png" alt="brand" />
                        </Link>
                        <Link href="#">
                        <img src="assets/images/brand/08.png" alt="brand" />
                        </Link>
                        <Link href="#">
                        <img src="assets/images/brand/09.png" alt="brand" />
                        </Link>
                        <Link href="#">
                        <img src="assets/images/brand/10.png" alt="brand" />
                        </Link>
                    </div> */}
                    </div>
                </div>
                </div>
            </div>
        </div>


    </div>
  )
}

export default BrandTwo