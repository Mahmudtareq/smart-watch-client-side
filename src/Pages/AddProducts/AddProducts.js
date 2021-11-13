import React from "react";
import axios from "axios"
import { useForm } from "react-hook-form";
import './AddProducts.css';
import { Container, Typography } from "@mui/material";

const AddProducts = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        // console.log(data);
        axios.post('https://pacific-harbor-22675.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Product Successfully');
                    reset();
           }
        })
    }
    return (
        <Container sx={{ bgcolor: 'text.secondary',py:3}}>
        <div className="add-service">
            <Typography variant="h5" sx={{my:3,color:'primary.main'}}>
                ADD A NEW PRODUCT 
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Product Name" />
                <textarea {...register("description")} placeholder="Product Description"/>
                <input type="number" {...register("price")} placeholder="Product Price"/>
                <input {...register("img")} placeholder="Product Image url"/>
                <input type="submit" />
            </form>
            </div>
        </Container>
    );
};

export default AddProducts;