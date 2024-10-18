import { Pokemon } from '@/interfaces/pokemons'
import { PokemonsReponse } from '@/interfaces/pokemons-response'
import { SimplePokemon } from '@/interfaces/simple-pokemon'

export async function getAllPokemons(limit = 151, offset = 0): Promise<SimplePokemon[]> {
  const data: PokemonsReponse = await fetch(`${process.env.API_URL}?limit=${limit}&offset=${offset}`)
    .then((r) => r.json())
    .catch((e) => {
      throw new Error('Error', e)
    })
  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name,
  }))
  return pokemons
}

export async function getLimitPokemons(limit = 20, offset = 0): Promise<PokemonsReponse> {
  const data: PokemonsReponse = await fetch(`${process.env.API_URL}?limit=${limit}&offset=${offset}`)
    .then((r) => r.json())
    .catch((e) => {
      throw new Error('Error', e)
    })
  return data
}

export async function getPokemon(name: string): Promise<Pokemon> {
  const data: Pokemon = await fetch(`${process.env.API_URL}/${name}`)
    .then((r) => r.json())
    .catch((e) => {
      throw new Error('Error', e)
    })
  return data
}
