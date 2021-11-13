import { Button, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className="banner-design">
                <Typography sx={{ textAlign: 'center'}} variant="h4" gutterBottom component="div">
                    About Us
                </Typography>
                <NavLink style={{textDecoration:"none"}} sx={{ textAlign: 'center' }} to="/home">
                    <Button sx={{ color: 'info.main' }} variant="text">Back To Home</Button>

                </NavLink>
            </div>
            
           
        </div>
    );
};

export default Header;