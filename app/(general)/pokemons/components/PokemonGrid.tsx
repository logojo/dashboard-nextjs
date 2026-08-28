import { SimplePokemon } from '../interfaces'
import { PokemonItem } from './PokemonItem'

interface Props {
    pokemons: SimplePokemon[]
}
export const PokemonGrid = ( { pokemons } : Props ) => {
    
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4  gap-3 w-full">
        {
            pokemons.map( pokemon => (
                <PokemonItem key={pokemon.id} pokemon={pokemon} />
            ))
        }
      </div>
  )
}
