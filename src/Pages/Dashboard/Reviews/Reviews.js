import React from 'react';
import { useForm } from "react-hook-form";
import axios from "axios"
import useAuth from '../../../hooks/useAuth';
import './Reviews.css';
import { Typography,Container } from '@mui/material';

const Reviews = () => {
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://pacific-harbor-22675.herokuapp.com/reviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Review Successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <Typography sx={{my:3,color:'primary.main'}} variant="h5">
                CUSTOMER REVIEWS FROM
            </Typography>
            <Container sx={{bgcolor: 'text.disabled',py:6}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={user.displayName} {...register("name", { required: true, maxLength: 20 })} />
                
                <input defaultValue={user.email} {...register("email")} />

                <input type="number" {...register("star", { required: true, maxLength:5})} placeholder="Your Rating (1 - 5)" />

                <textarea {...register("description")} placeholder="Write Some Thing About Product" />

                <input type="submit" />
            </form>
            </Container>
            
        </div>
    );
};

export default Reviews;
