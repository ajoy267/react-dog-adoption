import React from 'react';

export default function DogDetails({ dog }) {
  return (
    <div>
      <h2>{dog.name}</h2>
      <img src={dog.image}></img>
      <p>
        {dog.name} is a(n) {dog.age} year old {dog.breed}
      </p>
      <p>{dog.bio}</p>
    </div>
  );
}
