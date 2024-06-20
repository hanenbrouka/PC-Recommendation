import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/LandingPage/NavBar/NavBar";
import Footer from "./Components/LandingPage/Footer/Footer";
import Login from "./Components/AuthPage/Login";
import SignUp from "./Components/AuthPage/SignUp";
import LaptopDetail from "./Components/PcDetails/LaptopDetails/laptopDetails";
import SearchPc from "./Components/SearchPc/SearchPc";
import ForgotPassword from "./Components/AuthPage/ForgotPassword";
import ResetPassword from "./Components/AuthPage/ResetPassword";
import ProfilUser from "./Components/ProfilUser/profilUser";
import FavoritesList from "./Components/ProfilUser/FavorisListe";
import NewsletterForm from "./Components/newsletter/newsletter";
import Home from "./Components/LandingPage/Home/Home";
import { FavoritesProvider } from "./Components/ProfilUser/FavoritesContext";

function App() {
  return (
    <FavoritesProvider >
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
    </FavoritesProvider>
  );
}

export default App;