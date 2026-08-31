import Link from 'next/link'
import Image from 'next/image'
import { IoHeartOutline } from "react-icons/io5"
import { SimplePokemon } from '../interfaces'

interface Props {
    pokemon: SimplePokemon
}

export const PokemonItem = ({ pokemon }: Props) => {
  return (
     <div className="mx-auto right-0 mt-2 w-60">
        <div className="bg-white rounded overflow-hidden shadow-lg">
            <div className=" text-center p-6 bg-gray-800 border-b">
                 <div className="relative w-25 h-25 mx-auto">
                     <Image
                         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                         fill
                         className="object-contain"
                         alt={ pokemon.name }
                         priority={ false } //carga las imagenes bajo demanda
                     />
                 </div>
                <p className="pt-2 text-lg font-semibold text-gray-50 capitalize">{ pokemon.name }</p>
                <div className="mt-5">
                    <Link href={`/pokemons/${pokemon.name}`} 
                          className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
                        Más información
                    </Link>
                </div>
            </div>
            <div className=''>
                <Link href="" 
                      className="flex items-center px-4 py-2 hover:bg-gray-100">
                        <div className="text-red-600">
                            <IoHeartOutline size={25} />
                        </div>
                        <div className="pl-3">
                        <p className="text-sm font-medium text-gray-800 leading-none">
                            Not Favorite
                        </p>
                        <p className="text-xs text-gray-500">View your campaigns</p>
                        </div>
                </Link>
            </div>

        </div>
    </div>
  )
}
