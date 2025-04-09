import React, { useState } from 'react';
import Header from './components/Header';
import AddExercise from './components/AddExercise';
import ExerciseList from './components/ExerciseList';
import WeeklyStats from './components/WeeklyStats';
import SearchExercise from './components/SearchExercise';  // Lisää tämä rivi

function App() {
  const [exercises, setExercises] = useState([]);

  return (
    <div className="bg-gray-200 text-black min-h-screen flex flex-col items-stretch justify-center p-4">
      <Header />
      <main className="flex flex-col w-full min-h-screen space-y-4">
        <section className="flex flex-col md:flex-row gap-10 w-full justify-start">
          {/* Lisää uusi liikuntasuoritus */}
          <div className="bg-white p-4 w-full md:w-1/3">
            <AddExercise />
          </div>
          
          {/* Viikkotilastot oikealle puolelle */}
          <div className="bg-white p-4 w-full md:w-1/3">
            <WeeklyStats />
          </div>
        </section>

                {/* Haku-komponentti */}
                <section className="flex w-full justify-between gap-6">
          <div className="w-1/3 bg-white p-4">
            <SearchExercise setExercises={setExercises} />
          </div>
        </section>

        {/* Liikuntasuoritusten lista */}
        <section className="bg-white p-4 w-full md:w-2/3">
            <ExerciseList exercises={exercises} />
        </section>
      </main>
    </div>
  );
}

export default App;
