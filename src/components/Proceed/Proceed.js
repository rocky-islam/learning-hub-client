import React, { useContext } from 'react';
import { Button, Card, CardGroup, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Swal from "sweetalert2";
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import Pdf from "react-to-pdf";

const Proceed = () => {
    const {user} = useContext(AuthContext);
    const ref = React.createRef();

    const details = useLoaderData();
    console.log(details);
    const {name, price, img, note} = details;

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
          <img className="img-fluid" src={user?.photoURL} alt="" height="220px" />
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
        <div ref={ref}>
          <Container className="d-flex justify-content-center">
            <CardGroup>
              <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>{note}</Card.Text>
                  <Pdf targetRef={ref} filename="code-example.pdf">
                    {({ toPdf }) => (
                      <Button onClick={toPdf}>Generate Pdf</Button>
                    )}
                  </Pdf>
                </Card.Body>
              </Card>
            </CardGroup>
          </Container>
        </div>
        {/* <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
        </Pdf> */}
      </div>
    );
};

export default Proceed;