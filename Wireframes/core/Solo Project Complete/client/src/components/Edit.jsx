import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './Create.css';

const groceriesTypes = [
    'Fruits', 'Vegetables', 'Dairy', 'Meat', 'Seafood', 'Grains', 'Snacks', 
    'Beverages', 'Baked Goods', 'Condiments', 'Canned Goods', 'Frozen Foods', 
    'Cleaning Supplies', 'Personal Care', 'Household Items', 'Spices and Herbs', 
    'Baby Products', 'Pet Supplies'
];

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [price, setPrice] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProduct();
    });

    const fetchProduct = () => {
        axios.get(`http://localhost:8000/api/groceries/${id}`)
            .then(res => {
                setName(res.data.name);
                setType(res.data.type);
                setPrice(res.data.price);
            })
            .catch(err => {
                console.error('Error fetching product details:', err);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/groceries/${id}`, { name, type, price })
            .then(res => {
                console.log('Product updated:', res.data);
                navigate('/dashbord');
            })
            .catch(err => {
                console.error('Error updating product:', err);
                setError('Failed to update product. Please try again.');
            });
    };

    return (
        <div className="add-product">
            <h2>Edit Product</h2>
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
                <button type="submit">Edit Product</button>
                <Link to={`/dashbord`}>
                    <p>Back</p>
                </Link>
            </form>
        </div>
    );
};

export default Edit;