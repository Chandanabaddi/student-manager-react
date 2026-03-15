import React, { useState, useEffect } from "react";

function LocalUserList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("users.json")
    .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Local Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email} - {user.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LocalUserList;