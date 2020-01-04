import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import { FacebookProvider, Status } from 'react-facebook';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3)
    },
}));

const Navigateview = (props) => {
    const classes = useStyles();
    return (<div className={classes.root}>
        <Typography variant="h5">Anda pemilik kos?</Typography>
        <Typography variant="subtitle1"><strong>Tantekos</strong> melayani promosi kos Anda secara GRATIS. Kirim data kos Anda ke WhatsApp Center <strong>Tantekos</strong> sekarang.</Typography>

        {/*        <FacebookProvider appId="2615774338658413">
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
        </FacebookProvider>*/}
    </div>)
}

class Navigate extends React.Component {
    render() {
        return <Navigateview />
    }
}

export default Navigate;