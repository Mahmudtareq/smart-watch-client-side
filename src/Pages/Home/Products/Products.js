import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';
import { Container, Typography } from '@mui/material';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
        
    },[])
    return (
        <Container sx={{ my: 15 }}>
            <Typography sx={{textAlign:'center',my:5,color:'info.main'}} variant="h5">
                OUR BEST PRODUCTS
            </Typography>
           
            <Grid container spacing={2}>
                {
                    products.slice(0,6).map(product => <Product
                    product={product}
                ></Product>)
            }
        
            </Grid>
        </Container>
    );
};

export default Products;