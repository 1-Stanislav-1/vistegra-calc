import React from 'react';
import { Box, Table, TableHead, TableBody, TableRow, TableCell, Typography, RadioGroup, Radio } from '@mui/material';
import { useTypedDispatch, useTypedSelector } from "../Hooks/reduxHooks";
import { sliceInput } from '../Redux/sliceInput';

export default function ListTable() {

	const [data, listN] = useTypedSelector(state => [state.sliceDB.data, state.sliceInput.list]);
	const { setList } = sliceInput.actions;
	const dispatch = useTypedDispatch();

	function changeRadio(event:React.ChangeEvent<HTMLInputElement>) {
		dispatch(setList(event.currentTarget.value))
	}

	return <Box className="TableContainer TableContainer-ListTable">
		<RadioGroup className="TableContainer__RadioGroup">
			{data && data.list.map((item, i) => <Radio value={i} key={"RadioList" + i} className="TableContainer__Radio" checked={+listN === i ? true : false} onChange={changeRadio}/>)}
		</RadioGroup>
		<Table className="TableContainer__Table">
			<TableHead>
				<TableRow className="TableContainer__TableHeaderRow">
					<TableCell className="TableContainer__TableCell" colSpan={4}>
						<Typography className="TableContainer__Title">Тип листа</Typography>
					</TableCell>
				</TableRow>
				<TableRow className="TableContainer__TableHeaderRow">
					<TableCell className="TableContainer__TableCell">Наимеование</TableCell>
					<TableCell className="TableContainer__TableCell">Материал</TableCell>
					<TableCell className="TableContainer__TableCell">Ширина</TableCell>
					<TableCell className="TableContainer__TableCell">Цена за м2</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{data && data.list.map((item, i) =>
					<TableRow className="TableContainer__TableRow" key={"TableRowList" + i}>
						<TableCell className="TableContainer__TableCell">{item.name}</TableCell>
						<TableCell className="TableContainer__TableCell">{item.material}</TableCell>
						<TableCell className="TableContainer__TableCell">{item.width}</TableCell>
						<TableCell className="TableContainer__TableCell">{item.price}</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	</Box>

}