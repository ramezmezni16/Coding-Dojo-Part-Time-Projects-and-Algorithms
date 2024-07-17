import React from 'react';
import { Link } from 'react-router-dom';
import './Create.css';

const Home = () => {
    return (
        <div className="home">
            <h1>GROCERY MANAGER</h1>
            <p>Create your grocery list and manage it so you don't forget anything</p>
            <Link to="/create" className="btn">Create Your Own List!</Link>
        </div>
    );
}

export default Home;
