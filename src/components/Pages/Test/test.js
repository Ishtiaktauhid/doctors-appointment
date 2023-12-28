import React, { useEffect, useState } from "react";
import Header from "../../Header/header";
import Footer from "../../Footer/footer";
import { fetchTestData } from "../../../api/test";
import { useCart } from "react-use-cart";


function Test() {
        const [testData, setTestData] = useState([]);
        const { addItem } = useCart();


        useEffect( () =>{
            const fetchData = async () => {
                try {
                    const data = await fetchTestData();
                    setTestData(data);
                }catch(error){
                    console.error(error.message);
                }
            };
            fetchData();
        }, [] )

  return (
    <>
      <Header />
      <div className="container-fluid py-5">
        <div className="container">
            {testData.length > 0 && (
        <div className="row g-5">
        {testData.map(test => ( 
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s" key ={test.id}>
            <div className="team-item">
              <div
                className="position-relative rounded-top"
                style={{ zIndex: "1" }}
              >
                <img
                  className="img-fluid rounded-top w-100"
                  src= {test.image}
                  alt=""
                />
              </div>
              <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                <h4 class="card-title">{test.test_name}</h4>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item font-weight-bold">Price: ${test.price}</li>
                </ul>
                <div class="card-body">
                  <button class="btn btn-primary" onClick={() => addItem(test)} >
                    Add to Book
                  </button>
                </div>
               
              </div>
            </div>
          </div>
           ))}
         
        </div>
            )}
      </div>
     </div>

      <Footer />
    </>
  );
}
export default Test;
