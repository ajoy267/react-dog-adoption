import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogs } from '../../services/dog';
import DogList from '../../components/DogList/DogList';
import './Dogs.css';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getDogs = async () => {
      const resp = await fetchDogs();
      setDogs(resp);
      setLoading(false);
    };
    getDogs();
  });
  return (
    <>
      {loading && <div className="loader"></div>}
      {!loading && (
        <div>
          <DogList dogs={dogs} />
        </div>
      )}
    </>
  );
}
