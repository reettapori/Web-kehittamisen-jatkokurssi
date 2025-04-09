import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const [markers, setMarkers] = useState([]);
  const [newMarker, setNewMarker] = useState(null);
  const [description, setDescription] = useState('');

  // Hae merkinnät tietokannasta
  useEffect(() => {
    const fetchMarkers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/map-markers');
        const data = await response.json();
        setMarkers(data);
      } catch (err) {
        console.error('Virhe haettaessa merkintöjä:', err);
      }
    };

    fetchMarkers();
  }, []);

  // Kartan tapahtumat
  const MapEventHandler = () => {
    useMapEvents({
      click: (event) => {
        const { lat, lng } = event.latlng;
        setNewMarker({ lat, lng, description: '' });
      },
    });
    return null;
  };

  // Tallenna uusi merkintä
  const handleSaveMarker = async () => {
    if (newMarker && description) {
      try {
        const response = await fetch('http://localhost:5000/api/map-markers', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...newMarker, description }),
        });
        const savedMarker = await response.json();
        setMarkers((prevMarkers) => [...prevMarkers, savedMarker]);
        setNewMarker(null);
        setDescription('');
      } catch (err) {
        console.error('Virhe tallentaessa merkintää:', err);
      }
    }
  };

  // Peruuta merkintä
  const handleCancelMarker = () => {
    setNewMarker(null);
    setDescription('');
  };

  // Poista merkintä
  const handleDeleteMarker = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/map-markers/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setMarkers((prevMarkers) => prevMarkers.filter((marker) => marker.id !== id));
      }
    } catch (err) {
      console.error('Virhe poistettaessa merkintää:', err);
    }
  };

  return (
    <div className="flex">
      {/* Kartta */}
      <div className="map-container">
        <MapContainer
          center={[60.192059, 24.945831]}
          zoom={13}
          style={{ height: '500px', width: '100%' }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapEventHandler />
          {markers.map((marker) => (
            <Marker key={marker.id} position={[marker.latitude, marker.longitude]}>
              <Popup>
                <p>{marker.description}</p>
                <button onClick={() => handleDeleteMarker(marker.id)}>Poista</button>
              </Popup>
            </Marker>
          ))}
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

      {/* Merkintöjen lista */}
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
