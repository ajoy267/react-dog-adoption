import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

export default function DogList({ dogs }) {
  return (
    <div>
      {dogs.map((item) => (
        <div key={item.id}>
          <h1>Dogs</h1>
          <h2>Meet {item.name}</h2>
          <Link key={item.id} to={`/dogs/${item.id}`}>
            <img src={item.image}></img>
          </Link>
          <p>
            {item.name} is a(n) {item.age} year old {item.breed}
          </p>
        </div>
      ))}
    </div>
  );
}
