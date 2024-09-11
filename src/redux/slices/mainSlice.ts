import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface InitialState {
  userIsLoggedIn: boolean;
  incomesArray:
    | {
        title: string;
        des: string;
        amount: string;
        type: string;
        date: string;
      }[]
    | [];
  expensesArray:
    | {
        title: string;
        des: string;
        amount: string;
        type: string;
        date: string;
      }[]
    | [];
}

const initialState: InitialState = {
  userIsLoggedIn: false,
  incomesArray: [],
  expensesArray: [],
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
    addIncomeItem: (
      state,
      action: PayloadAction<{
        title: string;
        des: string;
        amount: string;
        type: string;
        date: string;
      }>,
    ) => {
      const modifiedArray = [...state.incomesArray, action.payload];
      state.incomesArray = modifiedArray;
    },
    addExpensesItem: (
      state,
      action: PayloadAction<{
        title: string;
        des: string;
        amount: string;
        type: string;
        date: string;
      }>,
    ) => {
      const modifiedArray = [...state.expensesArray, action.payload];
      state.expensesArray = modifiedArray;
    },
  },
  extraReducers: builder => {},
});

export const {loginUser, logOutUser, addIncomeItem, addExpensesItem} =
  mainSlice.actions;
export default mainSlice.reducer;
