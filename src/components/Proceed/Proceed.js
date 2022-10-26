import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Proceed = () => {
    const details = useLoaderData();
    console.log(details);
    const {name, price} = details;
    
    return (
        <div>
            <h2> proceed page</h2>
            <h4>{name}</h4>
        </div>
    );
};

export default Proceed;