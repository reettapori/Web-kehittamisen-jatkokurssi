import { useState } from "react";
import axios from "axios";

export default function UpdateUser({ fetchUsers }) {
  const [id, setId] = useState("");
  const [nimimerkki, setNimimerkki] = useState("");
  const [email, setEmail] = useState("");
  const [ika, setIka] = useState("");
  const [kaupunki, setKaupunki] = useState("");
  const [paiva, setPaiva] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdate = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      const response = await axios.put(`http://localhost:3000/users/${id}`, {
        nimimerkki,
        email,
        ika,
        kaupunki,
        paiva,
      });

      setMessage("Käyttäjätiedot päivitetty onnistuneesti käyttäjä-id:lle " + response.data.user.id);
      setId("");
      setNimimerkki("");
      setEmail("");
      setIka("");
      setKaupunki("");
      setPaiva("");

      fetchUsers();  // Päivitetään käyttäjälista heti päivityksen jälkeen!
    } catch (error) {
      setMessage("Error: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="container mt-4">
      <h2>Päivitä käyttäjätietoja</h2>
      <form onSubmit={handleUpdate} className="form-group">
        <input
          type="text"
          placeholder="User ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          placeholder="Nimimerkki"
          value={nimimerkki}
          onChange={(e) => setNimimerkki(e.target.value)}
          className="form-control mb-2"
          required
        />
        <input
          type="email"
          placeholder="Sähköposti"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control mb-2"
          required
        />
        <input
          type="number"
          placeholder="Ikä"
          value={ika}
          onChange={(e) => setIka(e.target.value)}
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          placeholder="Kaupunki"
          value={kaupunki}
          onChange={(e) => setKaupunki(e.target.value)}
          className="form-control mb-2"
          required
        />
        <input
          type="date"
          value={paiva}
          onChange={(e) => setPaiva(e.target.value)}
          className="form-control mb-2"
          required
        />
        <button type="submit" className="btn btn-warning">Päivitä tiedot</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}
