import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Karttakomponentti, joka mahdollistaa merkintöjen näyttämisen ja lisäämisen kartalle
const MapComponent = () => {
  const [markers, setMarkers] = useState([]);        // Lista tallennetuista merkinnöistä
  const [newMarker, setNewMarker] = useState(null);  // Uusi kartalle klikattu merkintä
  const [description, setDescription] = useState(''); // Uuden merkinnän kuvaus

  // Haetaan aiemmat merkinnät palvelimelta komponentin alustuksessa
  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/map-markers');
        const data = await response.json();
        setMarkers(data); // Tallennetaan merkinnät tilaan
      } catch (err) {
        console.error('Virhe haettaessa merkintöjä:', err);
      }
    };

    fetchMarkers();
  }, []);

  // Hoitaa karttatapahtumat (tässä: klikkaus kartalle)
  const MapEventHandler = () => {
    useMapEvents({
      click: (event) => {
        const { lat, lng } = event.latlng;
        setNewMarker({ lat, lng, description: '' }); // Uusi merkki kartalle
      },
    });
    return null;
  };

  // Tallenna uusi merkintä tietokantaan
  const handleSaveMarker = async () => {
    if (newMarker && description) {
      try {
        const response = await fetch('http://localhost:5000/api/map-markers', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...newMarker, description }),
        });
        const savedMarker = await response.json();

        // Päivitä merkinnät ja tyhjennä lomake
        setMarkers((prevMarkers) => [...prevMarkers, savedMarker]);
        setNewMarker(null);
        setDescription('');
      } catch (err) {
        console.error('Virhe tallentaessa merkintää:', err);
      }
    }
  };

  // Peruuta uuden merkinnän lisääminen
  const handleCancelMarker = () => {
    setNewMarker(null);
    setDescription('');
  };

  // Poista olemassa oleva merkintä
  const handleDeleteMarker = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/map-markers/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Poista merkki tilasta
        setMarkers((prevMarkers) => prevMarkers.filter((marker) => marker.id !== id));
      }
    } catch (err) {
      console.error('Virhe poistettaessa merkintää:', err);
    }
  };

  return (
    <div id="map-section" className="flex" style={{ scrollMarginTop: '140px' }}>
      {/* Karttaosio */}
      <div className="map-container" style={{ zIndex: 10 }}>
        <MapContainer
          center={[60.192059, 24.945831]} // Esimerkiksi Helsinki
          zoom={13}
          style={{ height: '700px', width: '100%' }}
        >
          {/* Karttapohja OpenStreetMapista */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <MapEventHandler /> {/* Klikkauksen kuuntelija */}

          {/* Näytä tallennetut merkinnät kartalla */}
          {markers.map((marker) => (
            <Marker key={marker.id} position={[marker.latitude, marker.longitude]}>
              <Popup>
                <p>{marker.description}</p>
                <button onClick={() => handleDeleteMarker(marker.id)}>Poista</button>
              </Popup>
            </Marker>
          ))}

          {/* Uuden merkinnän popup ja lomake */}
          {newMarker && (
            <Marker position={[newMarker.lat, newMarker.lng]}>
              <Popup>
                <div>
                  <textarea
                    placeholder="Lisää kuvaus"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows="3"
                    style={{ width: '100%' }}
                  />
                  <button onClick={handleSaveMarker}>Tallenna</button>
                  <button
                    onClick={handleCancelMarker}
                    style={{ marginLeft: '10px', backgroundColor: '#f44336', color: 'white' }}
                  >
                    Peruuta
                  </button>
                </div>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>

      {/* Tallennettujen merkintöjen lista kartan vieressä */}
      <div className="marker-list bg-white shadow-md rounded-2xl p-4 ml-4 w-1/3">
        <h3 className="text-lg font-bold mb-4">Tallennetut merkinnät</h3>

        {markers.length > 0 ? (
          <ul className="space-y-2">
            {markers.map((marker) => (
              <li key={marker.id} className="p-2 border border-gray-200 rounded">
                <p>
                  <strong>Koordinaatit:</strong> {marker.latitude}, {marker.longitude}
                </p>
                <p>
                  <strong>Kuvaus:</strong> {marker.description || 'Ei kuvausta'}
                </p>
                <p>
                  <strong>Päivämäärä:</strong>{' '}
                  {marker.created_at
                    ? new Date(marker.created_at).toLocaleDateString('fi-FI')
                    : 'Ei päivämäärää'}
                </p>
                <button
                  onClick={() => handleDeleteMarker(marker.id)}
                  className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded mt-2"
                >
                  Poista
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>Ei tallennettuja merkintöjä.</p>
        )}
      </div>
    </div>
  );
};

export default MapComponent;
