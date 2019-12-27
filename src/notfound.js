import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, Link } from '@material-ui/core';


const Linktohome = React.forwardRef((props, ref) => (
	<RouterLink innerRef={ref} to="/" {...props} />
));

const Notfound = () => 
<div>
	<Typography variant="h6" color="error">Ups! Halaman tidak ditemukan</Typography>
	<Typography variant="body2">
		<Link color="inherit" component={Linktohome}>Kembali ke Beranda</Link>
	</Typography>
</div>;

export default Notfound