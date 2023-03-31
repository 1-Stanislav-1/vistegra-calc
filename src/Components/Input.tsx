import React from 'react';
import {Container, Box } from '@mui/material';
import ListTable from "./ListTable";
import PipeTable from "./PipeTable";
import Range from "./Range";
import Strength from "./Strength";

export default function Input() {

	return <Box className="Input">

		<ListTable />

		<Container className="Input__Container">

			<PipeTable />

			<Box className="Input__RangeAndStrengthContainer">

				<Range/>

				<Strength/>

			</Box>

		</Container>

	</Box>

}