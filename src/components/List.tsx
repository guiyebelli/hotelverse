'use client'
import { SimplePokemon } from '@/interfaces/simple-pokemon'

import { useAppSelector } from '@/store'
import { Card } from './Card'

interface Props {
  data: SimplePokemon[]
}

export default function List({ data }: Props) {
  const filterValue: string = useAppSelector((state) => state.filter.value)
  const pokemonsFavorite = useAppSelector((state) => Object.values(state.pokemons.favorites))

  return (
    <>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {data.map((pokemon) =>
          (filterValue === 'favorite' && pokemonsFavorite.find((p) => p.id === pokemon.id)) || filterValue === 'all' ? (
            <Card pokemon={pokemon} key={pokemon.id}></Card>
          ) : (
            ''
          )
        )}
      </div>
    </>
  )
}
