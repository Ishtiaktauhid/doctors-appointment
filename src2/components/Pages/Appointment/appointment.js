import React from "react";
import Header from "../../Header/header";
import Footer from "../../Footer/footer";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Appointment() {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      axios.post('http://localhost/react/form.php', inputs).then(function(response){
          console.log(response.data);
          alert("successfully submitted")
          navigate('/');
      });
  }


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

       {/*   <!-- Appointment Start --> */}
    <div className="container-fluid bg-primary bg-appointment my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row gx-5">
                <div className="col-lg-6 py-5">
                    <div className="py-5">
                        <h1 className="display-5 text-white mb-4">We Are A Certified and Award Winning Dental Clinic You Can Trust</h1>
                        <p className="text-white mb-0">Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut dolores magna sit. Sea dolore sanctus sed et. Takimata takimata sanctus sed.</p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn" data-wow-delay="0.6s">
                        <h1 className="text-white mb-4">Make Appointment</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-12 col-sm-6">
                                    {/* <select className="form-select bg-light border-0" style= {{height: "55px"}}>
                                        <option selected>Select A Service</option>
                                        <option value="1">Service 1</option>
                                        <option value="2">Service 2</option>
                                        <option value="3">Service 3</option>
                                    </select> */}
                                </div>
                                <div className="col-12 col-sm-6">
                                    {/* <select className="form-select bg-light border-0" style={{height: "55px"}}>
                                        <option selected>Select Doctor</option>
                                        <option value="1">Doctor 1</option>
                                        <option value="2">Doctor 2</option>
                                        <option value="3">Doctor 3</option>
                                    </select> */}
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="text" className="form-control bg-light border-0" name="name" onChange={handleChange} placeholder="Your Name"  style={{height:"55px"}} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <input type="email" className="form-control bg-light border-0" name="email" onChange={handleChange} placeholder="Your Email" style={{height:"55px"}} />
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="date" id="date1" data-target-input="nearest">
                                        <input type="date" name="date"
                                            className="form-control bg-light border-0 datetimepicker-input" onChange={handleChange}
                                            placeholder="Appointment Date"  data-toggle="datetimepicker" style={{height:"55px"}} />
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <div className="time" id="time1" data-target-input="nearest">
                                        <input type="time" name="time" onChange={handleChange}
                                            className="form-control bg-light border-0 datetimepicker-input"
                                            placeholder="Appointment Time"   data-toggle="datetimepicker" style={{height:"55px"}} />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-dark w-100 py-3" type="submit">Make Appointment</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
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



        <Footer  />
        </>
    )
}
export default Appointment