import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from "sweetalert2";

const Proceed = () => {
    const details = useLoaderData();
    console.log(details);
    const {name, price} = details;

    const handleClick = () =>{
        Swal.fire({
          icon: "success",
          title: `You Pay $${price} for ${name} course`,
          text: "Congratulations!",
        });
    }
    
    return (
        <div className='text-center'>
            <h2> Check out Page</h2>
            <div className='m-4'>
            <h4>You chose our <span className='bg-dark text-info px-2 rounded'>{name}</span> course</h4>
            <h5>Course Price ${price}</h5>
            <button onClick={handleClick} className='btn btn-info'>Proceed Now</button>
            </div>
        </div>
    );
};

export default Proceed;