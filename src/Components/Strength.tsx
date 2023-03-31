import React from 'react';
import { FormControl, FormControlLabel, RadioGroup, Typography, Radio } from '@mui/material';
import { useTypedDispatch, useTypedSelector } from "../Hooks/reduxHooks";
import { sliceInput } from '../Redux/sliceInput';

export default function Strength() {

	const [config, frame] = useTypedSelector(state => [
		state.sliceDB.config,
		state.sliceInput.frame
	]);
	const { setFrame } = sliceInput.actions;
	const dispatch = useTypedDispatch();

	function changeFrame(event:React.ChangeEvent<HTMLInputElement>) {
		dispatch(setFrame(event.currentTarget.value));
	}

	return <FormControl className="Radio__Strength" component="fieldset">
		<Typography className="Radio__Title">Прочность изделия</Typography>
		<RadioGroup value={frame} onChange={changeFrame}>
			{config?.frame.map((item, i) => <FormControlLabel value={i} control={<Radio />} label={item.name} key={"RadioFrame" + i} />)}
		</RadioGroup>
	</FormControl>
}