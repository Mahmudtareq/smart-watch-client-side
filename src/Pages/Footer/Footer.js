import React from 'react';
import { Button,TextField, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Icon from '@mui/material/Icon';

const Footer = () => {
    return (
        <>
        <Box sx={{ flexGrow: 1, my: 5, p: 4}}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                        <Typography sx={{bgcolor:'primary.main',p:1}} variant="h5" gutterBottom component="div">
                            CONFIDENT COUNT
                        </Typography>
                        <Typography sx={{my:2}} variant="h6">
                            Social Media Connect
                        </Typography>
                        <Typography sx={{ textAlign: 'center', mt: 3 }}>
                            <Icon baseClassName="fas" className="fa-plus-circle" color="primary" sx={{ fontSize: 30, p: 1 }}><FontAwesomeIcon icon={faGoogle} /></Icon>
                            <Icon baseClassName="fas" className="fa-plus-circle" color="primary" sx={{ fontSize: 30, p: 1 }}><FontAwesomeIcon icon={faFacebookF} /></Icon>
                            <Icon baseClassName="fas" className="fa-plus-circle" color="primary" sx={{ fontSize: 30, p: 1 }}><FontAwesomeIcon icon={faGithub} /></Icon>

                        </Typography>
                        <Typography sx={{ my: 2 }} variant="h6">
                            <Button variant="outlined">+880123456789</Button>
                        </Typography>

                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography sx={{ textAlign: 'left', color: 'info.main' }} variant="h6" gutterBottom component="div">
                            Quick Shop
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Pagination
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Contact
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Accessories
                        </Typography>

                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Home Page
                        </Typography>

                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            OUR MISSION
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            OUR HISTORY
                        </Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography sx={{ textAlign: 'left', color: 'info.main' }} variant="h6" gutterBottom component="div">
                            Customer Care
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            About Us
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Privacy Policy
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Terms & Conditions
                        </Typography>

                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Products Return
                        </Typography>

                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Wholesale Policy
                        </Typography>


                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography sx={{ textAlign: 'left', color: 'info.main' }} variant="h6" gutterBottom component="div">
                            Our Address
                        </Typography>
                        <Typography sx={{ textAlign: 'left',color:'primary.main' ,my:2}} variant="body1" gutterBottom component="div">
                             Mirpur , Dhaka , Bangladesh
                        </Typography>

                        <Typography sx={{textAlign:'left',my:2}} variant="body1">
                            Subscribe our newsletter and get
                            discount 30% off
                            </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            <TextField
                                id="outlined-basic"
                                label="Your Email Address"
                                variant="outlined" />
                        </Typography>

                        <Typography sx={{ textAlign: 'left',my:1 }}>
                            <Button variant="contained">Subscribe</Button>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            </>
    );
};

export default Footer;