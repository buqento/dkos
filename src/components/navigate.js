import React from 'react';
import Typography from '@material-ui/core/Typography';

const componentStyle = {
    root: {
        border: '2px dotted MediumSpringGreen',
        borderRadius: '8px',
        padding: '10px'
    },
    waText:{
        color: 'green'
    }
}

const Navigateview = (props) => {
    return (<div style={componentStyle.root}>
        <Typography variant="h5">Anda pemilik kos?</Typography>
        <Typography variant="subtitle1">
            <strong>Tantekos</strong> melayani promosi kos Anda secara GRATIS. Kirim data kos Anda ke <span style={componentStyle.waText}><strong>WhatsApp</strong></span> Center <strong>Tantekos</strong> sekarang.
        </Typography>
    </div>)
}

export default class Navigate extends React.Component {
    render() {
        return <Navigateview />
    }
}