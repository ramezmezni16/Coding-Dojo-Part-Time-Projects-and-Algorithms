import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Create.css';

const groceriesTypes = ['Fruits', 'Vegetables', 'Dairy', 'Meat', 'Seafood', 'Grains', 'Snacks', 'Beverages', 'Baked Goods', 'Condiments', 'Canned Goods', 'Frozen Foods', 'Cleaning Supplies', 'Personal Care', 'Household Items', 'Spices and Herbs', 'Baby Products', 'Pet Supplies'];

const Create = () => {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/groceries/", { name, type, price })
            .then(res => {
                console.log(res.data);
                setName('');
                setType('');
                setPrice('');
                navigate('/dashbord');
            })
            .catch(err => {
                const errorResponse = err.response?.data?.errors || {};
                const errorArr = Object.values(errorResponse).map(error => error.message);
                setError(errorArr);
            });
    };

    return (
        <div className="add-product">
            <h2>Fill the product details</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label>Type</label>
                    <select value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="" disabled>Select a type</option>
                        {groceriesTypes.map((type) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Price</label>
                    <input type="number" required value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <button type="submit">Create Product</button>
                <Link to={`/dashbord`}>
                    <p>Back</p>
                </Link>
            </form>
        </div>
    );
};

export default Create;