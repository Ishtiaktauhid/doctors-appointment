import React from "react";

function Nav(){
    
    const userLogged = JSON.parse(localStorage.getItem("userdata"));
    return(
        <>
         <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Ha, {userLogged.name}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="./applist">Appointment List</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="./doctor_list">Doctor</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0)">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Main site</a>
                    </li>
                </ul>
                <div className="d-flex">
                    <img width={50} src={`http://localhost/reactCopy/${userLogged.image}`} alt="" />
                </div>
                </div>
            </div>
        </nav>
        </>
    );
}
export default Nav;