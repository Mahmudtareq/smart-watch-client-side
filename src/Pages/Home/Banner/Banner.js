
import React from 'react';
import Paper from '@mui/material/Paper';

const Banner = ({item}) => {
    // console.log(props);
    const {img} = item;

    return (
        
            <Paper elevation={0} >
            <img src={img} alt="" />
            </Paper>
            
    );
};

export default Banner;