import React, { useState } from 'react';
import DogForm from '../../components/DogForm/DogForm';
import { createDog } from '../../services/dog';

export default function Admin() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDog(name, image, age, breed, bio);
  };

  return (
    <div>
      <DogForm
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
      />
    </div>
  );
}
