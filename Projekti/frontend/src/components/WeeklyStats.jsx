import React, { useState, useEffect } from 'react';

const WeeklyStats = () => {
  // Tila viikon yleisille tilastoille
  const [stats, setStats] = useState({
    longestDuration: null,      // Pisin yksittäinen liikuntasuoritus (tunteina)
    fastestSpeed: null,         // Nopein keskinop. viikolta
    longestDistance: null,      // Pisin yksittäinen matka
    mostActivePerson: null,     // Eniten liikuntaa tehnyt henkilö
  });

  // Tiloja käyttäjän edistymisen seurantaa varten
  const [userName, setUserName] = useState('');     // Käyttäjän nimi inputista
  const [goalHours, setGoalHours] = useState('');   // Käyttäjän asettama tavoite (tunnit)
  const [userHours, setUserHours] = useState(null); // Tietokannasta haetut tunnit

  // Haetaan viikon tilastot, kun komponentti renderöidään ensimmäisen kerran
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/weekly-stats');
        const data = await response.json();
        // Tallennetaan tilastot stateen
        setStats({
          longestDuration: data.longestDuration,
          fastestSpeed: data.fastestSpeed,
          longestDistance: data.longestDistance,
          mostActivePerson: data.mostActivePerson,
        });
      } catch (err) {
        console.error('Virhe tietojen hakemisessa:', err);
      }
    };

    fetchStats();
  }, []); // Tyhjä dependency array -> suoritetaan vain kerran

  // Hakee valitun käyttäjän tämän viikon liikuntatunnit
  const handleFetchProgress = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/user-progress?nimi=${userName}`);
      const data = await response.json();
      setUserHours(data.totalHours || 0); // Asetetaan oletukseksi 0, jos ei ole tietoja
    } catch (err) {
      console.error('Virhe haettaessa käyttäjän tietoja:', err);
    }
  };

  // Lasketaan käyttäjän edistyminen prosentteina tavoitetunneista
  const calculatePercentage = () => {
    if (goalHours > 0) {
      return ((userHours / goalHours) * 100).toFixed(1); // Esim. "75.0"
    }
    return 0; // Jos tavoite puuttuu
  };

  return (
    <div className="weekly-stats-container">
      {/* Otsikko ja tilastot-osio */}
      <div className="header-bar3">
        <h2 className="weeklystats-title">Viikon tilastot</h2>
      </div>
      <div className="p-4 space-y-4 text-lg leading-relaxed text-gray-800">
        <p><strong>Viikon pisin liikuntasuoritus:</strong> {stats.longestDuration || '(Ei tietoja)'} tuntia</p>
        <p><strong>Viikon nopein suoritus:</strong> {stats.fastestSpeed || '(Ei tietoja)'} km/h</p>
        <p><strong>Viikon pisin matka:</strong> {stats.longestDistance || '(Ei tietoja)'} km</p>
        <p><strong>Viikon aktiivisin liikkuja:</strong> {stats.mostActivePerson || '(Ei tietoja)'}</p>
      </div>

      {/* Käyttäjän edistymisen seuranta -osio */}
      <div className="progress-section mt-6">
        <h3 className="progress-title">Edistymisen seuranta</h3>

        {/* Käyttäjän nimikenttä */}
        <div className="mb-4">
          <label className="user-name">Käyttäjän nimi</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Tavoitetunnit */}
        <div className="mb-4">
          <label className="target-hours">Tavoitetunnit</label>
          <input
            type="number"
            value={goalHours}
            onChange={(e) => setGoalHours(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Painike, jolla haetaan edistyminen */}
        <button
          onClick={handleFetchProgress}
          className="button-text-size bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Näytä edistyminen
        </button>

        {/* Näytetään edistyminen vain, jos käyttäjän tunnit on haettu */}
        {userHours !== null && (
          <div className="mt-4">
            <p>
              <strong>Tehdyt tunnit:</strong> {userHours} / {goalHours || 'Tavoite ei asetettu'} 
              {' '}(<strong>{calculatePercentage()}%</strong>)
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeeklyStats;
