import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";


import Homepage from '../HomePage/HomePage'
import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';;



const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path='404' element={<ErrorPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
