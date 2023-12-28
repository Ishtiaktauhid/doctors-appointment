import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home/home';
import About from './components/About/about';
import Service from './components/Service/service';
import Contact from './components/Pages/Contact/contact';
import Price from './components/Pages/Price/price';
import Dentist from './components/Pages/Dentist/dentist';
import Appointment from './components/Pages/Appointment/appointment';
import Testimonial from './components/Pages/Testimonial/testimonial';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AppList from './components/Pages/List/appList';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/service",
    element: <Service />
  },
  {
    path: "/price",
    element: <Price />
  },
  {
    path: "/dentist",
    element: <Dentist />
  },
  {
    path: "/testimonial",
    element: <Testimonial />
  },
  {
    path: "/appointment",
    element: <Appointment />
  },
  {
    path: "/appList",
    element: <AppList />
  },
  {
    path: "/contact",
    element: <Contact />
  }

]);
 ReactDOM.createRoot(document.getElementById('root')).render(<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
