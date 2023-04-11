import { createSlice } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    user: {
      email: "julia@gmail.com",
      firstname: "Julia",
      lastname: "Shuvo",
      mobile: "+1 234 56789",
      password: "pass123",
      profile_photo: "julia.jpg",
      user_id: 123,
      _id: "6430cbd6980499ce3cb2b7c0"
    }
    // user: {
    //     _id: "6430cbd6980499ce3cb2b7c0",
    //     user_id: 123,
    //     email: "user@mail.com",
    //     password: "pass123",
    //     firstname: "Julia",
    //     lastname: "Shuvo",
    //     profile_photo: "julia.jpg",
    //     mobile: "+1 234 56789"
    // }
  },
  reducers: {
    toggleLogin(state){
        state.isLoggedIn = !state.isLoggedIn
    },
    setLogin(state, action){
      state.isLoggedIn = action.payload
    },
    setUser(state, action){
      state.user = action.payload
    },
  }
})
export const isLoggedIn = (state) => state.login.isLoggedIn
export const currentUser = (state) => state.login.user
export const { toggleLogin, setLogin, setUser } = loginSlice.actions
export default loginSlice.reducer