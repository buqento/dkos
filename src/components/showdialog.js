import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

export default class ShowDialog extends React.Component{

	render(){

	const [open, setOpen] = React.useState(false);
	const handleClickOpen = () => { setOpen(true) };
	const handleClose = () => { setOpen(false) };


		return (
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">Tantekos</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Silahkan masuk untuk menyukai kos ini.
			  		</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color="primary" autoFocus>Ok</Button>
				</DialogActions>
			</Dialog>
		)
	}
}
