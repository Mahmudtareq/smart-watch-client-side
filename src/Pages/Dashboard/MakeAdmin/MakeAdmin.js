import React, { useState } from 'react';
import {TextField,Button, Alert} from '@mui/material';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [adminSuccess, setAdminSuccess] = useState(false);
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleMakeAdmin = e => {
        const user = {email}
        fetch('http://localhost:5000/users/admin', {
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
        <div>
            <h2>Make admin</h2>
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
        </div>
    );
};

export default MakeAdmin;