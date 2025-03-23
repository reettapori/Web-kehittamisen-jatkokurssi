export default function ReadUsers({ users }) {
    return (
      <div className="container mt-4">
        <h2>Käyttäjät</h2>
        <ul className="list-group">
          {users.map((user) => (
            <li key={user.id} className="list-group-item">
              <strong>ID:</strong> {user.id}, <strong>Nimimerkki:</strong> {user.nimimerkki}, <strong>Sähköposti:</strong> {user.email}, <strong>Ikä:</strong> {user.ika}, <strong>Kaupunki:</strong> {user.kaupunki}, <strong>Päivämäärä:</strong> {user.paiva}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  