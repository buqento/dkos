import React from 'react';
import { Grid, Box, Button } from '@material-ui/core';
import Skeleton from '@material-ui/lab/Skeleton';
import ModalComponent from './modal';

const CardComponent = (props) => {

    const numberOfItems = props.limit;
    const handleInfo = (type, gender, price) => {
        if (type === "type1") {
            return price;
        } else {
            let labelPrice = 'Nego';
            price !== 'Rp 0' && (labelPrice = price)
            return labelPrice;
        }
    }

    return (<Box>
        <Grid container spacing={1}>
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
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} key={room.id}>
                                <ModalComponent
                                    room={room}
                                    priceType={handleInfo(room.type, room.room_gender, room.price_month)} />
                            </Grid>
                        )
            }

            <Grid item>
                {
                    (props.limit > props.rooms.length) ? '' :
                        <Button onClick={props.handleShowMore}
                            variant="text"
                            color="primary"
                            size="medium"
                        >
                            Lebih banyak
                        </Button>
                }
            </Grid>
        </Grid>
    </Box>)
}

export default CardComponent;