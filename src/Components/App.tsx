import React, { useEffect } from 'react';
import { Divider } from '@mui/material';
import { useTypedDispatch } from "../Hooks/reduxHooks";
import { dbRequest } from '../Redux/asyncActions';
import Input from "./Input";
import Output from "./Output";

function App() {

	const dispatch = useTypedDispatch();

	useEffect(() => {
		dispatch(dbRequest());
	}, []);

	return (
		<div className="App">
			<Input/>
			<Divider/>
			<Output/>
		</div>
	);


}

export default App;
