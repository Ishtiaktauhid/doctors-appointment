import React from "react";
import Header from "../../Header/header";
import Footer from "../../Footer/footer";
import { useEffect, useState } from "react";
import { fetchDentistData } from "../../../api/dentist";


function Dentist () {
        const [dentistData, setDentistData] = useState([]);

        useEffect( () =>{
            const fetchData = async () => {
                try {
                    const data = await fetchDentistData();
                    setDentistData(data);
                }catch(error){
                    console.error(error.message);
                }
            };
            fetchData();
        }, [] );
    return(
        <>
        <Header />
            {/* <!-- Hero Start --> */}
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">Dentist</h1>
            <a href="" className="h4 text-white">
              Home
            </a>
            <i className="far fa-circle text-white px-2"></i>
            <a href="" className="h4 text-white">
            Dentist
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Hero End --> */}
            {/* <!-- Team Start --> */}
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
                    <div className="section-title bg-light rounded h-100 p-5">
                        <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Dentist</h5>
                        <h1 className="display-6 mb-4">Meet Our Certified & Experienced Dentist</h1>
                        <a href="appointment.html" className="btn btn-primary py-3 px-5">Appointment</a>
                    </div>
                </div>
                {dentistData.map((dentist, index) => (
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="team-item">
                        <div className="position-relative rounded-top" style={{ zIndex: "1" }}>
                            <img className="img-fluid rounded-top w-100" src={dentist.image} alt="" />
                            <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                            <h4 className="mb-2">{dentist.name}</h4>
                            <p className="text-primary mb-0">{dentist.designation}</p>
                        </div>
                    </div>
                </div>
                )) }
                
            </div>
        </div>
    </div>
   


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


        <Footer />
        </>
    )
}
export default Dentist