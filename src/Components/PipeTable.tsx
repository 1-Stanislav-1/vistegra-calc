import React from 'react';
import { Box, Table, TableHead, TableBody, TableRow, TableCell, Typography, RadioGroup, Radio } from '@mui/material';
import { useTypedDispatch, useTypedSelector } from "../Hooks/reduxHooks";
import { sliceInput } from '../Redux/sliceInput';

export default function PipeTable() {

	const [data, pipeN] = useTypedSelector(state => [state.sliceDB.data, state.sliceInput.pipe]);
	const { setPipe } = sliceInput.actions;
	const dispatch = useTypedDispatch();

	function changeRadio(event:React.ChangeEvent<HTMLInputElement>) {
		dispatch(setPipe(event.currentTarget.value))
	}

	return <Box className="TableContainer TableContainer-PipeTable">
		<RadioGroup className="TableContainer__RadioGroup">
			{data && data.pipe.map((item, i) => <Radio value={i} key={"RadioPipe" + i} className="TableContainer__Radio" checked={+pipeN === i ? true : false} onChange={changeRadio}/>)}
		</RadioGroup>
		<Table className="TableContainer__Table">
			<TableHead>
				<TableRow className="TableContainer__TableHeaderRow">
					<TableCell className="TableContainer__TableCell" colSpan={3}>
						<Typography className="TableContainer__Title">Тип трубы</Typography>
					</TableCell>
				</TableRow>
				<TableRow className="TableContainer__TableHeaderRow">
					<TableCell className="TableContainer__TableCell">Наимеование</TableCell>
					<TableCell className="TableContainer__TableCell">Ширина</TableCell>
					<TableCell className="TableContainer__TableCell">Цена за мп</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{data && data.pipe.map((item, i) =>
					<TableRow className="TableContainer__TableRow" key={"TableRowPipe" + i}>
						<TableCell className="TableContainer__TableCell">{item.name}</TableCell>
						<TableCell className="TableContainer__TableCell">{item.width}</TableCell>
						<TableCell className="TableContainer__TableCell">{item.price}</TableCell>
					</TableRow>
				)}
			</TableBody>
		</Table>
	</Box>
}