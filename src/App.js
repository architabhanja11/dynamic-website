import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';

const App = () => {
  const [bannerData, setBannerData] = useState({ visible: false, description: '', timer: 10, link: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/banner').then((response) => {
      setBannerData(response.data);
    });
  }, []);

  const updateBanner = (newBannerData) => {
    axios.post('http://localhost:5000/api/banner', newBannerData).then(() => {
      setBannerData(newBannerData);
    });
  };

  return (
    <div className="app" style={{ padding: '20px' }}>
      <Banner {...bannerData} />
      <Dashboard onUpdate={updateBanner} />
    </div>
  );
};

export default App;
