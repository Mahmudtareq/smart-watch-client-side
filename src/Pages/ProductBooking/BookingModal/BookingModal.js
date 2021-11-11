import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import { TextField ,Typography,Container} from '@mui/material';
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

const BookingModal = ({ openBooking, handleBookingClose, products }) => {
    // const { name ,price} = products;
    const { user } = useAuth();
    const handleBookingProducts = e => {
        alert('Producte submitted');
        // collect data 
        // send data to the server
        handleBookingClose();
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
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openBooking}>
                <Box sx={{textAlign:'center'}} sx={style}>
                    <Typography sx={{textAlign:'center',my:2,color:'info.main'}} id="spring-modal-title" variant="h5" component="h2">
                      Shipping Address
                    </Typography>
                    <form onSubmit={handleBookingProducts}>
                        <TextField
                            sx={{ width: '80%', m: 1 }}
                            id="outlined-size-small"
                            size="small"
                              defaultValue={user.displayName}
                           
                        />
                        <TextField
                            sx={{ width: '80%', m: 1 }}
                            id="outlined-size-small"
                            size="small"
                            name="patientName"
                            // onBlur={handleOnBlur}
                              defaultValue={user.email}
                          
                        />
                        <TextField
                            sx={{ width: '80%', m: 1 }}
                            id="outlined-size-small"
                            size="small"
                            name="email"
                            // onBlur={handleOnBlur}
                             placeholder="Quentity"
                        />
                        <TextField
                            sx={{ width: '80%', m: 1 }}
                            id="outlined-size-small"
                            size="small"
                            name="phone"
                            // onBlur={handleOnBlur}
                            placeholder="Phone Number"
                        />
                        <TextField
                            sx={{ width: '80%', m: 1 }}
                            id="outlined-multiline-static"
                            multiline
                            rows={3}
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