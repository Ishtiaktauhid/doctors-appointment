import { useEffect, useState, React } from "react";
import axios from "axios";

function MakeApp() {
  //   const [our_dentist, SetOur_dentist] = useState([]);
  //   const navigate = useNavigate();
  //   const [inputs, setInputs] = useState([]);

  //   const handleChange = (event) => {
  //       const name = event.target.name;
  //       const value = event.target.value;
  //       setInputs(values => ({...values, [name]: value}));
  //   }

  //   function getOur_dentist() {
  //     axios.get('http://localhost/reactCopy/dentist.php').then(function(response) {
  //         SetOur_dentist(response.data.data);
  //     });
  // }

  // //   const handleSubmit = (event) => {
  // //       event.preventDefault();
  // //       axios.post('http://localhost/reactCopy/form.php', inputs).then(function(response){
  // //           console.log(response.data);
  // //           alert("successfully submitted")
  // //           navigate('/');
  // //       });
  // //   }
  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     axios.post('http://localhost/reactCopy/crud/create_appointmetnt.php', inputs).then(function(response){
  //         console.log(response.data)
  //         getDatas();
  //         if(response.data.status==1)
  //             document.getElementById('modelbutton').click();
  //     });
  // }

  //   const clearData = ()=>{
  //     getOur_dentist();
  //     setInputs(values => ({...values,"id":"","doctorname":"","patientname":"","age":"", "problems": "","mobile": "","email":"","date":"", "time":""}))
  // }
  // from app.js
  const [appointment, setAppointment] = useState([]);
  const [our_dentist, SetOur_dentist] = useState([]);

  const [inputs, setInputs] = useState([]);
  useEffect(() => {
    getDatas();
  }, []);
  function getDatas() {
    axios
      .get("http://localhost/reactCopy/crud/index_appointment.php")
      .then(function (response) {
        setAppointment(response.data.data);
        console.log(response.data);
      });
  }
  function getOur_dentist() {
    axios
      .get("http://localhost/reactCopy/crud/index_doctor.php")
      .then(function (response) {
        SetOur_dentist(response.data.data);
      });
  }

  useEffect(() => {
    getOur_dentist();
  }, []);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost//reactCopy/form.php", inputs)
      .then(function (response) {
        console.log(response.data);
        getDatas();
        serFormSubmitted(true);
      });
  };

  // msg add
  const [formSubmitted, serFormSubmitted] = useState(false);

  return (
    <>
      {/*   <!-- Appointment Start --> */}
      <div
        className="container-fluid bg-primary bg-appointment my-5 wow fadeInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 py-5">
              <div className="py-5">
                <h1 className="display-5 text-white mb-4">
                  We Are A Certified and Award Winning Dental Clinic You Can
                  Trust
                </h1>
                <p className="text-white mb-0">
                  Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing
                  kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo
                  ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et
                  dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut
                  dolores magna sit. Sea dolore sanctus sed et. Takimata
                  takimata sanctus sed.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                data-wow-delay="0.6s"
              >
                <h1 className="text-white mb-4">Make Appointment</h1>
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-light border-0"
                        name="doctorname"
                        onChange={handleChange}
                        style={{ height: "55px" }}
                      >
                        <option value="" key="">
                          Select Doctor
                        </option>
                        {our_dentist.map((d, key) => (
                          <option
                            selected={d.id == inputs.doctorname}
                            value={d.id}
                            key={key}
                          >
                            {d.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        name="patientname"
                        onChange={handleChange}
                        placeholder="Patient Name"
                        style={{ height: "55px" }}
                        required
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        name="age"
                        onChange={handleChange}
                        placeholder="Age"
                        style={{ height: "55px" }}
                        required
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        name="problems"
                        onChange={handleChange}
                        placeholder="Problems"
                        style={{ height: "55px" }}
                        required
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="number"
                        className="form-control bg-light border-0"
                        name="mobile"
                        onChange={handleChange}
                        placeholder="Mobile"
                        style={{ height: "55px" }}
                        required
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        name="email"
                        onChange={handleChange}
                        placeholder="Email"
                        style={{ height: "55px" }}
                        required
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <div
                        className="date"
                        id="date1"
                        data-target-input="nearest"
                      >
                        <input
                          type="date"
                          name="date"
                          className="form-control bg-light border-0 datetimepicker-input"
                          onChange={handleChange}
                          placeholder="Appointment Date"
                          data-toggle="datetimepicker"
                          style={{ height: "55px" }}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12 col-sm-6">
                      <div
                        className="time"
                        id="time1"
                        data-target-input="nearest"
                      >
                        <input
                          type="time"
                          name="time"
                          onChange={handleChange}
                          className="form-control bg-light border-0 datetimepicker-input"
                          placeholder="Appointment Time"
                          data-toggle="datetimepicker"
                          style={{ height: "55px" }}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <button className="btn btn-dark w-100 py-3" type="submit">
                        Make Appointment
                      </button>
                    </div>
                  </div>
                </form>
                {formSubmitted && (
                  <div className="alert alert-success mt-3">
                    Form Submittted Successfully!
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MakeApp;
