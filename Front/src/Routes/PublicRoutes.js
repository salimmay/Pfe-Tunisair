import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "../components/pages/Main";
import AllOffers from "../components/pages/AllOffers";
import Login from "../components/pages/Login";
import Contact from "../components/pages/Contact";
import SignUp from "../components/pages/SignUp";
import Blog from "../components/pages/Blog";
import About from "../components/pages/About";
import OfferDetailsItem from "../components/offers/OfferDetailsItem";
import ForgotPassword from "../components/pages/ForgotPassword";
import Error from "../components/pages/Error";

const PublicRoutes = () => {
  console.log("Public");

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<Error />} />
      <Route path="/careers" element={<AllOffers />} />
      <Route path="/offerDetailsItem/:id" element={<OfferDetailsItem />} />
      <Route path="/login" element={<Login />} />
      <Route path="/ForgotPassword" element={<ForgotPassword />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default PublicRoutes;
