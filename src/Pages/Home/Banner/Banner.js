
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Banner = ({item}) => {
    // console.log(props);
    const { name, description ,img} = item;

    return (
        
            <Paper elevation={0} >
            <img src={img} alt="" />
            </Paper>
            
      

        // <Card sx={{ maxWidth: "100%", maxHeight:"100%",mt:1}}>
        //     <CardMedia
        //         component="img"
        //         image={img}
        //         height="350px"
        //         alt="green iguana"
        //     />
        // </Card>
        
    );
};

export default Banner;