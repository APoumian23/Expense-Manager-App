import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import mainSlice from './slices/mainSlice';

const rootReducer = combineReducers({
  main: mainSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
