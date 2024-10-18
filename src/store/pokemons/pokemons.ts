import { SimplePokemon } from '@/interfaces/simple-pokemon'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon }
}
const initialState: PokemonsState = {
  favorites: {
    '1': {
      id: '1',
      name: 'bulbasaur',
    },
  },
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload
      const { id } = pokemon

      if (!!state.favorites[id]) {
        delete state.favorites[id]
      } else {
        state.favorites[id] = pokemon
      }
    },
  },
})

export const { toggleFavorite } = pokemonsSlice.actions

export default pokemonsSlice.reducer
