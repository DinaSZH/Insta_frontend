import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import jwt_decode from "jwt-decode";


import { END_POINT } from '@/config/end-point'
const token = localStorage.getItem("token")

let initialState=  {
  isAuth:false,
  currentUser: null,
  tokenExt: 0
}

if(token) {
  let decodedToken = jwt_decode(token)
  if(decodedToken.exp * 1000 > Date.now()) {
    initialState = {
      isAuth: true,
      currentUser: {
        id: decodedToken.id,
          email: decodedToken.email,
          username: decodedToken.username,
          password: decodedToken.password
      },
      tokenExt: decodedToken.exp
    }
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  } else{
    localStorage.removeItem("token")
  }
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorize: (state, action) => {
      localStorage.setItem("token", action.payload.token)
      axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`
      const decoded = jwt_decode(action.payload.token);
        state.currentUser = {
          id: decoded.id,
          email: decoded.email,
          username: decoded.username,
          password: decoded.password
        }
      state.isAuth = true
      state.tokenExt = decoded.exp
    },
    logOut: (state) => {
      state.isAuth = false
      state.currentUser = null;
      state.exp = 0;
      localStorage.removeItem("token")
    },
  },
})

// Action creators are generated for each case reducer function
export const { authorize, logOut} = authSlice.actions

export const signup = (email, username, password) => (dispatch) => {
      axios.post(`${END_POINT}/api/auth/signup` , {
        email, username, password
      }).then(res => {
        dispatch(authorize(res.data))
      })
}

export default authSlice.reducer