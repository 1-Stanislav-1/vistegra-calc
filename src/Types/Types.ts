import { rootReducer, setStore } from "../Redux/store";
import { IData } from "./Data";
import { IConfig } from "./Config";

export interface IDeafaultDBSlice {
	data: IData | null,
	config: IConfig | null
}

export interface IDatabase {
	data: IData,
	config: IConfig
}

export interface IInput {
	list: string,
	pipe: string,
	width: string,
	length: string,
	frame: string
}

export type TRootReducer = ReturnType<typeof rootReducer>;

type TStore = ReturnType<typeof setStore>;

export type TDispatch = TStore["dispatch"];