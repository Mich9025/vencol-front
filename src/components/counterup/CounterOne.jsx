"use client"; 
import React from 'react'
import CounterUp from "@/components/funfacts/CounterGlobal"
function Counter() {
  return (
    <div>
        
        {/* tmp counterup section area start */}
        <div className="tmp-section-gapTop tmp-counterup-area">
            <div className="container">
                 <div className="row">
            <div className="col-lg-12">
              <div className="section-head">
                <div className="section-sub-title center-title">
                  <img
                    src="/assets/images/services/section-custom-menubar.png" // Adjusted to use a relative path
                    alt="Corporate_service"
                  />
                  <span className="subtitle">15000 Trusted</span>
                </div>
                <h2 className="title split-collab">Creciendo juntos por el mundo</h2>
              </div>
            </div>
          </div>
            <div className="row g-5">
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="single-counterup-area-agency">
                    <div className="icon">
                    <img src="assets/images/counter/05.svg" alt="agency-service" />
                    </div>
                    <div className="information">
                    <div className="counter-details">
                        <CounterUp end={100}/>
                        <p className="disc">millones de bandejas frescas protegidas al año.</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="single-counterup-area-agency">
                    <div className="icon">
                    <img src="assets/images/counter/08.svg" alt="agency-service" />
                    </div>
                    <div className="information">
                    <div className="counter-details">
                        <CounterUp end={5}/>
                        <p className="disc">Clientes países de América</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="single-counterup-area-agency">
                    <div className="icon">
                    <img src="assets/images/counter/06.svg" alt="agency-service" />
                    </div>
                    <div className="information">
                    <div className="counter-details">
                        <CounterUp end={99}/>
                        <p className="disc">de entregas a tiempo</p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="single-counterup-area-agency">
                    <div className="icon">
                    <img src="assets/images/counter/07.svg" alt="agency-service" />
                    </div>
                    <div className="information">
                    <div className="counter-details">
                        <CounterUp end={0}/>
                        <p className="disc">Contaminaciones reportadas en 2025</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* tmp counterup section area end */}

    </div>
  )
}

export default Counter