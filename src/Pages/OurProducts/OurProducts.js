import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../Footer/Footer';
// import Products from '../Home/Products/Products';
import Grid from '@mui/material/Grid';
import OurProduct from '../OurProduct/OurProduct';

const OurProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{my:15}}>
                <Grid container spacing={2}>
                    {
                        products.map(product => <OurProduct
                            key={product._id}
                            product={product}
                            >
                        </OurProduct>)
                        
                  }
                </Grid>
                
           </Container>
            <Footer></Footer>
        </div>
    );
};

export default OurProducts;