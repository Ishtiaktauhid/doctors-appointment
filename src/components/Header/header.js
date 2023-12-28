import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import {logout } from "../Admin/Auth/auth";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

const Header = () => {
    const navigate = useNavigate();
    const [isSignedIn, setIsSignedIn ] = useState(() => {
        const userLogged = localStorage.getItem("access_token");
        return userLogged || false;
    });
// console.log(isSignedIn)
    const signout = () => {
        setIsSignedIn(false);
        logout();
        navigate('/');
      }
      const {totalUniqueItems} = useCart();
    {/*for link active */}
    const location = useLocation();
    const isLinkActive = (path)=>{
        return location.pathname == path ? 'active' : "";
       
    }

    return(
        <>
         

    {/*  <!-- Topbar Start --> */}
    <div className="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
        <div className="row gx-0">
            <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                <div className="d-inline-flex align-items-center">
                    <small className="py-2"><i className="far fa-clock text-primary me-2"></i>Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed </small>
                </div>
            </div>
            <div className="col-md-6 text-center text-lg-end">
                <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                    <div className="me-3 pe-3 border-end py-2">
                        <p className="m-0"><i className="fa fa-envelope-open me-2"></i>info@example.com</p>
                    </div>
                    <div className="py-2">
                        <p className="m-0"><i className="fa fa-phone-alt me-2"></i>+012 345 6789</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
   


 { /*    <!-- Navbar Start --> */}
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="index.html" className="navbar-brand p-0">
            <h1 className="m-0 text-primary"><i className="fa fa-tooth me-2"></i>Smile Care</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to={"/"} className={`nav-item nav-link ${isLinkActive("/")}`}>  Home</Link>
               <Link to={"/about"} className={`nav-item nav-link ${isLinkActive("/about")}`}>  About</Link> 
               <Link to={"/service"}  className={`nav-item nav-link ${isLinkActive("/service")}`}> Service</Link>
                <div className="nav-item dropdown">
                  <a  className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div className="dropdown-menu m-0">
                       <Link to={'/price'} className="dropdown-item">Pricing Plan</Link>
                       <Link to={'/dentist'}  className="dropdown-item">Our Dentist</Link>
                        <Link to={'/testimonial'} className="dropdown-item">Testimonial</Link>
                        <Link to={'/appointment'} className="dropdown-item">Appointment</Link>
                        <Link to={'/test'} className="dropdown-item">Test</Link>
                     </div>
                </div>
               <Link to={'/contact'}  className="nav-item nav-link">Contact</Link>
             {isSignedIn ? (
                        <div className="header__right__auth">
                            <button className="btn btn-link" type="button" onClick={signout}>Sign out </button>
                            <a href="./dashboard"><b>Dashboard</b></a>
                        </div>
                    ) : (
                        <div className="header__right__auth">
                            <a className="btn btn-link" href="./signin">
                            Sign in
                            </a>
                            <a className="btn btn-link" href="./register">
                            Register
                            </a>
                        </div>
                    )}
            </div>
              
           
            <ul className="header__right__widget">
                                    <li><span className="icon_search search-switch"></span></li>
                                    <li><a href="./book"><span className="icon_bag_alt"></span>
                                        <div className="tip">{totalUniqueItems}</div>
                                    </a></li>
                                </ul>
            <Link to={"/appointment"}  className="btn btn-primary py-2 px-4 ms-3"> Appointment</Link>
        </div>
       
    </nav>
    


  {/*   <!-- Full Screen Search Start --> */}
    {/* <div className="modal fade" id="searchModal" tabIndex="-1">
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content" style={{background:"rgba(9, 30, 62, .7)"}}>
                <div className="modal-header border-0">
                    <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex align-items-center justify-content-center">
                    <div className="input-group" style={{maxWidth: "600px"}}>
                        <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                        <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

        </>
    )
}
export default Header;