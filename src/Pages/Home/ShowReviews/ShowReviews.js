import React from 'react';
import Grid from '@mui/material/Grid';
import {  Card,CardContent, Rating, Typography } from '@mui/material';
const ShowReviews = ({ review}) => {
    const { star, description,email, name } = review;
    return (
        <>
            
            <Grid item xs={12} md={4}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {name}
                        </Typography>
                        <Typography gutterBottom variant="body1" component="div">
                          {email}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                           {description}
                        </Typography>
                    </CardContent>
                    <Typography sx={{ textAlign: 'center' }}>
                        <Rating
                           
                            readOnly
                            defaultValue={star}
                            precision={0.5}
                            fontSize="inherit"
                        />
                       
                    </Typography>
                </Card>
                    
                </Grid> 
            
        </>
    );
};

export default ShowReviews;