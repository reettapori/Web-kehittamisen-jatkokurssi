import React, { useState } from 'react';

// Komponentti liikuntasuorituksen lisäämiseen
const AddExercise = () => {
  // Käytetään Reactin useState-hookia lomakkeen kenttien tilan hallintaan
  const [formData, setFormData] = useState({
    nimi: '',
    paivamaara: '',
    kesto: '',
    liikuntalaji: '',
    keskinopeus: '',
    matka: '',
    lisatiedot: '',
  });

  // Funktio, joka päivittää lomakkeen kenttien arvoja käyttäjän syötteen perusteella
  const handleChange = (e) => {
    setFormData({
      ...formData, // säilytetään olemassa olevat kentät
      [e.target.name]: e.target.value, // päivitetään muuttuva kenttä
    });
  };

  // Funktio, joka suoritetaan kun lomake lähetetään
  const handleSubmit = async (e) => {
    e.preventDefault(); // Estetään oletusarvoinen lomakkeen lähetys
    try {
      // Lähetetään POST-pyyntö backendin API-päätepisteeseen lomakkeen tiedoilla
      await fetch('http://localhost:5000/api/liikuntasuoritukset', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      // (Tässä voisi lisätä esimerkiksi ilmoituksen onnistuneesta lisäyksestä tai tyhjentää lomakkeen.)
    } catch (err) {
      console.error('Virhe:', err); // Tulostetaan mahdollinen virhe
    }
  };

  return (
    <div
      id="add-exercise"
      className="add-exercise-container relative"
      style={{ scrollMarginTop: '140px' }} // Mahdollistaa scrollauksen oikeaan kohtaan navigoidessa
    >
      {/* Vihreä yläpalkki ja otsikko */}
      <div className="header-bar">
        <h2 className="add-exercise-title">Lisää liikuntasuoritus</h2>
      </div>

      {/* Lomake suorituksen tietojen syöttämiseen */}
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4">
        {/* Jokainen kenttä sisältää labelin ja inputin tai tekstialueen */}
        <label className="date-type-name block text-sm font-medium text-gray-700">Nimi, pakollinen</label>
        <input
          type="text"
          name="nimi"
          value={formData.nimi}
          onChange={handleChange}
          className="p-2 rounded"
        />

        <label className="date-type-name block text-sm font-medium text-gray-700">Päivämäärä, pakollinen</label>
        <input
          type="date"
          name="paivamaara"
          value={formData.paivamaara}
          onChange={handleChange}
          className="p-2 rounded"
        />

        <label className="date-type-name block text-sm font-medium text-gray-700">Liikuntalaji, pakollinen</label>
        <input
          type="text"
          name="liikuntalaji"
          value={formData.liikuntalaji}
          onChange={handleChange}
          className="p-2 rounded"
        />

        <label className="date-type-name block text-sm font-medium text-gray-700">Kesto (tuntia), pakollinen</label>
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

        {/* Lähetyspainike, jonka taustaväri määritetty Tailwindin kautta */}
        <button
          type="submit"
          className="button-text-size bg-[#00B74A] text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Lisää suoritus
        </button>
      </form>
    </div>
  );
};

export default AddExercise;
