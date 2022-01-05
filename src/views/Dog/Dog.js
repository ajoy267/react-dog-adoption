import React from 'react';
import { fetchDogById } from '../../services/dog';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import DogDetails from '../../components/DogDetails/DogDetails';

export default function Dog() {
  const [dog, setDog] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchDogById(params.id);
      setDog(data);
    };
    fetchData();
  }, [params.id]);
  return (
    <div>
      <DogDetails dog={dog} />
    </div>
  );
}
