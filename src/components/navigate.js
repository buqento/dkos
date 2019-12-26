import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';
import { FacebookProvider, Status } from 'react-facebook';

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
        <FacebookProvider appId="2615774338658413">
            <Status>
                {
                    ({ status }) => (
                        status !== "connected" ?
                            <Typography variant="subtitle2" color="textPrimary">Login untuk memulai promosi.</Typography>
                            :
                            <Button variant="outlined" component={Linktoroomadd}>Promosi sekarang</Button>
                    )
                }
            </Status>
        </FacebookProvider>
    </div>)
}

class Navigate extends React.Component {
    render() {
        return <Navigateview />       
    }
}

export default Navigate;