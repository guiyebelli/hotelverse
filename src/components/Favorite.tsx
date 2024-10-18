import { useAppSelector } from '@/store'
import { IoHeart, IoHeartOutline } from 'react-icons/io5'

interface Props {
  id: string
}

export const Favorite = ({ id }: Props) => {
  const isFavorite = useAppSelector((state) => !!state.pokemons.favorites[id])

  return (
    <>
      <div className="text-red-600">{isFavorite ? <IoHeart /> : <IoHeartOutline />}</div>
    </>
  )
}
