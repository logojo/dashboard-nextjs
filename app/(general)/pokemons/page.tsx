import { PokemonsResponse, SimplePokemon } from "./interfaces";
import { PokemonGrid } from "./components/PokemonGrid";



const getPokemon = async ( limit: number = 20, offset: number = 0 ) : Promise<SimplePokemon[]> => {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  const data : PokemonsResponse = await fetch(url, {
    cache: 'force-cache'
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

const PokemonPage = async () => {
 const pokemons = await getPokemon(151, 0);

  return (
    <div className="flex flex-col justify-center items-center">
        <span className="text-3xl my-8">Listado de pokemons <small>estático</small></span>
        <PokemonGrid pokemons={pokemons} />
    </div>
  )
}

export default PokemonPage
