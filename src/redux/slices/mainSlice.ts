import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

interface InitialState {
  userIsLoggedIn: boolean;
}

const initialState: InitialState = {
  userIsLoggedIn: false,
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    loginUser: state => {
      state.userIsLoggedIn = true;
    },
    logOutUser: state => {
      state.userIsLoggedIn = false;
    },
  },
  extraReducers: builder => {},
});

export const {loginUser, logOutUser} = mainSlice.actions;
export default mainSlice.reducer;
