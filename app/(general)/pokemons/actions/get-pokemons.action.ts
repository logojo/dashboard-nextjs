import { PokemonsResponse, SimplePokemon } from "../interfaces";

export const getPokemons = async ( limit: number = 20, offset: number = 0 ) : Promise<SimplePokemon[]> => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  const data : PokemonsResponse = await fetch(url, {
    //cache: 'force-cache' // se puede usar para cachear la petición, pero si en el componente se use 'use cache', se omite
  })
  .then((res) => res.json());

  const pokemons: SimplePokemon[] = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }));

  //!manejo de errores
  //throw new Error('Forzando error');

  return  pokemons;
}