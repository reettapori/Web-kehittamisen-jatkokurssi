import { useState } from "react";
import axios from "axios";

export default function DeleteUser({ fetchUsers }) {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");

  const handleDelete = async (event) => {
    event.preventDefault();
    setMessage("");

    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      setMessage("Käyttäjä id:llä " + id + " poistettu");
      setId("");
      fetchUsers();  // Päivitetään käyttäjälista heti
    } catch (error) {
      setMessage("Error: " + (error.response?.data?.error || error.message));
    }
  };

  return (
    <div className="container mt-4">
      <h2>Poista käyttäjä</h2>
      <form onSubmit={handleDelete} className="form-group">
        <input
          type="text"
          placeholder="User ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="form-control mb-2"
          required
        />
        <button type="submit" className="btn btn-danger">Poista</button>
      </form>
      {message && <p className="mt-3">{message}</p>}
    </div>
  );
}
