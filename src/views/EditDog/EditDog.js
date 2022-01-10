import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DogForm from '../../components/DogForm/DogForm';
import { deleteDog, fetchDogById, updateDog } from '../../services/dog';

export default function EditDog() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');

  const params = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchDogById(params.id);
      setId(resp.id);
      setName(resp.name);
      setImage(resp.image);
      setAge(resp.age);
      setBreed(resp.breed);
      setBio(resp.bio);
    };
    fetchData();
  }, [params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateDog(params.id, id, name, image, age, breed, bio);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteDog(params.id);
  };
  return (
    <div>
      <h1>Edit Dog</h1>
      <DogForm
        id={id}
        setId={setId}
        name={name}
        setName={setName}
        image={image}
        setImage={setImage}
        age={age}
        setAge={setAge}
        breed={breed}
        setBreed={setBreed}
        bio={bio}
        setBio={setBio}
        handleSubmit={handleSubmit}
        handleDelete={handleDelete}
      />
    </div>
  );
}
