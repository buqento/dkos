import React from 'react';
import { ListItemText, ListItem, ListItemIcon, Dialog, Divider, Button, IconButton, Typography, AppBar, Toolbar, Box, Grid, List } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MoneyIcon from '@material-ui/icons/Money';
import Gallery from "react-photo-gallery";
import Slide from '@material-ui/core/Slide';
import { MdPictureInPicture, MdDirectionsCar, MdToys, MdMotorcycle, MdWifi, MdAcUnit, MdKitchen, MdHotel, MdRoomService } from 'react-icons/md';
import Fbshare from './fbshare';
import { Card, CardActionArea, CardMedia, CardContent } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const ModalComponent = (props) => {

    // Axios.put(`https://5de747e7b1ad690014a4e0d2.mockapi.io/rooms/${props.room.id}`,
    //     { views: props.room.views + 1 })
    //     .then(response => {
    //         console.log('awesome')
    //         console.log(response)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    let info = '';
    let labelPrice = 'Nego';
    if (props.room.type === "type1") {
        if (props.room.room_gender === 1) {
            info = "Kos Putra";
        } else if (props.room.room_gender === 2) {
            info = "Kos Putri";
        } else {
            info = "Kos Campur";
        }
        labelPrice = props.room.price_month;
    } else {
        info = "Kontrakan";
        props.room.price_month !== 'Rp 0' && (labelPrice = props.room.price_month)
    }

    return (
        <div>

            <Card key={props.room.id} variant="outlined" style={{ width: props.width }} onClick={handleClickOpen}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={props.room.room_title}
                        height="150"
                        image={props.room.image_url}
                        title={props.room.room_title}
                    />
                    <CardContent>
                        <Typography variant="subtitle2" color="primary">
                            {/* {props.room.room_title.substring(0, 10) + '...'} */}
                            {props.priceType}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <Box>
                    <AppBar position="fixed" color="primary">
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                                <ArrowBackIosIcon />
                            </IconButton>
                            <Typography variant="h6">
                                {info}
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Box mt={7}>
                        <Gallery photos={props.room.photos} margin={0} />
                        <Box padding={2}>

                            <Typography variant="h5">{props.room.room_title}</Typography>
                            <Typography gutterBottom variant="body1">
                                {info} &bull; {props.room.location} &bull; {props.room.views} Lihat
                            </Typography>
                            <Divider />

                            <ListItem>
                                <ListItemIcon>
                                    <MoneyIcon size="2em" />
                                </ListItemIcon>
                                <ListItemText>
                                    {labelPrice}
                                </ListItemText>
                            </ListItem>
                            <Divider />

                            <ListItem>
                                <ListItemIcon>
                                    <WhatsAppIcon size="2em" />
                                </ListItemIcon>
                                <ListItemText primary={`+${props.room.owner_phone}`} />
                            </ListItem>
                            <Divider />

                            <Box mt={2}>
                                <Typography variant="body1"><strong>Deskripsi</strong></Typography>
                                <Typography gutterBottom variant="body2">{props.room.description}</Typography>
                            </Box>
                            <Divider />

                            <Box mt={2}>
                                <Grid container spacing={1}>
                                    <Grid item xs={12} sm={6}>
                                        <Typography variant="body1"><strong>Fasilitas Kamar</strong></Typography>
                                        <List>
                                            {props.room.facilities_arr[0].lemari &&
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <MdKitchen size="2em" />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Lemari Pakaian" />
                                                </ListItem>
                                            }
                                            {props.room.facilities_arr[0].kasur &&
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <MdHotel size="2em" />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Kasur" />
                                                </ListItem>
                                            }
                                            {props.room.facilities_arr[0].meja &&
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <MdPictureInPicture size="2em" />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Meja Belajar" />
                                                </ListItem>
                                            }
                                            {props.room.facilities_arr[0].wifi &&
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <MdWifi size="2em" />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Wifi Hotspot" />
                                                </ListItem>
                                            }
                                            {props.room.facilities_arr[0].kipas &&
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <MdToys size="2em" />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Kipas Angin" />
                                                </ListItem>
                                            }
                                            {props.room.facilities_arr[0].ac &&
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <MdAcUnit size="2em" />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Air Conditioner" />
                                                </ListItem>
                                            }
                                        </List>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body1"><strong>Fasilitas Umum</strong></Typography>
                                        <List>
                                            {props.room.facilities_arr[0].parkirMotor &&
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <MdRoomService size="2em" />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Dapur" />
                                                </ListItem>
                                            }
                                            {props.room.facilities_arr[0].parkirMotor &&
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <MdMotorcycle size="2em" />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Parkiran Sepeda Motor" />
                                                </ListItem>
                                            }
                                            {props.room.facilities_arr[0].parkirMobil &&
                                                <ListItem>
                                                    <ListItemIcon>
                                                        <MdDirectionsCar size="2em" />
                                                    </ListItemIcon>
                                                    <ListItemText primary="Parkiran Mobil" />
                                                </ListItem>
                                            }
                                        </List>
                                    </Grid>
                                </Grid>
                            </Box>

                            <Divider />

                            <Button color="primary">
                                <Fbshare
                                    id={props.room.id}
                                    slug={props.room.slug}
                                    image_url={props.room.image_url}
                                    room_title={props.room.room_title}
                                    description={props.room.description} />
                            </Button>

                        </Box>

                    </Box>
                </Box>
            </Dialog>
        </div>
    )
}

export default ModalComponent;