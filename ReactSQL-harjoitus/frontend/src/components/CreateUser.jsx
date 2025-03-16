import { useState } from "react";
import axios from "axios";

export default function CreateUser({ fetchUsers }) {
  const [nimimerkki, setNimimerkki] = useState("");
  const [email, setEmail] = useState("");
  const [ika, setIka] = useState("");
  const [kaupunki, setKaupunki] = useState("");
  const [paiva, setPaiva] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      const response = await axios.post("http://localhost:3000/users", {
        nimimerkki,
        email,
        ika,
        kaupunki,
        paiva,
      });

      setMessage("Nimimerkki lisättiin: " + response.data.nimimerkki);
      setNimimerkki("");
      setEmail("");
      setIka("");
      setKaupunki("");
      setPaiva("");

      fetchUsers();  // Päivitetään käyttäjälista
    } catch (error) {
      setMessage("Error: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Luo käyttäjä</h2>
      <form onSubmit={handleSubmit} className="form-group">
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
          placeholder="Email"
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
          placeholder="Päivämäärä"
          value={paiva}
          onChange={(e) => setPaiva(e.target.value)}
          className="form-control mb-2"
          required
        />
        <button type="submit" className="btn btn-primary">Lähetä</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}
