import "./spinner.css";
import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

const Spinner = () => {
	return (
		<Box sx={{ width: '100%' }}>
		<LinearProgress />
		<LinearProgress />
		<div className="Spinner">
		<Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
		<CircularProgress color="secondary" />
		</Stack>
		</div>
		<LinearProgress />
		<LinearProgress />
	</Box>
	)


	// <div className="Spinner">
	// 	<Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
	// 	{/* <CircularProgress color="secondary" /> */}
	// 	<CircularProgress color="success" />
	// 	{/* <CircularProgress color="inherit" /> */}
	// </Stack>
	// 	</div>
	// );
};

export default Spinner;