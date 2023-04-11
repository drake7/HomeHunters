import { configureStore } from '@reduxjs/toolkit'
import loginReducer from './login-store'

export const store = configureStore({
  reducer: {
    login: loginReducer,
  }
})