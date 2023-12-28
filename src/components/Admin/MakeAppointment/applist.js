import axios from "axios"
import { useEffect, useState } from "react";

// import Footer from "../Layout/Footer";
import Sidebar from "../Layout/sidebar";

export default function AppList() {
    const [appointment, setAppointment] = useState([]);
    const [our_dentist, SetOur_dentist] = useState([]);
   
    const [inputs, setInputs] = useState([]);
    useEffect(() => {
        getDatas();
    }, []);
    function getDatas() {
        axios.get('http://localhost/reactCopy/crud/index_appointment.php').then(function(response) {
            setAppointment(response.data.data);
            console.log(response.data);
        });
    }
    function getOur_dentist() {
        axios.get('http://localhost/reactCopy/crud/index_doctor.php').then(function(response) {
            SetOur_dentist(response.data.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost/reactCopy/crud/delete_app.php?id=${id}`).then(function(response){
            getDatas();
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
   
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost/reactCopy/crud/create_appointmetnt.php', inputs).then(function(response){
            console.log(response.data)
            getDatas();
            if(response.data.status==1)
                document.getElementById('modelbutton').click();
        });
    }
    const clearData = ()=>{
        getOur_dentist();
        setInputs(values => ({...values,"id":"","doctorname":"","patientname":"","age":"", "problems": "","mobile": "","email":"","date":"", "time":""}))
    } 


    /* for update */

    function getSingleAppointment(id) {
        document.getElementById('modelbutton').click();
        axios.get(`http://localhost/reactCopy/crud/single_appointment.php?id=${id}`).then(function(response) {
            setInputs(response.data);
        });
    }

    return (
        <div>
         
            <div className="container">
                <div className="row">
                <Sidebar />
                    <div className="col-9">
                        <h1><small>Appointment List</small></h1>
                        
                                <button onClick={clearData} id="modelbutton" type="button" className="btn btn-primary btn-sm float-end" data-bs-toggle="modal" data-bs-target="#myModal">
                                    Add Appointment
                                </button>
                            
                    
                        <table className="table table-hover" style={{overflow:'hidden',boxSizing:'border-box',fontSize:'13px',margin:'0 auto'}}>
                            <thead>
                            <tr>
                        <th>#</th>
                        <th>Doctor Name</th>
                        <th>Patient Name</th>
                        <th>Age</th>
                        <th>Problems</th>
                        <th>Mobile </th>
                        <th>Email</th>
                        <th>Appointment Date</th>
                        <th>Appointment Time</th>
                        <th>Actions</th>
                    </tr>
                            </thead>
                            <tbody>
                    {appointment && appointment.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.dname}</td>
                            <td>{user.patientname}</td>
                            <td>{user.age}</td>
                            <td>{user.problems}</td>
                            <td>{user.mobile}</td>
                            <td>{user.email}</td>
                            <td>{user.date}</td>
                            <td>{user.time}</td>
                            <td>
                            <a href="javascript:void(0)" className="btn btn-primary" onClick={() => getSingleAppointment(user.id)} >Edit</a>
                            <a href="javascript:void(0)" className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</a>
                            </td>
                        </tr>
                    )}

                </tbody>
                        </table>

                        
                        <div className="modal" id="myModal">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Appointment Data</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                    </div>

                                
                                    <div className="modal-body">
                                        <form onSubmit={handleSubmit}>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Doctor's Name</label>
                                                        <select className="form-control" name="doctorname" onChange={handleChange}>
                                                        <option value="" key="">Select Doctor</option>
                                                            {our_dentist.map((d, key) =>
                                                                <option selected={d.id == inputs.doctorname} value={d.id} key={key}>{d.name}</option>
                                                            )}
                                                            
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Patient Name</label>
                                                        <input value={inputs.patientname} type="text" className="form-control" name="patientname" onChange={handleChange} />
                                                        <input value={inputs.id} type="hidden" name="id"/>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Patient's Age</label>
                                                        <input type="text" className="form-control" name="age" value={inputs.age} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Problems</label>
                                                        <textarea className="form-control" name="problems" onChange={handleChange} value={inputs.problems}></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Mobile</label>
                                                        <input type="number" className="form-control" name="mobile" value={inputs.mobile} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Email</label>
                                                        <input type="email" className="form-control" name="email" value={inputs.email} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Date</label>
                                                        <input type="date" className="form-control" name="date" value={inputs.date} onChange={handleChange} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="mb-3">
                                                        <label className="form-label">Time</label>
                                                        <input type="time" className="form-control" name="time" value={inputs.time} onChange={handleChange} />
                                                    </div>
                                                </div>
                                               
                                                
                                               
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-3 offset-sm-3">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                                <div className="col-sm-3">
                                                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                            

                                    </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            {/* <Footer /> */}
        </div>
    )
}