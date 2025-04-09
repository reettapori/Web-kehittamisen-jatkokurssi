// ExerciseList.jsx
import React, { useState, useEffect } from 'react';
import EditExerciseForm from './EditExerciseForm';

const ExerciseList = () => {
  const [exercises, setExercises] = useState([]);
  const [selectedExercise, setSelectedExercise] = useState(null);

  useEffect(() => {
    // Hae suoritukset backendistä
    const fetchExercises = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/liikuntasuoritukset?last7days=true');
        const data = await response.json();
        setExercises(data);
      } catch (err) {
        console.error('Virhe noudettaessa liikuntasuorituksia:', err);
      }
    };
    fetchExercises();
  }, []);

  // Poista-suoritus
  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/liikuntasuoritukset/${id}`, {
        method: 'DELETE',
      });
      setExercises(exercises.filter((exercise) => exercise.id !== id)); // Poista paikallisesti listalta
    } catch (err) {
      console.error('Virhe poistettaessa suoritusta:', err);
    }
  };

  // Avaa muokkauslomake
  const handleEdit = (exercise) => {
    setSelectedExercise(exercise); // Asetetaan valittu suoritus muokattavaksi
  };

  return (
    <div className="text-black p-4 flex space-x-6">
      {/* Lista liikuntasuorituksista */}
      <div className="bg-white shadow-md rounded-2xl p-6 w-2/3">
        {/* Harmaa palkki */}
        <div className="header-bar4">
          <h2 className="add-exercise-title">Liikuntasuoritukset (viimeiset 7 päivää)</h2>
        </div>
        {exercises.length > 0 ? (
          <ul className="space-y-4">
            {exercises.map((exercise) => (
              <li key={exercise.id} className="p-4 border border-gray-200 rounded-xl shadow-sm">
                <p className="font-semibold text-lg">{exercise.nimi}</p>
                <p>Päivämäärä: {new Date(exercise.paivamaara).toLocaleDateString('fi-FI')}</p>
                <p>Kesto: {exercise.kesto} h</p>
                <p>Laji: {exercise.liikuntalaji}</p>
                <p>Keskinopeus: {exercise.keskinopeus} km/h</p>
                <p>Matka: {exercise.matka} km</p>
                <p>Lisätiedot: {exercise.lisatiedot || 'Ei lisätietoja'}</p>
                <div className="mt-3 space-x-2">
                  <button
                    onClick={() => handleEdit(exercise)} // Avaa muokkauslomake
                    className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-4 rounded"
                  >
                    Muokkaa
                  </button>
                  <button
                    onClick={() => handleDelete(exercise.id)}
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded"
                  >
                    Poista
                  </button>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p>Ei tallennettuja suorituksia viimeisen 7 päivän ajalta.</p>
        )}
      </div>


      {/* Muokkauslomake tulee tänne erilliseksi alueeksi */}
      {selectedExercise && (
        <div className="bg-white shadow-md rounded-2xl p-6 w-2/3">
          <EditExerciseForm
            exercise={selectedExercise}
            setSelectedExercise={setSelectedExercise}
            setExercises={setExercises}
          />
        </div>
      )}
    </div>
  );
};

export default ExerciseList;
