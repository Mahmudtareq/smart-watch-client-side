import { Grid, Typography } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const Product = ({ product }) => {
    const { name, img, price, description ,_id} = product;
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
                        <span>$</span> {price}
                    </Typography>
                    <Typography sx={{textAlign: 'left', lineHeight:2 }} variant="body2" color="text.secondary">
                       {description.slice(0,100)}
                    </Typography>
                </CardContent>
                <CardActions >
                    <NavLink style={{textDecoration:'none'}} to={`/booking/${_id}`}>
                        <Button sx={{ px: 12, mx: 2 }} variant="contained">Buy Now</Button>

                    </NavLink>
                   
                </CardActions>
               
            </Card>
            </Grid >

       
       
    );
};

export default Product;