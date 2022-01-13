import { checkError, client } from './client';

export async function fetchDogs() {
  const resp = await client.from('dogs').select('*');
  return checkError(resp);
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

export async function deleteDog(id) {
  const resp = await client.from('dogs').delete().match({ id: id });
  return checkError(resp);
}
