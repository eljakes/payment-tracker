import React, { useEffect, useState } from 'react';

import { firestore } from './firebaseConfig';
import styled from 'styled-components';

const SponsorListContainer = styled.div`
  margin-top: 20px;
`;

const SponsorItem = styled.li`
  margin-bottom: 10px;
  color: #333;
`;

function SponsorList() {
  const [sponsors, setSponsors] = useState([]);

  useEffect(() => {
    const fetchSponsors = async () => {
      const sponsorsCollection = await firestore.collection('sponsors').get();
      const sponsorsData = sponsorsCollection.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSponsors(sponsorsData);
    };

    fetchSponsors();
  }, []);

  return (
    <SponsorListContainer>
      <h2>Sponsors</h2>
      <ul>
        {sponsors.map((sponsor) => (
          <SponsorItem key={sponsor.id}>
            {sponsor.name} - ${sponsor.contribution}
          </SponsorItem>
        ))}
      </ul>
    </SponsorListContainer>
  );
}

export default SponsorList;
