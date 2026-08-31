import { cacheLife } from "next/cache";
import { PokemonGrid } from "./components/PokemonGrid";
import { getPokemons } from "./actions/get-pokemons.action";


const PokemonPage = async () => {
'use cache'

 const pokemons = await getPokemons(151, 0);

  cacheLife('hours'); //permite indicar por cuantro tiempo esta peticion estara fresca
  //cacheTag() // permite invalidar ese caché manualmente cuando sabes que los datos cambiaron

  return (
    <div className="flex flex-col justify-center items-center">
        <span className="text-3xl my-8">Listado de pokemons <small>estático</small></span>
        <PokemonGrid pokemons={pokemons} />
    </div>
  )
}

export default PokemonPage
