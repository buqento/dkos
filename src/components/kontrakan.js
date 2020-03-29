import React from 'react';
import Axios from 'axios';
import { Box, Grid } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import CardComponent from './card';

class Kontrakan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            rooms: [],
            locations: [],
            loading: false,
            limit: 6
        }
    }

    handleShowMore = () => {
        this.setState({ limit: this.state.limit + 6 })
    }

    componentDidMount() {
        this.setState({ loading: true })
        Axios.get(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms?filter=type2&sortBy=createdAt&order=desc`)
            .then(response => {
                this.setState({ rooms: response.data })
                this.setState({ loading: false })
            }).catch(error => {
                console.warn(error)
            })
    }

    render() {
        return (
            <Box p={1} className="campaign-container">
                {
                    this.state.loading ?
                        <div>
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
                        </div>
                        :
                        <Box>
                            <CardComponent
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

export default Kontrakan;