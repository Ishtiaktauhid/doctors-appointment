import React from "react";
import "./dashboard.css";
// import Footer from "../Layout/Footer";
import Sidebar from "../Layout/sidebar";

function Dashboard(){
    const userLogged = JSON.parse(localStorage.getItem("userdata"));
   
    return(
        <>
       <div className="container">
        <div className="row">
          <Sidebar />
         <div className="col-9">
            <h2 className="text-center size ">Welcome to Admin Dashboard</h2>
            <br/>
            <br/>
            <div className="row">
              <a className="col-3 text-white text-center dash1 mx-3" href="./dashboard">Dashboard</a>
              <a className="col-3 text-white text-center dash2 mx-3" href="./course">Course</a>
              <a className="col-3 text-white text-center dash3 mx-3" href="./icon">Feature</a>
            </div>
            <div className="row">
              <a className="col-3  text-white text-center dash4 mx-3" href="./Trainer">Trainer</a>
              <a className="col-3 text-white text-center dash5 mx-3" href="./trainee">Trainee</a>
              <a className="col-3 text-white text-center dash6 mx-3" href="./user">User</a>
            </div>
         </div>
        </div>
      </div>
      
        {/* <Footer /> */}
        </>
    )
}
export default Dashboard;