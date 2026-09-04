
import { getPokemons } from '../pokemons/actions/get-pokemons.action';
import { PokemonGrid } from '../pokemons/components/PokemonGrid'



const metadata = {
    title: 'Favorite Pokemons',
    description: 'List of favorite pokemons'
};

const FavoritePage = async () => {
    'use cache'

    const pokemons = await getPokemons(151, 0);
    return (
      <div className="flex flex-col justify-center items-center">
          <span className="text-3xl my-8">Listado de pokemons <small className="text-blue-400">Global State</small></span>
          <PokemonGrid pokemons={pokemons} />
      </div>
    )
  }


export default FavoritePage
