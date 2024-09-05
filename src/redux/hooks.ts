import {useDispatch, useSelector} from 'react-redux';
import type {TypedUseSelectorHook} from 'react-redux';
import type {AppDispatch, RootState} from './store';

//Funciona para modificar el estado
export const useAppDispatch: () => AppDispatch = useDispatch;

//Funciona para acceder al estado
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
