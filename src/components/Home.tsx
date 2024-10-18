import { getAllPokemons } from '@/utils/fetch'
import { Select } from './Select'
import { SimplePokemon } from '@/interfaces/simple-pokemon'
// Client Components:
import dynamic from 'next/dynamic'
const List = dynamic(() => import('./List'))

export default async function Home() {
  const allData: SimplePokemon[] = await getAllPokemons()

  return (
    <div className="flex flex-col m-5 p-5">
      <span className="text-5xl pb-5">Lista de Pokemons</span>
      <Select></Select>
      <List data={allData}></List>
    </div>
  )
}
