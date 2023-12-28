import React from "react";
import Header from "../../Header/header";
import Footer from "../../Footer/footer";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



function Testimonial(){
    const options = {
        items: 2, // Number of items to display
        loop: true, // Infinite loop
        nav: true, // Display navigation arrows
        responsive: {
          0: {
            items: 1,
          },
          768: {
            items: 2,
          },
        
        },
      };
      const option1 ={
        items:1,
        loop:true,
        nav:true,
        responsive: {
            0: {
              items: 1,
            },
            768: {
              items: 1,
            },
          
          },
      }
    return(
        <>
        <Header />
         {/* <!-- Hero Start --> */}
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">Testimonial</h1>
            <a href="" className="h4 text-white">
              Home
            </a>
            <i className="far fa-circle text-white px-2"></i>
            <a href="" className="h4 text-white">
            Testimonial
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Hero End --> */}

        {/* <!-- Testimonial Start --> */}
    <div className="container-fluid bg-primary bg-testimonial py-5 my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <OwlCarousel className="owl-carousel testimonial-carousel rounded p-5 wow zoomIn owl-theme" {...option1} data-wow-delay="0.6s">
                        <div className="testimonial-item text-center text-white">
                            <img className="img-fluid mx-auto rounded mb-4" src="/assets/img/testimonial-1.jpg" alt="" />
                            <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                            <hr className="mx-auto w-25" />
                            <h4 className="text-white mb-0">Client Name</h4>
                        </div>
                        <div className="testimonial-item text-center text-white">
                            <img className="img-fluid mx-auto rounded mb-4" src="/assets/img/testimonial-2.jpg" alt="" /> 
                            <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                            <hr className="mx-auto w-25" />
                            <h4 className="text-white mb-0">Client Name</h4>
                        </div>
                    </OwlCarousel>
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


        <Footer />
        </>
    )
}
export default Testimonial;