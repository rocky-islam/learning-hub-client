import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from "sweetalert2";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Proceed = () => {
    const {user} = useContext(AuthContext);

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
      <div className="text-center">
        <h2> Check out Page</h2>
        <div className="m-4">
          <img className='' src={user?.photoURL} alt="" height='220px' />
          <h3>Hello {user?.displayName}</h3>
        </div>
        <div className="m-4">
          <h4>
            You chose our{" "}
            <span className="bg-dark text-info px-2 rounded">{name}</span>{" "}
            course
          </h4>
          <h5>Course Price ${price}</h5>
          <button onClick={handleClick} className="btn btn-info">
            Proceed Now
          </button>
        </div>
      </div>
    );
};

export default Proceed;