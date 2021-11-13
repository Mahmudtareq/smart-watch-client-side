import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Product from '../Product/Product';
import { Container, Typography } from '@mui/material';


const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://pacific-harbor-22675.herokuapp.com/products')
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
                    products.slice(0, 6).map(product => <Product
                    key={product._id}    
                    product={product}
                ></Product>)
            }
        
            </Grid>
        </Container>
    );
};

export default Products;