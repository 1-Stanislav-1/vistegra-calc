import React, { useEffect, useRef } from 'react';
import { Container, Typography, Slider } from '@mui/material';
import { useTypedDispatch, useTypedSelector } from "../Hooks/reduxHooks";
import { sliceInput } from '../Redux/sliceInput';

export default function Range() {

	const [config, width, length] = useTypedSelector(state => [
		state.sliceDB.config,
		state.sliceInput.width,
		state.sliceInput.length
	]);
	const { setWidth, setLength, setFrame } = sliceInput.actions;
	const dispatch = useTypedDispatch();

	let minWidth = useRef(0);
	let maxWidth = useRef(100);
	let minLength = useRef(0);
	let maxLength = useRef(100);

	useEffect(() => {
		config?.size.forEach(item => {
			if (item.key === "width") {
				minWidth.current = item.min;
				maxWidth.current = item.max;
			}
			else if (item.key === "length") {
				minLength.current = item.min;
				maxLength.current = item.max;
			}
		});
	}, [config]);

	function changeWidth(event: any) {
		dispatch(setWidth(event.target.value));
	}

	function changeLength(event: any) {
		dispatch(setLength(event.target.value));
	}

	return <Container className="Range">
		<div className="Range__Container">
			<Typography className="Range__Title">Ширина изделия</Typography>
			<Slider className="Range__Slider" defaultValue={0} step={1} valueLabelDisplay="auto" min={minWidth.current} max={maxWidth.current} onChange={changeWidth} />
			<Typography className="Range__Value">{Number(width) || minWidth.current}</Typography>
		</div>

		<div className="Range__Container">
			<Typography className="Range__Title">Длина изделия</Typography>
			<Slider className="Range__Slider" defaultValue={0} step={1} valueLabelDisplay="auto" min={minLength.current} max={maxLength.current} onChange={changeLength} />
			<Typography className="Range__Value">{Number(length) || minLength.current}</Typography>
		</div>
	</Container>
}