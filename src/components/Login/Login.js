import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");

  const { providerLogin, signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  // email pass login
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    // console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  // google login
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  // Github Login
  const githubProvider = new GithubAuthProvider();
  const handleGithubSignIn = () =>{
      providerLogin(githubProvider)
        .then((result) => {
          const user = result.user;
          console.log(user);
        })
        .catch((error) => console.error(error));
  }

  return (
    <div>
      <h2 className="text-center m-4">Login Here</h2>
      <div className="w-50 mx-auto bg-info p-4 rounded">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Login
          </Button>
          <Form.Text className="text-danger d-block">
            <p>{error}</p>
          </Form.Text>
          <Form.Text className="fw-semibold d-block">
            <p>Click Here for <Link to='/register'>Register</Link></p>
          </Form.Text>
        </Form>
        <div className="my-4">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-primary my-4 me-4"
          >
            Login With google
          </button>
          <button
            onClick={handleGithubSignIn}
            className="btn btn-primary my-4 me-4"
          >
            Login With Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
