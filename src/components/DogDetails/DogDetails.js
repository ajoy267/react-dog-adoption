import React from 'react';
import { Link } from 'react-router-dom';

export default function DogDetails({ dog }) {
  return (
    <div>
      <div>
        <h2>{dog.name}</h2>
        <img src={dog.image}></img>
        <p>
          {dog.name} is a(n) {dog.age} year old {dog.breed}
        </p>
        <p>{dog.bio}</p>
      </div>
      <Link to={`/dogs/${dog.id}/edit`}>Edit</Link>
    </div>
  );
}
