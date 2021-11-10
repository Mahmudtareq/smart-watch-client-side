import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Icon from '@mui/material/Icon';

const Footer = () => {
    return (
        <Container  sx={{ my: 5, p: 4 }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                        <Typography sx={{ textAlign: 'left', mt: 7 }} variant="body2" gutterBottom component="div">
                            Emergency Dental Care
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Check Up
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Treatment of Personal Disease
                        </Typography>

                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Tooth Extraction
                        </Typography>

                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Emergency Dental Care
                        </Typography>

                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography sx={{ textAlign: 'left', color: 'info.main' }} variant="h6" gutterBottom component="div">
                            Services
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Emergency Dental Care
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Check Up
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Treatment of Personal Disease
                        </Typography>

                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Tooth Extraction
                        </Typography>

                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Emergency Dental Care
                        </Typography>



                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography sx={{ textAlign: 'left', color: 'info.main' }} variant="h6" gutterBottom component="div">
                            Oral Health
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Emergency Dental Care
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Check Up
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Treatment of Personal Disease
                        </Typography>

                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Tooth Extraction
                        </Typography>

                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            Emergency Dental Care
                        </Typography>


                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Typography sx={{ textAlign: 'left', color: 'info.main' }} variant="h6" gutterBottom component="div">
                            Our Address
                        </Typography>
                        <Typography sx={{ textAlign: 'left' }} variant="body2" gutterBottom component="div">
                            New York - 101010 Hudson <br />
                            Yards
                        </Typography>
                        <Typography sx={{ textAlign: 'left', mt: 3 }}>
                            <Icon baseClassName="fas" className="fa-plus-circle" color="primary" sx={{ fontSize: 30, p: 1 }}><FontAwesomeIcon icon={faGoogle} /></Icon>
                            <Icon baseClassName="fas" className="fa-plus-circle" color="primary" sx={{ fontSize: 30, p: 1 }}><FontAwesomeIcon icon={faFacebookF} /></Icon>
                            <Icon baseClassName="fas" className="fa-plus-circle" color="primary" sx={{ fontSize: 30, p: 1 }}><FontAwesomeIcon icon={faGithub} /></Icon>

                        </Typography>


                        <Typography sx={{ textAlign: 'left', mt: 6 }} variant="body2" gutterBottom component="div">
                            Call Now
                        </Typography>

                        <Typography sx={{ textAlign: 'left' }}>
                            <Button variant="contained">+021457845</Button>
                        </Typography>



                    </Grid>
                </Grid>
            </Box>

        </Container>
    );
};

export default Footer;