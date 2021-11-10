import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login1 from '../../../images/products/login1.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user, registerUser,isLoading,error } = useAuth();

    const handleOnBlur = e => {
        const filed = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[filed] = value;
        // console.log(filed, value, newLoginData)
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your Password did not matach');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);

        e.preventDefault();
    }
    return (
        <Container sx={{ my: 5 }}>
            <Grid container spacing={2}>

                <Grid item sx={{ mt: 10 }} xs={12} md={6}>
                    <Typography sx={{ color: 'info.main', mt: 6, textAlign: 'center' }} variant="h6" gutterBottom>
                        REGISTER
                    </Typography>


                    { !isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Re-Enter Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />


                        <Button variant="contained" sx={{ width: '75%', m: 2 }}
                            type="submit">
                            Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button sx={{ textAlign: 'center', color: 'success.main' }} variant="text">Already Registered ? Please Login</Button>
                        </NavLink>


                       
                       
                      

                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success"> User Register Successfully ???</Alert>}
                    {error && <Alert severity="error"> {error}</Alert>}


                </Grid>
                <Grid item sx={{ mt: 10 }} xs={12} md={6}>
                    <img src={login1} width="100%" alt="..." />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;