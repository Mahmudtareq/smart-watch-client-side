import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import description1 from '../../../images/description/description1.png';
import description3 from '../../../images/description/description3.png';

const Description = () => {
    return (
        <>
        <Container sx={{mb:15}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{my:4,color:'info.main'}} variant="h4" gutterBottom component="div">
                                The Watch Everyone Wants!
                        </Typography>
                        <Typography sx={{m:2}} variant="body1" gutterBottom>
                                Apple has dropped the price of the Apple Watch 3 down to $199. As a result, it's become the cheapest Apple Watch you can find. Despite its entry-level status, the Apple Watch Series 3 is still an excellent smartwatch.
                        </Typography>
                        <Button sx={{my:4,px:4}} variant="outlined">Shop Now</Button>
                        
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={description3} width="100%" alt="" />
                       
                    </Grid>
                </Grid>
            </Box>
            </Container>
            
        <Container sx={{my:10}}>
            <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <img src={description1} width="100%" alt="" />

                        </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography sx={{my:4,color:'info.main'}} variant="h4" gutterBottom component="div">
                            Luxury And High Quality
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            A wristwatch is a powerful tool that reflects the wearer's character. Men and women who wear luxury watches exude sophistication and confidence when they enter a room. Wearing a luxury watch allows the wearer to express his or her personality with an understated accessory that speaks volumes
                        </Typography>
                        <Button sx={{my:4,px:4}} variant="outlined">Shop Now</Button>
                        
                    </Grid>
                </Grid>
            </Box>
        </Container>
</>
    );
};

export default Description;