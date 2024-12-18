import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Slices/counterSlice'
import userReducer from './Slices/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer
  },
})