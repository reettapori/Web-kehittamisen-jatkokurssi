import React, { useState } from 'react';

const AddExercise = () => {
  const [formData, setFormData] = useState({
    nimi: '',
    paivamaara: '',
    kesto: '',
    liikuntalaji: '',
    keskinopeus: '',
    matka: '',
    lisatiedot: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:5000/api/liikuntasuoritukset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error('Virhe:', err);
    }
  };

  return (
    <div className="add-exercise-container">
      {/* Vihreä palkki otsikolla */}
      <div className="header-bar">
        <h2>Lisää liikuntasuoritus</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4">
        <input
          type="text"
          name="nimi"
          placeholder="Nimi"
          value={formData.nimi}
          onChange={handleChange}
          className="p-2 rounded"
        />
        <input
          type="date"
          name="paivamaara"
          value={formData.paivamaara}
          onChange={handleChange}
          className="p-2 rounded"
        />
        <input
          type="number"
          name="kesto"
          placeholder="Kesto (tuntia)"
          value={formData.kesto}
          onChange={handleChange}
          className="p-2 rounded"
        />
        <input
          type="text"
          name="liikuntalaji"
          placeholder="Liikuntalaji"
          value={formData.liikuntalaji}
          onChange={handleChange}
          className="p-2 rounded"
        />
        <input
          type="number"
          name="keskinopeus"
          placeholder="Keskinopeus (km/h)"
          value={formData.keskinopeus}
          onChange={handleChange}
          className="p-2 rounded"
        />
        <input
          type="number"
          name="matka"
          placeholder="Matka (km)"
          value={formData.matka}
          onChange={handleChange}
          className="p-2 rounded"
        />
        <textarea
          name="lisatiedot"
          placeholder="Lisätiedot"
          value={formData.lisatiedot}
          onChange={handleChange}
          className="p-2 rounded"
        />
        <button type="submit" className="bg-[#00B74A] text-white py-2 px-4 rounded hover:bg-blue-600">
          Lisää suoritus
        </button>
      </form>
    </div>
  );
};

export default AddExercise;
