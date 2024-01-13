// src/App.js
import React from 'react';
import SponsorForm from './SponsorForm';
import SponsorList from './SponsorList';

function App() {
  return (
    <div>
      <h1>Trip Planner</h1>
      <SponsorList />
      <SponsorForm />
    </div>
  );
}

export default App;
