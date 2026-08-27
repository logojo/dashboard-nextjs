import Image from "next/image";
import { Pokemon, PokemonsResponse } from "../interfaces";



const getPokemon = async ( limit: number = 20, offset: number = 0 ) : Promise<Pokemon[]> => {
   const data : PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
   .then((res) => res.json());
     
   const pokemons: Pokemon[] = data.results.map((pokemon) => ({
       id: pokemon.url.split('/').at(-2)!,
       name: pokemon.name,
    }));

   return  pokemons;
}

const PokemonPage = async () => {
 const pokemons = await getPokemon(151, 0);

  return (
    <div className="flexjustify-center items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {
            pokemons.map( pokemon => (
                <div
                    key={pokemon.id}
                    className="relative w-25 h-25"
                >
                    <Image
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                        fill
                        className="object-contain"
                        alt={ pokemon.name }
                    />
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default PokemonPage
