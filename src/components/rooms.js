import React from 'react';
import Axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import {CardActions} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Select, MenuItem, Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import { Link as RouterLink } from 'react-router-dom';
import Moment from 'react-moment';
import Fbshare from './fbshare';
import Navigate from './navigate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    root: {
        marginBottom: theme.spacing(2)
    },
    more: {
        marginTop: theme.spacing(2),
    },
    comment: {
        marginLeft: theme.spacing(2),
    },
    expand: {
        marginLeft: 'auto'
    },
}));

const Roomview = (props) => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem("user"));
    const numberOfItems = props.limit;
    const Linkdetail = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

    return (<div>

        <Grid container spacing={2} className={classes.root}>
            {

                props.loading ?
                    <Grid container spacing={1}>
                        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                            <Skeleton variant="rect" width="100%" height={200} />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
                            <Skeleton variant="rect" width="100%" height={200} />
                        </Grid>
                    </Grid>
                    :
                    props.rooms
                        .slice(0, numberOfItems)
                        .map((room) =>
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6} key={room.id}>
                                <Card key={room.id}>
                                    <CardActionArea
                                        component={Linkdetail}
                                        to={"/room/" + room.id}>
                                        <CardMedia
                                            className={useStyles.media}
                                            component="img"
                                            alt={room.room_title}
                                            height="200"
                                            image={room.image_url}
                                            title={room.room_title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5">
                                                {room.room_title} 
                                            </Typography>
                                            <Typography variant="body1">Kos
							                {
                                                    room.room_gender === 1 ? " Putra" :
                                                        room.room_gender === 2 ? " Putri" : " Campur"
                                                } &bull; {room.location} &bull; {room.price_month}
                                                
                                            </Typography>
                                        </CardContent>

                                      <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                            {
                                                user &&
                                                room.likes.find(uid => {return uid === parseInt(user.profile.id)}) ? 
                                                <FavoriteIcon /> : <FavoriteBorderIcon />
                                            }
                                        </IconButton>
                                        <IconButton aria-label="share">
                                          <Fbshare
                                            id={room.id}
                                            image_url={room.image_url}
                                            room_title={room.room_title}
                                            description={room.description} />
                                        </IconButton>
                                        <Typography variant="body2" className={clsx(classes.expand)}>
                                          <div><Moment fromNow>{room.createdAt}</Moment>&nbsp;&nbsp;&nbsp;</div>
                                        </Typography>

                                      </CardActions>
                                    </CardActionArea>

                                </Card>

                            </Grid>

                        )

            }

            <Grid item>
                {
                    (props.limit > props.rooms.length) ? '' :
                        <Button onClick={props.handleShowMore}
                            variant="outlined"
                            color="secondary"
                            size="medium"
                            className={classes.more}>
                            Lebih banyak
                        </Button>
                }
            </Grid>
        </Grid>

        <Divider />

    </div>)
}


const LocationFilter = (props) => {
    return (<div>

        <Select
            variant="outlined"
            name="filter"
            margin="dense"
            value={props.filter}
            onChange={props.handleFilter}
            autoWidth
        >
            <MenuItem key="semua" value="semua">Ambon&nbsp;</MenuItem>

            {
                props.locations.sort(function (a, b) {
                    var nameA = a.name.toUpperCase();
                    var nameB = b.name.toUpperCase();
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                }).map(location =>
                    <MenuItem key={location.name} value={location.name}>{location.name}&nbsp;</MenuItem>
                )
            }
        </Select>
    </div>)
}

class Rooms extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            locations: [],
            filter: "semua",
            loading: false,
            limit: 4
        }
    }

    handleShowMore = () => {
        this.setState({ limit: this.state.limit + 4 })
    }

    handleFilter = (event) => {
        this.setState({ loading: true })
        this.setState({ [event.target.name]: event.target.value })
        let url = "";
        event.target.value !== "semua" ?
            url = `https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms?search=${event.target.value}`
            :
            url = `https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms`
        fetch(url)
            .then(response => response.json())
            .then(data => { this.setState({ rooms: data, loading: false }) })
    }

    componentDidMount() {
        Axios.get(`https://5de747e7b1ad690014a4e0d2.mockapi.io/location`)
            .then(response => {
                this.setState({ locations: response.data })
            }).catch(error => {
                console.warn(error)
            })

        Axios.get(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms?sortBy=createdAt&order=desc`)
            .then(response => {
                this.setState({ rooms: response.data })
                this.setState({ loading: false })
            }).catch(error => {
                console.warn(error)
            })
    }


    render() {
        return (<div>


            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>

                    <LocationFilter
                        locations={this.state.locations}
                        filter={this.state.filter}
                        handleFilter={this.handleFilter}
                    />
                    <br />
                    <br />
                    {
                        this.state.loading ?
                            <div>
                                <Grid container spacing={1}>
                                    <Grid item md={6} sm={12} xs={12}>
                                        <Skeleton variant="rect" width="100%" height={200} />
                                        <React.Fragment>
                                            <Skeleton height={30} style={{ marginBottom: 2 }} />
                                            <Skeleton height={30} width="80%" />
                                        </React.Fragment>
                                    </Grid>
                                    <Grid item md={6} sm={12} xs={12}>
                                        <Skeleton variant="rect" width="100%" height={200} />
                                        <React.Fragment>
                                            <Skeleton height={30} style={{ marginBottom: 2 }} />
                                            <Skeleton height={30} width="80%" />
                                        </React.Fragment>
                                    </Grid>
                                </Grid>
                                <Grid container spacing={1}>
                                    <Grid item md={6} sm={12} xs={12}>
                                        <Skeleton variant="rect" width="100%" height={200} />
                                        <React.Fragment>
                                            <Skeleton height={30} style={{ marginBottom: 2 }} />
                                            <Skeleton height={30} width="80%" />
                                        </React.Fragment>
                                    </Grid>
                                    <Grid item md={6} sm={12} xs={12}>
                                        <Skeleton variant="rect" width="100%" height={200} />
                                        <React.Fragment>
                                            <Skeleton height={30} style={{ marginBottom: 2 }} />
                                            <Skeleton height={30} width="80%" />
                                        </React.Fragment>
                                    </Grid>
                                </Grid>
                            </div>
                            : (<div>
                                <Roomview
                                    isLike={this.isLike}
                                    limit={this.state.limit}
                                    rooms={this.state.rooms}
                                    handleShowMore={this.handleShowMore}
                                />
                            </div>)
                    }
                </Grid>

                <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
                    <Navigate />
                </Grid>

            </Grid>
        </div>)
    }

}

export default Rooms;