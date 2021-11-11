import { Alert, Container, Grid, Typography } from '@mui/material';
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
                // console.log(data)
                if (data.deletedCount > 0) {
                    <Alert severity="success">SuccessFully Deleted !!</Alert>
                    const remaining = products.filter(product => product._id !== id);
                    setProducts(remaining);
                }
               
            });
    }
    return (
        <Container sx={{ my: 15 }}>
            <Typography sx={{ textAlign: 'center', my: 5, color: 'info.main' }} variant="h5">
                Manage All  PRODUCTS
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