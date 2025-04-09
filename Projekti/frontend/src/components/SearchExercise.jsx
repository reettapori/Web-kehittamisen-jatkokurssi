import React, { useState } from 'react';

const SearchExercise = ({ setExercises }) => {
  const [searchParams, setSearchParams] = useState({
    paivamaara: '',
    liikuntalaji: '',
    nimi: '',
  });
  const [results, setResults] = useState([]); // Tallennetaan hakutulokset

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const query = `?paivamaara=${searchParams.paivamaara}&liikuntalaji=${searchParams.liikuntalaji}&nimi=${searchParams.nimi}`;
      const response = await fetch(`http://localhost:5000/api/liikuntasuoritukset${query}`);
      const data = await response.json();

      if (data.length > 0) {
        setResults(data); // Näytä suodatetut tulokset
      } else {
        setResults([]); // Ei tuloksia hakuehdoilla
      }
    } catch (err) {
      console.error('Virhe haettaessa suorituksia:', err);
    }
  };

  return (
    <div className="search-exercise-container">
      {/* Oranssi palkki hakupalkille */}
      <div className="header-bar2">
      <h2 className="search-exercise-title">Hae liikuntasuorituksia:</h2>
      </div>
      <form onSubmit={handleSearch} className="flex flex-col space-y-4 p-4 rounded-lg border border-gray-300">
        <div className="mb-4">
          <label className="date-type-name block text-sm font-medium text-gray-700">Päivämäärä</label>
          <input
            type="date"
            name="paivamaara"
            value={searchParams.paivamaara}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="date-type-name block text-sm font-medium text-gray-700">Liikuntalaji</label>
          <input
            type="text"
            name="liikuntalaji"
            value={searchParams.liikuntalaji}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="date-type-name block text-sm font-medium text-gray-700">Käyttäjän nimi</label>
          <input
            type="text"
            name="nimi"
            value={searchParams.nimi}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="button-text-size bg-[#FF9F1C] hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Hae
        </button>
      </form>

      {/* Näytä hakutulokset lomakkeen alapuolella */}
      <div className="mt-6">
        <h3 className="text-xl font-bold">Hakutulokset:</h3>
        {results.length > 0 ? (
          <ul className="space-y-4">
            {results.map((exercise) => (
              <li key={exercise.id} className="p-4 border border-gray-200 rounded-md shadow-sm">
                <p><strong>Nimi:</strong> {exercise.nimi}</p>
                <p><strong>Päivämäärä:</strong> {new Date(exercise.paivamaara).toLocaleDateString('fi-FI')}</p>
                <p><strong>Kesto:</strong> {exercise.kesto} tuntia</p>
                <p><strong>Laji:</strong> {exercise.liikuntalaji}</p>
                <p><strong>Matka:</strong> {exercise.matka} km</p>
                <p><strong>Keskinopeus:</strong> {exercise.keskinopeus} km/h</p>
                <p><strong>Lisätiedot:</strong> {exercise.lisatiedot || 'Ei lisätietoja'}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Ei tuloksia hakuehdoilla.</p>
        )}
      </div>
    </div>
  );
};

export default SearchExercise;
