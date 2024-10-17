import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';



const Home = () => {

    const nav = useNavigate();


    return (
        <div className="home">
            <h1 className='h1_1'>GROCERY MANAGER</h1>
            <p className='p_1'>Create your grocery list and manage it so you don't forget anything</p>
            <button className="btn_1" onClick={()=>nav("/create")}>Create Your Own List!</button>
        </div>
    );
}

export default Home;
