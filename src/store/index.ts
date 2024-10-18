import { configureStore } from '@reduxjs/toolkit'
import filterSlice from './filter/filterSlice'
import { useDispatch, useSelector } from 'react-redux'
import pokemonsSlice from './pokemons/pokemons'

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    pokemons: pokemonsSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
