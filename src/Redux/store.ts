import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliceDB from "./sliceDB";
import sliceInput from "./sliceInput";

export const rootReducer = combineReducers({
	sliceDB,
	sliceInput
});

export const setStore = () => configureStore({ reducer: rootReducer });