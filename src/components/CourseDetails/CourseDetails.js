import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { FaStar, FaUserGraduate } from 'react-icons/fa';


const CourseDetails = () => {
    const courseDetails= useLoaderData();
    // console.log(courseDetails);
    const {id, name, img, instructor, price, rating, student, course_dsc} = courseDetails;
    
    return (
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <div className='text-center my-4'>
              <h2>
                The Course details of{" "}
                <span className="text-success">{name}</span>
              </h2>
            </div>
            <Col>
              <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Text>
                    <div className='d-md-flex justify-content-between'>
                        <p className='fw-semibold fs-5'>Instructor: {instructor}</p>
                        <p className='fw-semibold fs-5'>Price: ${price}</p>
                    </div>
                    <div className='d-md-flex justify-content-between my-2 fw-semibold'>
                        <p><span className='text-warning p-1'><FaStar></FaStar></span>{rating}</p>
                        <p><span className='p-1'><FaUserGraduate></FaUserGraduate></span>{student}</p>
                    </div>
                  </Card.Text>
                  <Card.Text>{course_dsc}</Card.Text>
                </Card.Body>
                <Link to={`/proceed/${id}`}>Proceed</Link>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
};

export default CourseDetails;