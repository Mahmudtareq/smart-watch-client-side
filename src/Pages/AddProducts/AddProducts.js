import React from "react";
import axios from "axios"
import { useForm } from "react-hook-form";
import './AddProducts.css';

const AddProducts = () => {
    const { register, handleSubmit ,reset} = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added Product Successfully');
                    reset();
           }
        })
    }
    return (
        <div className="add-service">
            <h2>Add New Products</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="Product Name" />
                <textarea {...register("description")} placeholder="Product Description"/>
                <input type="number" {...register("price")} placeholder="Product Price"/>
                <input {...register("img")} placeholder="Product Image url"/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;