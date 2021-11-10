import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const OurProduct = ({product}) => {
    console.log(product)
    const { name, img, price, description } = product;
    return (
        <Grid Grid item xs={12} md={4} >
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    image={img}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h6" component="div">
                        {price}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions >
                    <Button sx={{ px: 12, mx: 2 }} variant="contained">Buy Now</Button>
                </CardActions>

            </Card>
        </Grid >
    );
};

export default OurProduct;