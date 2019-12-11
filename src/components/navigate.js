import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
}));

const Navigateview = (props) => {
    const classes = useStyles();
    const Linktoroomadd = React.forwardRef((props, ref) => (
        <RouterLink innerRef={ref} to="/roomadd" {...props} />
    ));
    return (<div className={classes.root}>
        <Typography variant="h5">Anda pemilik kos kosan?</Typography>
        <Typography variant="subtitle1">Promosikan kos Anda agar lebih dikenal</Typography>
        <br />
        <Button variant="outlined" component={Linktoroomadd}>Promosi sekarang</Button>
    </div>)
}

class Navigate extends React.Component {
    render() {
        return (
            <div>
                <Navigateview />
            </div>
        )
    }
}

export default Navigate;