import React from 'react';
import { fetchDogById } from '../../services/dog';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import DogDetails from '../../components/DogDetails/DogDetails';
import './Dog.css';

export default function Dog() {
  const [dog, setDog] = useState([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    let timer;
    const fetchData = async () => {
      const data = await fetchDogById(params.id);
      setDog(data);
      timer = setTimeout(() => {
        setLoading(false);
      }, 750);
    };
    if (loading) {
      fetchData();
    }
    return () => {
      clearInterval(timer);
    };
  }, [params.id, loading]);
  return (
    <>
      {loading && <div className="loader"></div>}
      {!loading && (
        <div>
          <DogDetails dog={dog} />
        </div>
      )}
    </>
  );
}
