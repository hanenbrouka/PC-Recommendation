import React from "react";
import "./App.css";
import Login from "./Components/AuthPage/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/LandingPage/Home/Home";
import SignUp from "./Components/AuthPage/SignUp";
import LaptopDetail from "./Components/PcDetails/LaptopDetails/laptopDetails";
import SearchPc from "./Components/SearchPc/SearchPc";
import ForgotPassword from "./Components/AuthPage/ForgotPassword";
import ResetPassword from "./Components/AuthPage/ResetPassword";
import NavBar from "./Components/LandingPage/NavBar/NavBar";
import Footer from "./Components/LandingPage/Footer/Footer";
import ProfilUser from "./Components/ProfilUser/profilUser";
import FavoritesList from "../src/Components/ProfilUser/FavorisListe";
import NewsletterForm from "./Components/newsletter/newsletter";
// import CarouselSection from './Components/LandingPage/CarouselSection/CarouselSection';

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/pc-detail" element={<LaptopDetail />} />
          <Route path="/search" element={<SearchPc />} />
          <Route path="/*" element={<Home />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/user-profil" element={<ProfilUser />} />
          <Route path="/favorite-liste" element={<FavoritesList />} />
          <Route path="/newsletter" element={<NewsletterForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
