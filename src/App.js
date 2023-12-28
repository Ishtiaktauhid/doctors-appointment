import React,{ useState } from 'react';
import Home from './components/Home/home';
import About from './components/About/about';
import Service from './components/Service/service';
import Contact from './components/Pages/Contact/contact';
import Price from './components/Pages/Price/price';
import Dentist from './components/Pages/Dentist/dentist';
import Appointment from './components/Pages/Appointment/appointment';
import Testimonial from './components/Pages/Testimonial/testimonial';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signin from './components/Admin/SignIn/signin';
import Register from './components/Admin/Register/register';
import Dashboard from './components/Admin/Dashboard/dashboard';
import AppList from './components/Admin/MakeAppointment/applist';
import Doctor from './components/Admin/Doctor/doctor_list';
import Protected from './components/protected';
import Test from './components/Pages/Test/test';
import Book from './components/Booking/book';
import { CartProvider } from 'react-use-cart';
function App(){
  const [ isSignedIn, setIsSignedIn ] = useState(()=> {
    const userLogged = sessionStorage.getItem("access_token");
    return userLogged || false;
  });
  return (
    <>
     <CartProvider>
     <BrowserRouter>
      <Routes>
          <Route path="/"  element={ <Home />} />
          <Route  path={ "/about"} element={<About />} />
          <Route  path={ "/service"} element={<Service />} />
          <Route  path={ "/price"} element={<Price />} />
          <Route  path={ "/dentist"} element={<Dentist />} />
          <Route  path={ "/testimonial"} element={<Testimonial />} />
          <Route  path={ "/appointment"} element={<Appointment />} />
          <Route  path={ "/test"} element= {<Test />} />
          <Route  path={"/book"} element ={<Book />} />
          <Route  path={ "/contact"} element={<Contact />} />
          <Route  path={ "/signin" } element={ <Signin />} />
          <Route path= {"/register"} element={<Register />} />

          <Route path= {"/dashboard"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Dashboard /> 
           </Protected>
           } />
          <Route path= {"/applist"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <AppList /> 
           </Protected>
           } />
          <Route path= {"/doctor_list"} element={
            <Protected  isSignedIn= {isSignedIn} >
              <Doctor /> 
           </Protected>
           } />
     </Routes>
  </BrowserRouter>
     </CartProvider>
    </>
  )

}
export default App;


 



