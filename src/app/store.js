import {combineReducers, configureStore} from '@reduxjs/toolkit';
import appReducer from "./app-reducer";


export const store = configureStore({
    reducer: appReducer
})
