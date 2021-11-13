import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ShowReviews from '../ShowReviews/ShowReviews';

const ReViews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <Container sx={{ my: 5 }}>
                <Typography  sx={{my:3,color:'info.main'}} variant="h5">
                    Customer Reviews 
                </Typography>
                <Grid container spacing={2}>
                {
                    reviews.map(review => <ShowReviews
                        review={review}
                        key={review._id} >
                    </ShowReviews>)

                }
                </Grid>
            </Container>
        </div>
    );
};

export default ReViews;