import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { END_POINT } from '@/config/end-point';

const token = localStorage.getItem("token");

let initialState = {
  isAuth: false,
  currentUser: null,
  tokenExt: 0,
  error: null,
  registrationSuccess: false,
};

if (token) {
  let decodedToken;
  try {
    decodedToken = jwt_decode(token);
  } catch (error) {
    console.error("Error decoding token:", error);
    localStorage.removeItem("token");
  }

  if (decodedToken && decodedToken.exp * 1000 > Date.now()) {
    initialState = {
      isAuth: true,
      currentUser: {
        id: decodedToken.id,
        email: decodedToken.email,
        username: decodedToken.username,
        password: decodedToken.password
      },
      tokenExt: decodedToken.exp
    };
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    localStorage.removeItem("token");
  }
}


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authorize: (state, action) => {
      localStorage.setItem("token", action.payload.token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${action.payload.token}`;
      const decoded = jwt_decode(action.payload.token);
      state.currentUser = {
        id: decoded.id,
        email: decoded.email,
        username: decoded.username,
        password: decoded.password,
        password2: decoded.password2,
        bio: decoded.bio,
        user_image: decoded.user_image
      };
      state.isAuth = true;
      state.tokenExt = decoded.exp;
    },
    logOut: (state) => {
      state.isAuth = false;
      state.currentUser = null;
      state.tokenExt = 0;
      localStorage.removeItem("token");
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setRegistrationSuccess: (state) => {
      state.registrationSuccess = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { authorize, logOut, setError } = authSlice.actions;

export const signup = (data, router) => (dispatch) => {
  const fd = new FormData();
  fd.append("email", data.email);
  fd.append("username", data.username);
  fd.append("password", data.password);
  fd.append("password2", data.password2);
  fd.append("bio", data.bio);
  fd.append("user_image", data.user_image);

  axios.post(`${END_POINT}/api/auth/signup`, fd).then(res => {
    dispatch(setRegistrationSuccess());
    router.push("/login");
  }).catch(e => {
    console.log(e);
    if (e.response && e.response.data) {
      dispatch(setError(e.response.data));
    }
  });
}

export const signin = (data, router) => (dispatch) => {
  axios.post(`${END_POINT}/api/auth/login`, data).then(res => {
    dispatch(authorize(res.data));
    router.push("/profile");
  }).catch(e => {
    console.log(e);
    if (e.response && e.response.data) {
      dispatch(setError(e.response.data));
    }
  });
}

export default authSlice.reducer;
