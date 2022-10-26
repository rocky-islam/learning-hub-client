import React from 'react';
import {AiOutlineExclamationCircle} from 'react-icons/ai'
import { BsEmojiFrown } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
      <div>
        <div className=" d-flex align-items-center justify-content-center vh-100 ">
          <div className="d-flex flex-column justify-content-center">
            <p className='text-center'>
              <BsEmojiFrown size={180}></BsEmojiFrown>
            </p>
            <p className="text-center display-2">404</p>
            <p className="text-center display-2">Page Not Found</p>
            <p className="text-center">Go to <Link to='/'>Home Page</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Error;