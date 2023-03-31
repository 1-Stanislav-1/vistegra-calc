export interface IConfig {
	size: TSizeConf[],
	frame: TFrameConf[],
	material: TMaterialConf[],
	fix: TFixConf[]
}

export type TSizeConf = {
	key: string,
	name: string,
	min: number,
	max: number,
	step: number
}

export type TFrameConf = {
	key: string,
	name: string,
	step: number
}

export type TMaterialConf = {
	key: string,
	name: string
}

export type TFixConf = {
	key: string,
	name: string,
	value: number
}