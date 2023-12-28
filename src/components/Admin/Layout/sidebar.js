import React from "react";
import './layout.css';

function Sidebar(){
    const userLogged = JSON.parse(localStorage.getItem("userdata"));

    return(
        <>
        <div className="col-2 ">
            <div className="dashboard-sidebar">
                <div className="dashboard-user-image">
                    <img src={`http://localhost/reactCopy/${userLogged.image}`} alt="" /> </div>

                <a className="navbar-brand" href="#">
                    Hi, {userLogged.name}
                </a>
                <hr style={{ background: "#ffffff" }} />
                <a href="./dashboard" className="dashboard-nav-link">Admin Dashboard</a>
                <a href="./" className="dashboard-nav-link">Home</a>
                <a className="nav-link" href="./applist">Appointment List</a>
               <a className="nav-link" href="./doctor_list">Doctor</a>
                 <a className="nav-link" href="/">Main site</a>
                


            </div>

        </div>
        </>
    )
}
export default Sidebar;