import React from 'react';
import logo from '../assets/logo.jpg'; // Varmista polku logo-tiedostoon

const Header = () => {
  return (
    <header style={{ backgroundColor: '#88a0c2' }} className="bg-blue-600 w-full flex items-center justify-between p-4">
      <div className="flex items-center">
        <img src={logo} alt="Liikuntapäiväkirja Logo" className="logo h-12 mr-4" />
        <h1 className="header-text text-white text-2xl font-bold">Liikuntapäiväkirja</h1>
      </div>
      <nav className="flex space-x-24">
        {/* Linkit eri osioihin */}
        <a href="#add-exercise" className="text-white text-2xl hover:underline">Aloitusnäkymä</a>
        <a href="#search" className="text-white text-2xl hover:underline">Hae liikuntasuorituksia</a>
        <a href="#exercise-list" className="text-white text-2xl hover:underline">Viimeisimmät liikuntasuoritukset</a>
        <a href="#map-section" className="text-white text-2xl hover:underline">Kartta</a>
      </nav>
    </header>
  );
};

export default Header;
