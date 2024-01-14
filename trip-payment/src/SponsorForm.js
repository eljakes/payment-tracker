// src/SponsorForm.js
import React, { useState } from 'react';

import { firestore } from './firebaseConfig';
import styled from 'styled-components';

const FormContainer = styled.div`
  margin-top: 20px;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin-top: 20px;
`;

const StyledLabel = styled.label`
  margin-bottom: 5px;
  color: #333;
`;

const StyledInput = styled.input`
  padding: 8px;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

function SponsorForm() {
  const [name, setName] = useState('');
  const [contribution, setContribution] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (name && contribution) {
      try {
        // Use firestore.collection() to interact with the Firestore collection
        await firestore.collection('sponsors').add({
          name,
          contribution: parseInt(contribution),
        });

        setName('');
        setContribution('');
      } catch (error) {
        console.error('Error adding sponsor:', error);
      }
    }
  };

  return (
    <FormContainer>
      <h2>Add Sponsor</h2>
      <StyledForm onSubmit={handleFormSubmit}>
        <StyledLabel>Name:</StyledLabel>
        <StyledInput type="text" value={name} onChange={(e) => setName(e.target.value)} />

        <StyledLabel>Contribution:</StyledLabel>
        <StyledInput
          type="number"
          value={contribution}
          onChange={(e) => setContribution(e.target.value)}
        />

        <StyledButton type="submit">Add Sponsor Contribution</StyledButton>
      </StyledForm>
    </FormContainer>
  );
}

export default SponsorForm;
