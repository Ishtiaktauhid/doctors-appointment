import React from "react";
import Header from "../../Header/header";
import Footer from "../../Footer/footer";
import MakeApp from "./Make App/app";


function Appointment() {
 


    return(
        <>
        <Header/>
           {/* <!-- Hero Start --> */}
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">Appointment</h1>
            <a href="" className="h4 text-white">
              Home
            </a>
            <i className="far fa-circle text-white px-2"></i>
            <a href="" className="h4 text-white">
            Appointment
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Hero End --> */}
        
        <MakeApp />
    {/* <!-- Newsletter Start --> */}
  <div className="container-fluid position-relative pt-5 wow fadeInUp" data-wow-delay="0.1s" style={{zIndex: "1"}}>
        <div className="container">
            <div className="bg-primary p-5">
                <form className="mx-auto" style={{maxWidth: "600px"}}>
                    <div className="input-group">
                        <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
                        <button className="btn btn-dark px-4">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
    </div>


        <Footer  />
        </>
    )
}
export default Appointment