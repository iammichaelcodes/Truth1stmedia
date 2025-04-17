import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";


import Homepage from '../HomePage/HomePage'
import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import { ReportPage } from '../HomePage/mods/new pages/Report';
import { MerchStorePage } from '../HomePage/mods/new pages/MerchStore';
import { AboutTruthFirstPage } from '../HomePage/mods/new pages/AboutPage';
import { AntyEcosystem } from '../HomePage/mods/new pages/AntyEcosystem';
import { DaoPage } from '../HomePage/mods/new pages/Dao';
import { DonationsScreen } from '../HomePage/mods/new pages/DonationsPage';
;



const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="home" element={<Homepage />} />
          <Route path='404' element={<ErrorPage />} />

          {/* Truth 1st */}
          <Route path='contact' element={<ContactPage />} />
          <Route path='dao' element={<DaoPage />} />

          <Route path='report' element={<ReportPage />} />
          <Route path='merch-store' element={<MerchStorePage />} />
          <Route path='about' element={<AboutTruthFirstPage />} />
          {/* <Route path='anty-ecosystem' element={<AntyEcosystem />} /> */}
          <Route path='donations' element={<DonationsScreen />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
