import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DogForm from '../../components/DogForm/DogForm';
import { createDog, deleteDog } from '../../services/dog';

export default function Admin() {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDog(name, image, age, breed, bio);
    try {
      await createDog(name, image, age, breed, bio);
      alert('You added a new dog!');
    } catch (error) {
      alert('Database request has failed, please try again.');
    }
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await deleteDog();
      alert(`You've deleted a dog.`);
      history.push('/');
    } catch {
      alert(`Database request has failed, please try again.`);
    }
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
        handleDelete={handleDelete}
      />
    </div>
  );
}
