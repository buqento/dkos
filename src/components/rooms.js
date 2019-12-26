import React from 'react';
import Axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Select, MenuItem, Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import { Link as RouterLink } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Moment from 'react-moment';
import AddIcon from '@material-ui/icons/Add';
import Fbshare from './fbshare';
import Navigate from './navigate';

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
    const numberOfItems = props.limit;
    const Linkdetail = React.forwardRef((props, ref) => <RouterLink innerRef={ref} {...props} />);

    return (<div>

        <Grid container spacing={2} className={classes.root}>
            {
                props.rooms
                    .slice(0, numberOfItems)
                    .map((room) =>

                        <Grid item md={6} sm={12} xs={12} key={room.id}>
                            <Card key={room.id}>
                                <CardHeader
                                    avatar={
                                        <Avatar alt="dK" src={room.avatar} className={classes.bigAvatar} />
                                    }
                                    action={
                                        <Fbshare
                                            id={room.id}
                                            room_title={room.room_title}
                                            description={room.description} />
                                    }
                                    title={room.owner_name}
                                    subheader={<Moment fromNow>{room.createdAt}</Moment>}
                                />

                                <CardActionArea
                                    component={Linkdetail}
                                    to={"/room/" + room.id}>
                                    <CardMedia
                                        className={useStyles.media}
                                        component="img"
                                        alt={room.room_title}
                                        height="140"
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
                                            } - {room.location}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>

                            </Card>

                        </Grid>

                    )

            }

            <Grid item>
                {
                    (props.limit > props.rooms.length) ? '' :
                        <Button onClick={props.handleShowMore} variant="outlined" className={classes.more}>
                            <AddIcon />
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
            <MenuItem key="semua" value="semua">Semua Lokasi</MenuItem>

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
                    <MenuItem key={location.name} value={location.name}>{location.name}</MenuItem>
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
        console.log("constructor")
    }

    handleShowMore = () => {
        this.setState({ limit: this.state.limit + 4 })
    }

    handleFilter = (event) => {
        this.setState({ [event.target.name]: event.target.value })
        let url = "";
        event.target.value !== "semua" ?
        url = `https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms?search=${event.target.value}`
        :
        url = `https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms`
        fetch(url)
            .then(response => response.json())
            .then(data => { this.setState({ rooms: data }) })
    }

    static getDerivedStateFromProps(nextProps) {
        console.log("getDerivedStateFromProps")
        return true
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate")
        return true
    }

    componentDidUpdate(nextProps, nextState) {
        console.log("componentDidUpdate")
    }

    componentDidMount() {
        console.log("componentDidMount")
        Axios.get(`https://5de747e7b1ad690014a4e0d2.mockapi.io/location`)
            .then(response => {
                this.setState({ locations: response.data })
            }).catch(error => {
                console.warn(error)
            })
        Axios.get(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms?sortBy=createdAt&order=desc`)
            .then(response => {
                this.setState({ rooms: response.data })
            }).catch(error => {
                console.warn(error)
            })
    }

    render() {
        console.log("render")
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