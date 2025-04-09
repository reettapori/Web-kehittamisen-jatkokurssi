import React from 'react';
import logo from '../assets/logo.jpg'; // Varmista polku logo-tiedostoon

const Header = () => {
  return (
    <header style={{ backgroundColor: '#88a0c2' }} className="bg-blue-600 w-full flex items-center justify-start">
      <img src={logo} alt="Liikuntapäiväkirja Logo" className="logo" />
      <h1 className="header-text">Liikuntapäiväkirja</h1>
    </header>
  );
};

export default Header;
