export interface IData {
	list: TList[],
	pipe: TPipe[],
	fix: TFix[]
}

export type TList = {
	name: string,
	material: string,
	unit: string,
	width: number,
	price: number
}

export type TPipe = {
	name: string,
	unit: string,
	width: number,
	price: number
}

export type TFix = {
	name: string,
	unit: string,
	price: number
}