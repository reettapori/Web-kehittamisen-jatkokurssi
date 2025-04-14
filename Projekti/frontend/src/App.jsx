import React, { useState } from 'react';

// Sovelluksen osakomponentit
import Header from './components/Header';
import AddExercise from './components/AddExercise';
import ExerciseList from './components/ExerciseList';
import WeeklyStats from './components/WeeklyStats';
import SearchExercise from './components/SearchExercise';
import MapComponent from './components/MapComponent'; // Leaflet-karttakomponentti
import Footer from './components/Footer';

function App() {
  // State liikuntasuoritusten listalle (käytetään mm. haussa)
  const [exercises, setExercises] = useState([]);

  return (
    <div className="bg-gray-200 text-black min-h-screen flex flex-col items-stretch justify-center p-4">
      {/* Ylätunniste */}
      <Header />

      <main className="flex flex-col w-full min-h-screen space-y-4">
        {/* Ylin rivi: lisää liikunta + viikkotilastot */}
        <section className="flex flex-col md:flex-row gap-10 w-full justify-start">
          {/* Uuden liikuntasuorituksen lisäys */}
          <div className="bg-white p-4 w-full md:w-1/3">
            <AddExercise />
          </div>

          {/* Viikon tilastot oikealle puolelle */}
          <div className="bg-white p-4 w-full md:w-1/3">
            <WeeklyStats />
          </div>
        </section>

        {/* Hakukomponentti (lomake + tulokset) */}
        <section>
          <div className="bg-white p-4 w-full md:w-1/3">
            {/* Passataan setExercises propsina, jotta hakutulokset voidaan tallentaa */}
            <SearchExercise setExercises={setExercises} />
          </div>
        </section>

        {/* Hakutulokset tai kaikki liikuntasuoritukset */}
        <section className="bg-white p-4 w-full md:w-2/3">
          <ExerciseList exercises={exercises} />
        </section>

        {/* Leaflet-karttakomponentti (esim. reittien näyttämiseen) */}
        <section className="bg-white p-4 md:w-2/3">
          <MapComponent />
        </section>
      </main>

      {/* Alatunniste */}
      <Footer />
    </div>
  );
}

export default App;
