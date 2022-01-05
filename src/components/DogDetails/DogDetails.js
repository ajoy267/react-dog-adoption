import React from 'react';

export default function DogDetails({ dog }) {
  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.image}></img>
      <p>
        {dog.name} is a(n) {dog.age} year old {dog.breed}
      </p>
      <p>{dog.bio}</p>
    </div>
  );
}
