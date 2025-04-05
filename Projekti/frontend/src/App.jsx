import React from 'react';
import logo from './assets/logo.jpg';

function App() {
  return (
    <div className="bg-gray-200 text-white min-h-screen flex flex-col items-stretch justify-center p-4">
      {/* Yläpalkki */}
      <header style={{ backgroundColor: '#88a0c2' }} className="w-full flex items-center justify-start">
        <img src={logo} alt="Liikuntapäiväkirja Logo" className="logo" />
        <h1 className="header-text">Liikuntapäiväkirja</h1>
      </header>
      {/* Pääsisältö */}
      <main className="flex flex-col items-center justify-center w-full min-h-screen">
        <h2 className="text-xl mb-4">Lisää liikuntasuoritus</h2>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
          Lisää
        </button>
      </main>
    </div>
  );
}

export default App;
