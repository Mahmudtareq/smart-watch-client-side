import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Paper,Container,Button, Typography} from '@mui/material';
import { Link, NavLink } from 'react-router-dom';
import Grid from '@mui/material/Grid';

const MyOrder = ({handleDelete}) => {
    const { user } = useAuth();
    // const { name } = product;
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `https://pacific-harbor-22675.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
        
    }, [user.email])
    return (
        <>
            <Typography sx={{mt:5,color:"info.main"}} variant="h5">
                Total Product Order is :{orders.length}
            </Typography>
            <NavLink style={{ textDecoration: "none"}} to="/home">
                <Button sx={{my:5}} variant="contained">Back To Home</Button>
            </NavLink>
        <Container >
        <Grid container spacing={2}>
            
            <TableContainer component={Paper}>
                <Table aria-label="Products Orders ">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">User Name</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Delivery Address</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.ProductName}
                                </TableCell>
                                <TableCell align="right">{row.ProductPrice}</TableCell>
                                <TableCell align="right">{row.quantity}</TableCell>
                                <TableCell align="right">{row.userName}</TableCell>
                                <TableCell align="right">{row.phone}
                                </TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row.payment ?
                                    'Paid' :
                                    <Link  to={`/dashboard/payMent/${row._id}`}><Button variant="outlined">Pay</Button></Link>
                                }

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </Grid>
        </Container>
        </>
    );
};

export default MyOrder;