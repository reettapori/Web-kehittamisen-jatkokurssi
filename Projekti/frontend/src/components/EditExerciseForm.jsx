import React, { useState, useEffect } from 'react';

// Komponentti liikuntasuorituksen muokkaamiseen
// Propsit:
// - exercise: muokattava suoritus (objekti)
// - setSelectedExercise: funktio, jolla asetetaan valittu suoritus (null kun suljetaan lomake)
// - setExercises: funktio, jolla päivitetään koko suorituslista
const EditExerciseForm = ({ exercise, setSelectedExercise, setExercises }) => {
  // Tilamuuttuja lomaketiedoille, alustetaan kopioimalla exercise-objekti
  const [formData, setFormData] = useState({ ...exercise });

  // Kun exercise-proppi päivittyy, päivitetään formData vastaamaan sitä
  useEffect(() => {
    setFormData({ ...exercise });
  }, [exercise]);

  // Kenttien muutosten käsittely (yksi handler hoitaa kaikki)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value, // Päivitetään muuttuva kenttä
    });
  };

  // Lomakkeen lähetys – suoritus päivitetään tietokantaan
  const handleSubmit = async (e) => {
    e.preventDefault(); // Estetään sivun uudelleenlataus

    try {
      // PUT-pyyntö backendille, päivitys ID:n perusteella
      const response = await fetch(`http://localhost:5000/api/liikuntasuoritukset/${formData.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const updatedExercise = await response.json();

        // Korvataan vanha suoritus uudella päivitetyn perusteella
        setExercises((prev) =>
          prev.map((ex) => (ex.id === updatedExercise.id ? updatedExercise : ex))
        );

        // Suljetaan muokkauslomake
        setSelectedExercise(null);
      }
    } catch (err) {
      console.error('Virhe päivitettäessä suoritusta:', err);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-2xl p-6">
      <h2 className="text-2xl font-bold mb-4">Muokkaa suoritusta</h2>

      {/* Muokkauslomake */}
      <form onSubmit={handleSubmit}>
        {/* Jokainen kenttä vastaa tiettyä liikuntasuorituksen osaa */}
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

        {/* Toimintopainikkeet */}
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">
          Tallenna
        </button>
        <button
          type="button"
          onClick={() => setSelectedExercise(null)} // Sulkee lomakkeen
          className="ml-3 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-md"
        >
          Peruuta
        </button>
      </form>
    </div>
  );
};

export default EditExerciseForm;
