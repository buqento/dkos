import React from 'react';
import Axios from 'axios';
import { Box, Typography, Grid, Link } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import House from './house';
import CardComponent from './card';

class Dashboard extends React.Component {
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
        Axios.get(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms?filter=type1&page=1&limit=4&sortBy=createdAt&order=desc`)
            .then(response => {
                this.setState({ rooms: response.data })
                this.setState({ loading: false })

            }).catch(error => {
                console.warn(error)
            })
    }

    render() {
        return (
            <Box className="main-container" mt={-2}>
                {
                    this.state.loading ?
                        <Box p={1}>
                            <Grid container spacing={1}>
                                <Grid item md={6} sm={6} xs={6}>
                                    <Skeleton variant="rect" width="100%" height={150} />
                                    <React.Fragment>
                                        <Skeleton height={30} width="80%" />
                                    </React.Fragment>
                                </Grid>
                                <Grid item md={6} sm={6} xs={6}>
                                    <Skeleton variant="rect" width="100%" height={150} />
                                    <React.Fragment>
                                        <Skeleton height={30} width="80%" />
                                    </React.Fragment>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item md={6} sm={6} xs={6}>
                                    <Skeleton variant="rect" width="100%" height={150} />
                                    <React.Fragment>
                                        <Skeleton height={30} width="80%" />
                                    </React.Fragment>
                                </Grid>
                                <Grid item md={6} sm={6} xs={6}>
                                    <Skeleton variant="rect" width="100%" height={150} />
                                    <React.Fragment>
                                        <Skeleton height={30} width="80%" />
                                    </React.Fragment>
                                </Grid>
                            </Grid>
                            <Grid container spacing={1}>
                                <Grid item md={6} sm={6} xs={6}>
                                    <Skeleton variant="rect" width="100%" height={150} />
                                    <React.Fragment>
                                        <Skeleton height={30} width="80%" />
                                    </React.Fragment>
                                </Grid>
                                <Grid item md={6} sm={6} xs={6}>
                                    <Skeleton variant="rect" width="100%" height={150} />
                                    <React.Fragment>
                                        <Skeleton height={30} width="80%" />
                                    </React.Fragment>
                                </Grid>
                            </Grid>
                        </Box>
                        :
                        <Box>
                            <Box className="campaign-container" p={1}>
                                <Box p={1}>
                                    <span className="inline">
                                        <Typography variant="overline">Rumah Kontrak</Typography>
                                    </span>
                                    <span className="inline pos-right">
                                        <Typography variant="caption">
                                            <Link href="/kontrakan" underline="none">Lihat Semua</Link>
                                        </Typography>
                                    </span>
                                </Box>
                                <House />
                            </Box>
                            
                            <Box className="campaign-container" p={1} mt={2}>
                                <Box mt={-1} p={1}>
                                    <span className="inline">
                                        <Typography variant="overline">Kos Bulanan</Typography>
                                    </span>
                                    <span className="inline pos-right">
                                        <Typography variant="caption">
                                            <Link href="/kos" underline="none">Lihat Semua</Link>
                                        </Typography>
                                    </span>
                                </Box>
                                <CardComponent
                                    isLike={this.isLike}
                                    limit={this.state.limit}
                                    rooms={this.state.rooms}
                                    // handleShowMore={this.handleShowMore}
                                    />
                            </Box>
                        </Box>
                }
            </Box>)
    }
}

export default Dashboard;