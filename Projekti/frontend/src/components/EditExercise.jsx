import React, { useState } from 'react';

const EditExercise = ({ selectedExercise, onSave, onCancel }) => {
  const [formData, setFormData] = useState(selectedExercise || {});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`http://localhost:5000/api/liikuntasuoritukset/${formData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      onSave(formData); // Päivitä tiedot listassa
    } catch (err) {
      console.error('Virhe muokkaamisessa:', err);
    }
  };

  return (
    <div className="edit-exercise-container">
      <div className="header-bar">
        <h2>Muokkaa liikuntasuoritusta</h2>
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
        <div className="button-group">
          <button type="submit" className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600">
            Tallenna
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-500 text-white py-1 px-3 rounded hover:bg-gray-600"
          >
            Peruuta
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditExercise;
