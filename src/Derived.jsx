import React, { useState } from 'react';

const Derived = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState('');

  const handleAddUsers = () => {
    if (!user.trim()) return;
    setUsers([...users, user]);
    setUser('');
  };

  // Derived State
  
  const total = users.length;
  const last = users.length > 0 ? users[users.length - 1] : 'None';
  const unique = new Set(users).size;

  return (
    <div>
      <h1>Derived State</h1>

      <h2>Total Users: {total}</h2>
      <h2>Last User: {last}</h2>
      <h2>Unique Total Users: {unique}</h2>

      <input
        type="text"
        placeholder="Enter name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />

      <button type="button" onClick={handleAddUsers}>
        Click Me!!
      </button>

      {users.map((item, index) => (
        <h4 key={index}>{item}</h4>
      ))}
    </div>
  );
};

export default Derived;
