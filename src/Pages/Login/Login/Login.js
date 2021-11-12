import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import login1 from '../../../images/products/login1.png';
import { Alert, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { NavLink, useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, error, signInWithGoogle } = useAuth();
    const location = useLocation()
    const history = useHistory()

    const handleOnChange = e => {
        const filed = e.target.name;
        const value = e.target.value;
        // console.log(filed , value)
        const newLoginData = { ...loginData };
        newLoginData[filed] = value;
        setLoginData(newLoginData)
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);

    }

    return (
        <>
        <Container sx={{my:5}}>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 10}} xs={12} md={6}>
                    <Typography sx={{ color: 'info.main', mt: 6 ,textAlign:'center'}} variant="h6" gutterBottom>
                        LOGIN
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 2 }}
                            id="standard-basic"
                            label="Your Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />
                        
                       
                        <Button variant="contained" sx={{ width: '75%', m: 2 }}
                            type="submit">
                            Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/register">
                            <Button sx={{textAlign:'center',color:'success.main'}} variant="text">New User? Please Register</Button>
                        </NavLink>

                       
                        {isLoading && <CircularProgress />}
                      
                        {user?.email && <Alert severity="success"> User Login Successfully ???</Alert>}
                        {error && <Alert severity="error"> {error}</Alert>}
                    </form>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google SignIn</Button>
               </Grid>
            <Grid item sx={{mt:10}} xs={12} md={6}>
                <img src={login1 } width="100%"  alt="..."/>
            </Grid>
        </Grid>
            </Container>
            </>
    );
};

export default Login;