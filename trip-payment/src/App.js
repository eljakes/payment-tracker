// src/App.js
import React, { useEffect, useState } from 'react';

import Graph from './Graph'; // Import the Graph component
import SponsorForm from './SponsorForm';
import SponsorList from './SponsorList';
import { firestore } from './firebaseConfig';

function App() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const fetchSponsors = async () => {
      try {
        const sponsorsCollection = await firestore.collection('sponsors').get();
        const sponsorsData = sponsorsCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setSponsors(sponsorsData);
      } catch (error) {
        console.error('Error fetching sponsors:', error);
      }
    };

    fetchSponsors();
  }, []);

  // Prepare data for the Line Graph
  const graphData = {
    labels: sponsors.map((sponsor) => sponsor.name),
    datasets: [
      {
        label: 'Contributions',
        data: sponsors.map((sponsor) => sponsor.contribution),
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h1>Trip Planner</h1>
      <SponsorList />
      <SponsorForm />
      <Graph data={graphData} /> {/* Use the Graph component */}
    </div>
  );
}


export default App;
