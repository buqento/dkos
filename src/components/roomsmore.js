import React from 'react';
import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { Button, CardMedia, CardActions, CardContent } from '@material-ui/core';

import CurrencyFormat from 'react-currency-format';

class Roomsmore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            loading: true
        }
    }

    async componentDidMount() {
        await fetch(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms?search=${this.props.location}&sortBy=createdAt&order=desc`)
            .then(response => response.json())
            .then(data => {
                this.setState({ rooms: data })
            })
        this.setState({ loading: false })
    }

    render() {
        return (<div>
            {
                this.state.loading ?

                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Skeleton variant="rect" width="100%" height={200} />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Skeleton variant="rect" width="100%" height={200} />
                        </Grid>
                    </Grid>

                    :

                    <Grid container spacing={1}>
                        {this.state.rooms.map(room =>
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={room.id}>
                                <Card key={room.id}>
                                    <CardMedia
                                        height="120"
                                        component="img"
                                        alt={room.room_title}
                                        image={room.image_url}
                                        title={room.room_title}
                                    />
                                    <CardContent>
                                        <Typography variant="body1">{room.room_title}</Typography>
                                        <Typography variant="body2">
                                            <CurrencyFormat value={room.price_month} displayType={'text'} thousandSeparator={true} prefix={'Rp '} /> / Bulan
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button href={"../room/" + room.id}>Selengkapnya</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )}
                    </Grid>
            }

        </div>)
    }
}

export default Roomsmore;