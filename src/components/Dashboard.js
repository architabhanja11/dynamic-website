 // src/components/Dashboard.js
import React, { useState } from 'react';

const Dashboard = ({ onUpdate }) => {
  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [timer, setTimer] = useState(10);
  const [link, setLink] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ visible, description, timer, link });
  };

  return (
    <div className="dashboard" style={{ padding: '10px', background: '#e0e0e0' }}>
      <h2>Banner Controls</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Show Banner:
          <input type="checkbox" checked={visible} onChange={() => setVisible(!visible)} />
        </label>
        <br />
        <label>
          Banner Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Banner Timer (seconds):
          <input type="number" value={timer} onChange={(e) => setTimer(Number(e.target.value))} />
        </label>
        <br />
        <label>
          Banner Link:
          <input type="url" value={link} onChange={(e) => setLink(e.target.value)} />
        </label>
        <br />
        <button type="submit">Update Banner</button>
      </form>
    </div>
  );
};

export default Dashboard;

