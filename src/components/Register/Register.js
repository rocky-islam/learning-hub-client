import React, { useContext, useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Register = () => {
  const [error, setError] = useState('');
  const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const handleSubmit= (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photoURL, email, password);
        
        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setError('');
            form.reset();
            handleUpdateUserProfile(name, photoURL);
            
        })
        .catch(error => {
          console.error(error);
          setError(error.message);
        })
    }

    const handleUpdateUserProfile = (name, photoURL) =>{
      const profile = {
        displayName: name,
        photoURL: photoURL
      }
      updateUserProfile(profile)
      .then(() =>{})
      .catch(error => console.error(error))
    }

    const handleAccepted = (event) =>{
        setAccepted(event.target.checked);
        
    }

    return (
      <div>
        <h2 className="text-center m-4"> Welcome  </h2>
        <h2 className="text-center m-4"> Please Register  </h2>
        <div className="w-50 mx-auto bg-info p-4 rounded">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Enter name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                name="photoURL"
                type="text"
                placeholder="Enter photoURL"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email" required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password" required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check 
              type="checkbox" 
              onClick={handleAccepted}
              label="Accept Terms and Condition" 
              />
            </Form.Group>
            <Button variant="primary" type="submit" disabled={!accepted}>
              Register
            </Button>
            <Form.Text className="text-danger d-block">
                <p>{error}</p>
              </Form.Text>
            <Form.Text className="fw-semibold d-block">
                <p>Already have account <Link to='/login'>Login Here</Link></p>
              </Form.Text>
          </Form>
        </div>
      </div>
    );
};

export default Register;