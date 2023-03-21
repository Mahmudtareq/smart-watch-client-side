import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ManageProducts from '../ManageProducts/ManageProducts';

const ManageProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])

    const handleDelete = id => {
        const url = `http://localhost:5000/products/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert('SuccessFully Deleted !!')
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                }
               
            });
    }
    return (
        <Container sx={{ my:5 }}>
            <Typography sx={{ textAlign: 'center', my:4, color: 'info.main' }} variant="h5">
                MANAGE ALL  PRODUCTS
            </Typography>

            <Grid container spacing={2}>
                {
                    products.map(product => <ManageProducts
                        ky={product._id}
                        product={product}
                        handleDelete={handleDelete}
                    ></ManageProducts>)
                }

            </Grid>
        </Container>
    );
};

export default ManageProduct;