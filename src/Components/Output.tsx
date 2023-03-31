import React from 'react';
import { Box, Table, TableHead, TableBody, TableRow, TableCell, Typography } from '@mui/material';
import { useTypedSelector } from "../Hooks/reduxHooks";

export default function Output() {

	const [data, config, listN, pipeN, totalWidth, totalLength, frame] = useTypedSelector(state => [
		state.sliceDB.data,
		state.sliceDB.config,
		state.sliceInput.list,
		state.sliceInput.pipe,
		state.sliceInput.width,
		state.sliceInput.length,
		state.sliceInput.frame
	]);

	function countLists(): number {
		const listArea = data?.list[Number(listN)].width;
		const totalArea = Number(totalWidth) * Number(totalLength);
		return Math.ceil(totalArea / listArea!);
	}

	function countListsPrice(): number {
		const listArea = data?.list[Number(listN)].width;
		const totalArea = Number(totalWidth) * Number(totalLength);
		const price = data?.list[Number(listN)].price!;
		return Math.ceil(totalArea / listArea!) * price;
	}

	function countPipes(): number {
		const outerLength = Number(totalWidth) * 2 + Number(totalLength) * 2;
		const step = config?.frame[Number(frame)].step! + data?.pipe[Number(pipeN)].width! / 1000;
		const pipesNumberWidthSide = Number(totalLength) / step - 1;
		const pipesNumberLengthSide = Number(totalWidth) / step - 1;
		const innerLength = pipesNumberWidthSide * Number(totalWidth) + pipesNumberLengthSide * Number(totalLength);
		return Math.ceil(outerLength + innerLength);
	}

	function countPipesPrice(): number {
		const outerLength = Number(totalWidth) * 2 + Number(totalLength) * 2;
		const step = config?.frame[Number(frame)].step! + data?.pipe[Number(pipeN)].width! / 1000;
		const pipesNumberWidthSide = Number(totalLength) / step - 1;
		const pipesNumberLengthSide = Number(totalWidth) / step - 1;
		const innerLength = pipesNumberWidthSide * Number(totalWidth) + pipesNumberLengthSide * Number(totalLength);
		const pipesLength = Math.ceil(outerLength + innerLength);
		return pipesLength * data?.pipe[Number(pipeN)].price!
	}

	function countFixes() {
		const listArea = data?.list[Number(listN)].width;
		const totalArea = Number(totalWidth) * Number(totalLength);
		const listsNumber = Math.ceil(totalArea / listArea!);
		const material = data?.list[Number(listN)].material;
		const fixesM2 = config?.fix.find(item => item.key === material)?.value;
		return listsNumber * fixesM2!;
	}

	function countFixesPrice() {
		const listArea = data?.list[Number(listN)].width;
		const totalArea = Number(totalWidth) * Number(totalLength);
		const listsNumber = Math.ceil(totalArea / listArea!);
		const material = data?.list[Number(listN)].material;
		const fixesM2 = config?.fix.find(item => item.key === material)?.value;
		const fixesNumber = listsNumber * fixesM2!;
		return Math.ceil(fixesNumber * data?.fix[0].price!);
	}

	return <Box className="Output">
		<Typography component={"h1"} className="Output__Title">Результат</Typography>
		<Box className="TableContainer">
			<Table className="TableContainer__Table">
				<TableHead>
					<TableRow className="TableContainer__TableHeaderRow">
						<TableCell className="TableContainer__TableCell">Наимеование</TableCell>
						<TableCell className="TableContainer__TableCell">ед.</TableCell>
						<TableCell className="TableContainer__TableCell">кол-во</TableCell>
						<TableCell className="TableContainer__TableCell">сумма</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow className="TableContainer__TableRow">
						<TableCell className="TableContainer__TableCell">{data && data.list[Number(listN)].name}</TableCell>
						<TableCell className="TableContainer__TableCell">м2</TableCell>
						<TableCell className="TableContainer__TableCell">{countLists()}</TableCell>
						<TableCell className="TableContainer__TableCell">{countListsPrice()}</TableCell>
					</TableRow>
					<TableRow className="TableContainer__TableRow">
						<TableCell className="TableContainer__TableCell">{data && data.pipe[Number(pipeN)].name}</TableCell>
						<TableCell className="TableContainer__TableCell">мп</TableCell>
						<TableCell className="TableContainer__TableCell">{countPipes()}</TableCell>
						<TableCell className="TableContainer__TableCell">{countPipesPrice()}</TableCell>
					</TableRow>
					<TableRow className="TableContainer__TableRow">
						<TableCell className="TableContainer__TableCell">Саморез</TableCell>
						<TableCell className="TableContainer__TableCell">мп</TableCell>
						<TableCell className="TableContainer__TableCell">{countFixes()}</TableCell>
						<TableCell className="TableContainer__TableCell">{countFixesPrice()}</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</Box>
	</Box>

}