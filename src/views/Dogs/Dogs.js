import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogs } from '../../services/dog';
import DogList from '../../components/DogList/DogList';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    const getDogs = async () => {
      const resp = await fetchDogs();
      setDogs(resp);
    };
    getDogs();
  }, []);
  return (
    <div>
      <h1>Dogs</h1>
      <DogList dogs={dogs} />
    </div>
  );
}
