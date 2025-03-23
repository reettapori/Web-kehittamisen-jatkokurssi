import { useState, useEffect } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';  // Lisää tämä rivi
import CreateUser from "./components/CreateUser.jsx";
import ReadUsers from "./components/ReadUsers.jsx";
import UpdateUser from "./components/UpdateUser.jsx";
import DeleteUser from "./components/DeleteUser.jsx";

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <CreateUser fetchUsers={fetchUsers} />
      <ReadUsers users={users} />
      <UpdateUser fetchUsers={fetchUsers} />
      <DeleteUser fetchUsers={fetchUsers} />
    </div>
  );
}

export default App;
