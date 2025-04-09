import React, { useState, useEffect } from 'react';

const EditExerciseForm = ({ exercise, setSelectedExercise, setExercises }) => {
  const [formData, setFormData] = useState({ ...exercise });

  useEffect(() => {
    setFormData({ ...exercise });
  }, [exercise]);

  // Lomakkeen kenttien muutokset
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Suorituksen päivitys
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/liikuntasuoritukset/${formData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const updatedExercise = await response.json();
        setExercises((prev) =>
          prev.map((ex) => (ex.id === updatedExercise.id ? updatedExercise : ex))
        );
        setSelectedExercise(null); // Sulkee lomakkeen
      }
    } catch (err) {
      console.error('Virhe päivitettäessä suoritusta:', err);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">Muokkaa suoritusta</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Nimi</label>
          <input
            type="text"
            name="nimi"
            value={formData.nimi || ''}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Päivämäärä</label>
          <input
            type="date"
            name="paivamaara"
            value={formData.paivamaara || ''}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Kesto (tunnissa)</label>
          <input
            type="number"
            name="kesto"
            value={formData.kesto || ''}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Liikuntalaji</label>
          <input
            type="text"
            name="liikuntalaji"
            value={formData.liikuntalaji || ''}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Keskinopeus (km/h)</label>
          <input
            type="number"
            name="keskinopeus"
            value={formData.keskinopeus || ''}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Matka (km)</label>
          <input
            type="number"
            name="matka"
            value={formData.matka || ''}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Lisätiedot</label>
          <textarea
            name="lisatiedot"
            value={formData.lisatiedot || ''}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
          Tallenna
        </button>
        <button
          type="button"
          onClick={() => setSelectedExercise(null)}
          className="ml-3 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md"
        >
          Peruuta
        </button>
      </form>
    </div>
  );
};

export default EditExerciseForm;
