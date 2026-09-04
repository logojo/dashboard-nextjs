import { create } from "zustand/react";
import { devtools } from "zustand/middleware";

import { Pokemon } from "../interfaces";

type Store = {
    pokemons: Pokemon[];
    setPokemons: (pokemons: Pokemon[]) => void;
}

export const usePokemonsStore = create<Store>()(
    devtools(
        (set) => ({
            pokemons: [],
            setPokemons: (pokemons: Pokemon[]) => set({ pokemons }),
        }),
        {
            name: "PokemonsStore",
        }
    )
)