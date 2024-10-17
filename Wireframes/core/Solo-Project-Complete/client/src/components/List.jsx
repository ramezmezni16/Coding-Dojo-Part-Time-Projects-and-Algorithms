import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../components/Create.css';

const List = () => {
    const [products, setProducts] = useState([]);
    const [sortedProducts, setSortedProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [sortBy, setSortBy] = useState('all');

    useEffect(() => {
        axios.get('http://localhost:8000/api/groceries/')
            .then(res => {
                setProducts(res.data);
                setSortedProducts(res.data);
                calculateTotalPrice(res.data);
            })
            .catch(err => {
                console.error('Error fetching products:', err);
            });
    }, []);

    useEffect(() => {
        if (sortBy === 'type') {
            sortProductsByType();
        } else if (sortBy === 'price') {
            sortProductsByPrice();
        } else {
            setSortedProducts(products);
            calculateTotalPrice(products);
        }
    }, [sortBy, products]);

    const calculateTotalPrice = (products) => {
        const totalPriceSum = products.reduce((sum, product) => sum + product.price, 0);
        setTotalPrice(totalPriceSum);
    };

    const sortProductsByType = () => {
        const sorted = [...products].sort((a, b) => {
            if (a.type < b.type) return -1;
            if (a.type > b.type) return 1;
            return 0;
        });
        setSortedProducts(sorted);
        calculateTotalPrice(sorted);
    };

    const sortProductsByPrice = () => {
        const sorted = [...products].sort((a, b) => b.price - a.price);
        setSortedProducts(sorted);
        calculateTotalPrice(sorted);
    };

    const deleteProduct = (id) => {
        axios.delete(`http://localhost:8000/api/groceries/${id}`)
            .then(res => {
                console.log(res.data);
                const updatedProducts = products.filter(product => product._id !== id);
                setProducts(updatedProducts);
            })
            .catch(err => {
                console.error('Error deleting product:', err);
            });
    };

    return (
        <div className="dashboard">
            <Link to={`/create`}>
                <p>Create</p>
            </Link>
            <h2>Sorted by:</h2>
            <div className="sort-options">
                <button onClick={() => setSortBy('all')}>ALL</button>
                <button onClick={() => setSortBy('type')}>TYPE</button>
                <button onClick={() => setSortBy('price')}>PRICE</button>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedProducts.map(product => (
                        <tr key={product._id}>
                            <td>{product.name}</td>
                            <td>{product.type}</td>
                            <td>{product.price} dt</td>
                            <td>
                                <button onClick={() => deleteProduct(product._id)}>Delete</button>
                                <Link to={`/edit/${product._id}`}>
                                    <button>Edit</button>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <p>Total Price: {totalPrice} dt</p>
        </div>
    );
};

export default List;