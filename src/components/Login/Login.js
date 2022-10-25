import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {
    const { providerLogin, signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    // email pass login
    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password);
        signIn(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/courses');
            
        })
        .catch(error => console.error(error));
        
    }

    // google login
    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () =>{
        providerLogin(googleProvider)
        .then(result =>{
            const user = result.user;
            console.log(user);
            
        })
        .catch(error => console.error(error))
    }

    return (
      <div>
        <h2 className="text-center m-4">Login Here</h2>
        <div className="w-50 mx-auto">
          <Form onSubmit={handleSubmit}>
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
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Form.Text className="text-danger d-block">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form>
          <div className="my-4">
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-primary my-4 me-4">
              Login With google
            </button>
            <button className="btn btn-primary my-4 me-4">
              Login With Github
            </button>
          </div>
        </div>
      </div>
    );
};

export default Login;