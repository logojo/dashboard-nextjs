import { cacheLife, cacheTag, revalidateTag } from "next/cache";
import { PokemonGrid } from "./components/PokemonGrid";
import { getPokemons } from "./actions/get-pokemons.action";


const PokemonPage = async () => {
'use cache'

 const pokemons = await getPokemons(151, 0);

  //cacheLife('hours'); //permite indicar por cuanto tiempo esta peticion estara fresca
  cacheTag('pokemons') // permite invalidar ese caché manualmente cuando sabes que los datos cambiaron en base a un nombre datpo
  
  //* tres formas de revalidar el caché manualmente de pendiendo de la caso
  //revalidateTag('pokemons', 'max') //* Se utiliza cuando quieres invalidar/revalidar datos que comparten un tag
  //updateTag('bookings-data'); //* Cuando acabas de modificar los datos. y al leerlos, quieres obtener inmediatamente la versión nueva.
  //revalidatePath('/dashboard/bookings'); //* Cuando la información asociada a esta ruta necesita invalidarse/revalidarse."

  return (
    <div className="flex flex-col justify-center items-center">
        <span className="text-3xl my-8">Listado de pokemons <small className="text-blue-400">estático</small></span>
        <PokemonGrid pokemons={pokemons} />
    </div>
  )
}

export default PokemonPage
