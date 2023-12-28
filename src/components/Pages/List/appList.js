import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


export default function AppList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get('http://localhost/react/index.php').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }
    const deleteUser = (id) => {
        axios.delete(`http://localhost/react/delete.php?id=${id}`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }

    return (
        <div>
            <h1>Appoinment List</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Appointment Date</th>
                        <th>Appointment Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.date}</td>
                            <td>{user.time}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}

// import React from "react";

// function AppList(){
//     return(
//         <>
//         <div className="container">
//             <div className="row">
//                 <div className="col-12">
//                 <h1>Welcome to Appointment List</h1>
//                 </div>
//             </div>
//         </div>
//         </>
//     )
// }
// export default AppList;