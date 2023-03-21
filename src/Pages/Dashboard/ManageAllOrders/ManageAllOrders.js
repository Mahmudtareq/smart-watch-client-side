import { Box, Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import useAuth from '../../../hooks/useAuth'

const ManageAllOrders = () => {
    const {user,logOut} = useAuth()
  return (
    // <Box className={navItemContainer}>
    <Box className="">
    <NavLink style={{ textDecoration: "none", color: 'white' }} to="/home">
        <Button color="inherit">Home</Button>

    </NavLink>
    <NavLink style={{ textDecoration: "none", color: 'white' }} to="/aboutUs">
        <Button color="inherit">About Us</Button>

    </NavLink>
    <NavLink style={{ textDecoration: "none", color: 'white' }} to="/ourProducts">
        <Button color="inherit">Our Products</Button>
    </NavLink>
    {
        user?.email ?
            <Box>
                <NavLink style={{ textDecoration: "none", color: 'white' }} to="dashboard">
                    <Button color="inherit"> Dashboard</Button>
                </NavLink>
                <NavLink style={{ textDecoration: "none", color: 'white' }} to="/">
                    <Button onClick={logOut} color="inherit">Logout</Button>
                </NavLink>
            </Box>
            :
            <NavLink style={{ textDecoration: "none", color: 'white' }} to="/login">
                <Button color="inherit">Login</Button>
            </NavLink>
    }
</Box>
  )
}

export default ManageAllOrders



