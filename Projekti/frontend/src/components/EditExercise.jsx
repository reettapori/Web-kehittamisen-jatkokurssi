import React, { useState } from 'react';

// Komponentti liikuntasuorituksen muokkaamiseen
// Propsit:
// - selectedExercise: valittu suoritustieto, jota muokataan
// - onSave: funktio, joka kutsutaan kun muokkaus tallennetaan
// - onCancel: funktio, joka kutsutaan kun muokkaus perutaan
const EditExercise = ({ selectedExercise, onSave, onCancel }) => {
  // Alustetaan formData valitun suorituksen tiedoilla
  const [formData, setFormData] = useState(selectedExercise || {});

  // Päivitetään lomakkeen kenttiä käyttäjän syötteen perusteella
  const handleChange = (e) => {
    setFormData({
      ...formData, // säilytetään olemassa olevat tiedot
      [e.target.name]: e.target.value, // päivitetään muuttuva kenttä
    });
  };

  // Lomakkeen lähetysfunktio
  const handleSubmit = async (e) => {
    e.preventDefault(); // Estetään sivun uudelleenlataus
    try {
      // PUT-pyyntö backendille, jolla päivitetään tietty suoritus ID:n perusteella
      await fetch(`http://localhost:5000/api/liikuntasuoritukset/${formData.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // Kutsutaan onSave-funktiota, jotta tieto päivittyy myös käyttöliittymässä
      onSave(formData);
    } catch (err) {
      console.error('Virhe muokkaamisessa:', err);
    }
  };

  return (
    <div className="edit-exercise-container">
      {/* Otsikkopalkki */}
      <div className="header-bar">
        <h2>Muokkaa liikuntasuoritusta</h2>
      </div>

      {/* Lomake suorituksen muokkaamiseksi */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4">
        {/* Lomakekentät – jokainen kenttä vastaa tiettyä suorituksen osaa */}
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

        {/* Painikkeet: Tallenna ja Peruuta */}
        <div className="button-group">
          <button
            type="submit"
            className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
          >
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
