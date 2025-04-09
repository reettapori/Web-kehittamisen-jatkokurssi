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
        <h2 className="add-exercise-title">Lisää liikuntasuoritus</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4">
        <label className="date-type-name block text-sm font-medium text-gray-700">Nimi</label>
        <input
          type="text"
          name="nimi"
          value={formData.nimi}
          onChange={handleChange}
          className="p-2 rounded"
        />
        <label className="date-type-name block text-sm font-medium text-gray-700">Päivämäärä</label>
        <input
          type="date"
          name="paivamaara"
          value={formData.paivamaara}
          onChange={handleChange}
          className="p-2 rounded"
        />
        <label className="date-type-name block text-sm font-medium text-gray-700">Liikuntalaji</label>
        <input
          type="text"
          name="liikuntalaji"
          value={formData.liikuntalaji}
          onChange={handleChange}
          className="p-2 rounded"
        />
        <label className="date-type-name block text-sm font-medium text-gray-700">Kesto (tuntia)</label>
        <input
          type="number"
          name="kesto"
          value={formData.kesto}
          onChange={handleChange}
          className="p-2 rounded"
        />
        <label className="date-type-name block text-sm font-medium text-gray-700">Keskinopeus (km/h)</label>
        <input
          type="number"
          name="keskinopeus"
          value={formData.keskinopeus}
          onChange={handleChange}
          className="p-2 rounded"
        />
        <label className="date-type-name block text-sm font-medium text-gray-700">Matka (km)</label>
        <input
          type="number"
          name="matka"
          value={formData.matka}
          onChange={handleChange}
          className="p-2 rounded"
        />
        <label className="date-type-name block text-sm font-medium text-gray-700">Lisätiedot</label>
        <textarea
          name="lisatiedot"
          value={formData.lisatiedot}
          onChange={handleChange}
          className="p-2 rounded"
        />
        <button type="submit" className="button-text-size bg-[#00B74A] text-white py-2 px-4 rounded hover:bg-blue-600">
          Lisää suoritus
        </button>
      </form>
    </div>
  );
};

export default AddExercise;
