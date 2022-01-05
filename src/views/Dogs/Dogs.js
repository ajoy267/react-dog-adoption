import React from 'react';
import { useState, useEffect } from 'react';
import { fetchDogs } from '../../services/dog';
import DogList from '../../components/DogList/DogList';
import './Dogs.css';

export default function Dogs() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer;
    const getDogs = async () => {
      const resp = await fetchDogs();
      setDogs(resp);
      timer = setTimeout(() => {
        setLoading(false);
      }, 1500);
    };
    if (loading) {
      getDogs();
    }
    return () => {
      clearInterval(timer);
    };
  }, [loading]);
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
