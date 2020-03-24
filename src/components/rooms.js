import React from 'react';
import Axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { CardActions, Box } from '@material-ui/core';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import { Link as RouterLink } from 'react-router-dom';
import Moment from 'react-moment';
import Fbshare from './fbshare';
import clsx from 'clsx';
import House from './house';

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
    return (<Box>
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
                                        to={"/room/" + room.slug}>
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
                                            <Typography variant="body1">

                                                {
                                                    room.room_gender === 1 ? " Putra" :
                                                        room.room_gender === 2 ? " Putri" : " Campur"
                                                } &bull; {room.location} &bull; <Moment fromNow>{room.createdAt}</Moment>

                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>

                                    <CardActions disableSpacing>
                                        <ButtonGroup color="secondary" aria-label="outlined secondary button group">
                                            <Button variant="outlined">
                                                <Fbshare
                                                    id={room.id}
                                                    slug={room.slug}
                                                    image_url={room.image_url}
                                                    room_title={room.room_title}
                                                    description={room.description} />
                                            </Button>
                                            <Button href={"../room/" + room.slug}>Selengkapnya</Button>
                                        </ButtonGroup>
                                        <Typography variant="body2" className={clsx(classes.expand)}>
                                            {/* <Moment fromNow>{room.createdAt}</Moment>&nbsp;&nbsp;&nbsp; */}
                                        </Typography>
                                    </CardActions>

                                </Card>

                            </Grid>

                        )

            }

            <Grid item>
                {
                    (props.limit > props.rooms.length) ? '' :
                        <Button onClick={props.handleShowMore}
                            variant="contained"
                            color="primary"
                            size="medium"
                            className={classes.more}>
                            Lebih banyak
                        </Button>
                }
            </Grid>
        </Grid>

        <Divider />

    </Box>)
}

// const LocationFilter = (props) => {
//     return (<div>
//         <Select
//             variant="outlined"
//             name="filter"
//             margin="dense"
//             value={props.filter}
//             onChange={props.handleFilter}
//             autoWidth
//         >
//             <MenuItem key="semua" value="semua">Semua Lokasi&nbsp;</MenuItem>

//             {
//                 props.locations.sort(function (a, b) {
//                     var nameA = a.name.toUpperCase();
//                     var nameB = b.name.toUpperCase();
//                     if (nameA < nameB) {
//                         return -1;
//                     }
//                     if (nameA > nameB) {
//                         return 1;
//                     }
//                     return 0;
//                 }).map(location =>
//                     <MenuItem key={location.name} value={location.name}>{location.name}&nbsp;</MenuItem>
//                 )
//             }
//         </Select>
//     </div>)
// }

class Rooms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            locations: [],
            filter: "semua",
            loading: false,
            limit: 6
        }
    }

    handleShowMore = () => {
        this.setState({ limit: this.state.limit + 6 })
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
        this.setState({ loading: true })
        Axios.get(`https://5de747e7b1ad690014a4e0d2.mockapi.io/location`)
            .then(response => {
                this.setState({ locations: response.data })
            }).catch(error => {
                console.warn(error)
            })
        Axios.get(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms?filter=type1&sortBy=createdAt&order=desc`)
            .then(response => {
                this.setState({ rooms: response.data })
                this.setState({ loading: false })

            }).catch(error => {
                console.warn(error)
            })
    }

    render() {
        return (
            <Box>
                {/* <LocationFilter
                    locations={this.state.locations}
                    filter={this.state.filter}
                    handleFilter={this.handleFilter}
                /> */}
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
                        :
                        <Box>
                            <Box mb={1}>
                                <Typography variant="overline">Kontrak Tahunan</Typography>
                                <House />
                            </Box>
                            <Divider />
                            <Typography variant="overline">Kos Bulanan</Typography>
                            <Roomview
                                isLike={this.isLike}
                                limit={this.state.limit}
                                rooms={this.state.rooms}
                                handleShowMore={this.handleShowMore}
                            />
                        </Box>
                }
            </Box>)
    }
}
export default Rooms;