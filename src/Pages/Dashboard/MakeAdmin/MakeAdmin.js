import React, { useState } from 'react';
import {TextField,Button, Alert,Typography} from '@mui/material';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleMakeAdmin = e => {
        const user = {email}
        fetch('https://pacific-harbor-22675.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    // console.log(data);
                    setAdminSuccess(true);
                }
               
        })
        e.preventDefault();
    }
    return (
        <>
                <Typography sx={{my:3,color: 'primary.main'}} variant="h5">
                    MAKE A AN ADMIN
                </Typography>
            <form onSubmit={handleMakeAdmin}>
                <TextField
                    sx={{width:'50%'}}
                    label="Enter Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="outlined">Make Admin</Button>
            </form>
            {adminSuccess && <Alert severity="success">Make Admin Successfully !!!</Alert>}
        </>
    );
};

export default MakeAdmin;