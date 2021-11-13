import { Card, CardContent, CardMedia,Button, Container, Typography, Divider } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { NavLink } from "react-router-dom";
import { useParams } from 'react-router';
import Grid from '@mui/material/Grid';
import Alert from '@mui/material/Alert';
import Footer from '../Footer/Footer';
import p4 from '../../images/products/p4.jpg';
import p5 from '../../images/products/p5.jpg';
import p6 from '../../images/products/p6.jpg';
import Paper from '@mui/material/Paper';
import BookingModal from '../ProductBooking/BookingModal/BookingModal';
import slider2 from '../../images/banner/slide2.png';

const Booking = () => {
    const { productId } = useParams();
    const [products, setProducts] = useState({});
    const [openBooking, setBookingOpen] = React.useState(false);
    const [oderPlaceSuccess, setOrderPlaceSuccess] = useState(false);

    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    useEffect(() => {
        fetch(`https://pacific-harbor-22675.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setProducts(data));
        
    }, [productId])

    return (
        <>
            <Grid>
                <Card sx={{ maxWidth: "100%" }}>
                    <CardMedia
                        component="img"
                        height="400"
                        image={slider2}
                        alt="Paella dish"
                    />
                    <Typography sx={{my:5,color:'info.main'}} variant="h4">
                        Booking Page 
                    </Typography>
                    <NavLink style={{textDecoration:'none'}} to="/home">
                        <Button sx={{mb:5,px:10}} variant="contained">Back To Home</Button>
                    </NavLink>
                </Card>
                  {oderPlaceSuccess && <Alert severity="success">Order Place Successfully !!! Thank You For Your Booking</Alert>}


            </Grid>
        <Container sx={{my:5}}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card >
                        <CardMedia
                            component="img"
                            image={products.img}
                            alt="green iguana"
                        />
                    </Card>
                  
                </Grid>
                <Grid item xs={12} md={6}>
                        <Card >
                            <CardContent>
                                <Typography sx={{ textAlign: 'start',color:"info.main" }} gutterBottom variant="h4" component="div">
                                    {products.name}
                                </Typography>
                                
                                <Typography sx={{textAlign:'start',color:'success.main'}} gutterBottom variant="h6" component="div">
                                    <span style={{ color: 'blue' }}>$</span> {products.price}
                                </Typography>
                                <Divider />
                                <Typography sx={{ textAlign: 'start', py: 3, lineHeight:2}} variant="body1" color="text.secondary">
                                   {products.description}
                                </Typography>
                                <Divider />
                            </CardContent>
                            <Button onClick={handleBookingOpen} sx={{mb:2,px:9,py:2}} variant="contained">Buy It Now</Button>

                        </Card>
                    
                </Grid>
                
            </Grid>
            </Container>
            <Container sx={{ my: 16 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={3}>
                    <Paper sx={{py:6}} elevation={3}>
                            <Typography sx={{ color: 'info.main' }} variant="body1" gutterBottom component="div">
                            WORLDWIDE SHIPPING
                       </Typography>
                    
                    </Paper>

                </Grid>
              
                <Grid item xs={12} md={3}>
                    <Paper sx={{ py: 6 }} elevation={3}>
                            <Typography sx={{ color: 'info.main' }} variant="body1" gutterBottom component="div">
                            FREE 60-DAY RETURNS
                        </Typography>

                    </Paper>

                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper sx={{ py: 6 }} elevation={3}>
                            <Typography sx={{ color: 'info.main' }} variant="body1" gutterBottom component="div">
                            24 MONTH WARRANTY

                        </Typography>

                    </Paper>

                </Grid>
                <Grid item xs={12} md={3}>
                    <Paper sx={{ py: 6 }} elevation={3}>

                        <Typography sx={{color:'info.main'}} variant="body1" gutterBottom component="div">
                            100% SECRUE CHECKOUT

                        </Typography>

                    </Paper>

                </Grid>

                </Grid>
            </Container>


            <Container sx={{my:6}}>
                <Typography sx={{mt:10,mb:8,color:'info.main'}} variant="h5">
                    Related Product
                    <Divider />
                </Typography>
               
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Card >
                            <CardMedia
                                component="img"
                                image={p6}
                                alt="green iguana"
                            />
                        </Card>
                        <Typography sx={{color:'success.main'}} variant="h6">
                            Nograph

                        </Typography>
                        <Typography sx={{color:'primary.main'}} variant="caption">
                            <span>$ 420.00</span>

                        </Typography>
                       


                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card >
                            <CardMedia
                                component="img"
                                image={p4}
                                alt="green iguana"
                            />
                            
                        </Card>
                        <Typography sx={{ color: 'success.main' }} variant="h6">
                            Casio

                        </Typography>
                        <Typography sx={{ color: 'primary.main' }} variant="caption">
                            <span>$ 520.00</span>

                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Card >
                            <CardMedia
                                component="img"
                                image={p5}
                                alt="green iguana"
                            />
                        </Card>
                        <Typography sx={{ color: 'success.main' }} variant="h6">
                            Nograph

                        </Typography>
                        <Typography sx={{ color: 'primary.main' }} variant="caption">
                            <span>$ 420.00</span>

                        </Typography>

                    </Grid>
                   
                </Grid>
            </Container>
            <Footer></Footer>
            <BookingModal
                products={products}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setOrderPlaceSuccess={setOrderPlaceSuccess}
            ></BookingModal>
        </>
       
    );
};

export default Booking;