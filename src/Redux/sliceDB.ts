import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDeafaultDBSlice, IDatabase } from "../Types/Types";

const initialState: IDeafaultDBSlice = {
	data: null,
	config: null
}

export const sliceDB = createSlice({
	name: "sliceDatabase",
	initialState,
	reducers: {
		setDatabase(state, action: PayloadAction<IDatabase>) {
			state.data = action.payload.data;
			state.config = action.payload.config
		}
	}
})

export default sliceDB.reducer;