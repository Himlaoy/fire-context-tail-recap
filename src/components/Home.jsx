import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
           <h2>Name:{user.name} </h2>
        </div>
    );
};

export default Home;