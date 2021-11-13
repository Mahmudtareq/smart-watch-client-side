import React from 'react';
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

const ManageProducts = ({ product, handleDelete }) => {
    const { name, img, description, price, _id } = product;
   
    return (
    <>
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
                        <span>$</span> {price}
                    </Typography>
                    <Typography sx={{textAlign:'start'}} variant="body2" color="text.secondary">
                        {description.slice(0,100)}
                    </Typography>
                </CardContent>
               
                <Typography style={{textAlign:'center'}}>
                    <Button onClick={()=>handleDelete(_id)} sx={{px:5,mb:2}} variant="contained">Delete</Button>
                </Typography>
            </Card>
        </Grid >
            
        </>
    );
};

export default ManageProducts;