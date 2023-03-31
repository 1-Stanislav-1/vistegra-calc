import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInput } from "../Types/Types";

const initialState: IInput = {
	list: "0",
	pipe: "0",
	width: "5",
	length: "5",
	frame: "0"
}

export const sliceInput = createSlice({
	name: "sliceInput",
	initialState,
	reducers: {
		setList(state, action: PayloadAction<string>) {
			state.list = action.payload;
		},
		setPipe(state, action: PayloadAction<string>) {
			state.pipe = action.payload;
		},
		setWidth(state, action: PayloadAction<string>) {
			state.width = action.payload;
		},
		setLength(state, action: PayloadAction<string>) {
			state.length = action.payload;
		},
		setFrame(state, action: PayloadAction<string>) {
			state.frame = action.payload;
		},
		setSlice(state, action: PayloadAction<string[]>) {
			state.list = action.payload[0];
			state.pipe = action.payload[1];
			state.width = action.payload[2];
			state.length = action.payload[3];
			state.frame = action.payload[4];
		}
	}
})

export default sliceInput.reducer;