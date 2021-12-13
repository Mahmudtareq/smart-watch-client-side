import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { TextField ,Typography} from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: 'none',
    boxShadow: 20,
    p: 4,
};

const BookingModal = ({ openBooking, handleBookingClose, products, setOrderPlaceSuccess }) => {
    const { name ,price} = products;
    const { user} = useAuth();
    const orderInfo = {userName:user.displayName,email:user.email, products:user.price,quantity:'',phone:'',address:''};
    const [bookingInfo, setBookingInfo] = useState(orderInfo);

     const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = {...bookingInfo};
        newInfo[field] = value;
        // console.log(newInfo);
        setBookingInfo(newInfo);
    }
    const handleBookingProducts = e => {
        alert('Producte submitted');
        // collect data 
        const order={
            ...bookingInfo,
            ProductName : name,
            ProductPrice : price
        }
        // console.log(order);
        // send data to the server
        fetch('https://pacific-harbor-22675.herokuapp.com/orders',{
            method:'POST',
            headers:{
                'content-type':'application/json'

            },
            body:JSON.stringify(order)

        })
        .then(res=>res.json())
        .then(data=>{
            if (data.insertedId) {
                setOrderPlaceSuccess(true);
                
            }
                handleBookingClose();
        })
      
        e.preventDefault();
    }
    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={openBooking}
            onClose={handleBookingClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{timeout:500}}
        >
            <Fade in={openBooking}>
                <Box  sx={style}>
                    <Typography sx={{textAlign:'center',my:2,color:'info.main'}} id="spring-modal-title" variant="h5" component="h2">
                      Shipping Address
                    </Typography>
                    <form onSubmit={handleBookingProducts}>
                        <TextField
                            sx={{ width: '80%', m: 1 }}
                            id="outlined-size-small"
                            size="small"
                            name="userName"
                            defaultValue={user.displayName}
                           
                        />
                        <TextField
                            sx={{ width: '80%', m: 1 }}
                            id="outlined-size-small"
                            size="small"
                            name="email"
                            defaultValue={user.email}
                        />
                        <TextField
                            sx={{ width: '80%', m: 1 }}
                            id="outlined-size-small"
                            size="small"
                            name="price"
                            defaultValue={products.price}
                        />
                        <TextField
                            sx={{ width: '80%', m: 1 }}
                            id="outlined-size-small"
                            size="small"
                            name="quantity"
                            onBlur={handleOnBlur}
                            placeholder="Quantity"
                        />
                        <TextField
                            sx={{ width: '80%', m: 1 }}
                            id="outlined-size-small"
                            size="small"
                            name="phone"
                            onBlur={handleOnBlur}
                            placeholder="Phone Number"
                        />
                        <TextField
                            sx={{ width: '80%', m: 1 }}
                            id="outlined-multiline-static"
                            multiline
                            rows={3}
                            name="address"
                            onBlur={handleOnBlur}
                            placeholder="Your Address"
                        />
                            <Button sx={{px:5}} type="submit" variant="contained">Place Your Order</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default BookingModal;