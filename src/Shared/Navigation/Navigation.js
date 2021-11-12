import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const { user ,logOut} = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Smart Watch
                    </Typography>
                    <Box>
                    <NavLink style={{ textDecoration: "none", color: 'white'}} to="/home">
                        <Button color="inherit">Home</Button>

                    </NavLink>
                    <NavLink style={{textDecoration :"none",color:'white'}} to="/aboutUs">
                        <Button color="inherit">About Us</Button>

                    </NavLink>
                    <NavLink style={{ textDecoration: "none", color: 'white'}} to="/ourProducts">
                        <Button color="inherit">Our Products</Button>
                    </NavLink>
                    {
                        user?.email ?
                        <Box>
                             <NavLink style={{ textDecoration: "none", color: 'white' }} to="dashboard">
                                <Button color="inherit"> Dashboard</Button>
                            </NavLink>
                             <NavLink style={{ textDecoration: "none", color: 'white' }} to="/">
                                <Button onClick={logOut}  color="inherit">Logout</Button>
                            </NavLink>

                        </Box>
                            :
                            <NavLink style={{ textDecoration: "none", color: 'white' }} to="/login">
                                <Button color="inherit">Login</Button>
                            </NavLink>
                }
                </Box>
                    
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;