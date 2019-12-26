import React from 'react';
import { Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import { Link as RouterLink } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';


class Roomsmore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            loading: true
        }
    }

    async componentDidMount() {
        await fetch(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms?page=2&limit=2&sortBy=createdAt&order=desc`)
            .then(response => response.json())
            .then(data => {
                this.setState({ rooms: data })
            })
        this.setState({ loading: false })
    }

    render() {
        const Linkdetail = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

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
                                    <CardHeader
                                        title={room.price_title_time}
                                        // subheader={room.price_title_time}
                                    />

                                    <CardActionArea
                                        component={Linkdetail}
                                        to={"/room/" + room.id}>
                                        <CardMedia
                                            component="img"
                                            alt={room.room_title}
                                            image={room.image_url}
                                            title={room.room_title}
                                        />
                                    </CardActionArea>
                                    <a href={"https://localhost:3000/room/"+room.id}>More</a>                                </Card>
                            </Grid>
                        )}
                    </Grid>
            }

        </div>)
    }
}

export default Roomsmore;