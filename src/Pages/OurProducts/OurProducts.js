import { Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Footer from '../Footer/Footer';
import { Grid, Typography} from '@mui/material';
import OurProduct from '../OurProduct/OurProduct';

const OurProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://pacific-harbor-22675.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));

    }, [])
    return (
        <div>
            <Navigation></Navigation>
            <Container sx={{ my: 15 }}>
                <Typography sx={{my:5,color:'primary.main'}} variant="h5">
                    ALL PRODUCTS ARE AVAILABLE HERE
                </Typography>
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