import { checkError, client } from './client';

export async function fetchDogs() {
  const resp = await fetch(`${process.env.REACT_APP_SUPABASE_URL}/rest/v1/dogs?`, {
    headers: {
      apikey: process.env.REACT_APP_SUPABASE_KEY,
      Authorization: `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`,
    },
  });
  const data = await resp.json();
  return data;
}

export async function fetchDogById(id) {
  const resp = await client.from('dogs').select('*').match({ id }).single();
  return checkError(resp);
}

export async function updateDog(id, name, image, age, breed, bio) {
  const resp = await client.from('dogs').update({ name, image, age, breed, bio }).eq('id', id);
  return checkError(resp);
}

export async function createDog(name, image, age, breed, bio) {
  const resp = await client.from('dogs').insert({
    name: name,
    image: image,
    age: age,
    breed: breed,
    bio: bio,
  });
  return checkError(resp);
}
