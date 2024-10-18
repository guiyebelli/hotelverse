'use client'

import { useAppSelector } from '@/store'
import { setFilter } from '@/store/filter/filterSlice'
import { useDispatch } from 'react-redux'

export const Select = () => {
  const filters = ['all', 'favorite']
  const selectedFilter = useAppSelector((state) => state.filter.value)
  const dispatch = useDispatch()
  return (
    <form>
      <select name="category" defaultValue={selectedFilter} onChange={(e) => dispatch(setFilter(e.target.value))}>
        {filters.map((cat) => (
          <option key={cat} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>
    </form>
  )
}
