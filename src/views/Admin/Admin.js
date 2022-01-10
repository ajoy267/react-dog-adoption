import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import DogForm from '../../components/DogForm/DogForm';
import { createDog, deleteDog } from '../../services/dog';

export default function Admin() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [age, setAge] = useState('');
  const [breed, setBreed] = useState('');
  const [bio, setBio] = useState('');
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createDog(id, name, image, age, breed, bio);
    if ((id, name, image, age, breed, bio)) {
      alert('You added a new dog!');
    } else {
      alert('Database request has failed, please try again.');
    }
  };
  const handleDelete = async (e) => {
    e.preventDefault();
    await deleteDog(id);
    if (id) {
      alert(`You've deleted a dog.`);
      history.push('/');
    } else {
      alert(`Database request has failed, please try again.`);
    }
  };

  return (
    <div>
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
