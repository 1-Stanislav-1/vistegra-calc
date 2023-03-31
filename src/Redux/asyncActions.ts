import { TDispatch, IDatabase } from "../Types/Types";
import {sliceDB} from "./sliceDB";

export const dbRequest = () => async (dispatch:TDispatch) => {
	const {setDatabase} = sliceDB.actions;
	const response = await fetch("http://localhost:3001/getDB");
	const result:IDatabase = await response.json();
	dispatch(setDatabase(result));
}