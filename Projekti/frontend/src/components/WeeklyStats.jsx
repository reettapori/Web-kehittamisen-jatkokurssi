import React, { useState, useEffect } from 'react';

const WeeklyStats = () => {
  const [stats, setStats] = useState({
    longestDuration: null,
    fastestSpeed: null,
    longestDistance: null,
    mostActivePerson: null,
  });

  const [userName, setUserName] = useState('');
  const [goalHours, setGoalHours] = useState('');
  const [userHours, setUserHours] = useState(null);

  // Hae viikon tilastot
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/weekly-stats');
        const data = await response.json();
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
  }, []);

  // Hae käyttäjän tehdyt tunnit
  const handleFetchProgress = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/user-progress?nimi=${userName}`);
      const data = await response.json();
      setUserHours(data.totalHours || 0);
    } catch (err) {
      console.error('Virhe haettaessa käyttäjän tietoja:', err);
    }
  };

  const calculatePercentage = () => {
    if (goalHours > 0) {
      return ((userHours / goalHours) * 100).toFixed(1); // Lasketaan prosenttiosuus ja rajataan yhden desimaalin tarkkuus
    }
    return 0; // Jos tavoitetunnit eivät ole asetettu, prosenttiosuus on 0
  };

  return (
    <div className="weekly-stats-container">
      {/* Viikon tilastot */}
      <div className="header-bar3">
        <h2 className="weeklystats-title">Viikon tilastot</h2>
      </div>
      <div className="p-4 space-y-4 text-lg leading-relaxed text-gray-800">
        <p><strong>Viikon pisin liikuntasuoritus:</strong> {stats.longestDuration || 'Ei tietoja'} minuuttia</p>
        <p><strong>Viikon nopein suoritus:</strong> {stats.fastestSpeed || 'Ei tietoja'} km/h</p>
        <p><strong>Viikon pisin matka:</strong> {stats.longestDistance || 'Ei tietoja'} km</p>
        <p><strong>Viikon aktiivisin liikkuja:</strong> {stats.mostActivePerson || 'Ei tietoja'}. Hienoa, jatka samaan malliin!</p>
      </div>

      {/* Edistymistoiminto */}
      <div className="progress-section mt-6">
        <h3 className="progress-title">Edistymisen seuranta</h3>
        <div className="mb-4">
          <label className="user-name">Käyttäjän nimi</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="target-hours">Tavoitetunnit</label>
          <input
            type="number"
            value={goalHours}
            onChange={(e) => setGoalHours(e.target.value)}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>

        <button
          onClick={handleFetchProgress}
          className="button-text-size bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
        >
          Näytä edistyminen
        </button>

        {/* Näytä tehdyt tunnit / tavoitetunnit ja prosenttiosuus */}
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
