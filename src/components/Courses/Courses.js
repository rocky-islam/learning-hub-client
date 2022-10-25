import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Card from "react-bootstrap/Card";
import {  FaStar, FaUserGraduate } from "react-icons/fa";

const Courses = () => {
    const courseData = useLoaderData();

    return (
      <div>
        <div className="my-4">
          <Container>
            <Row>
              <Col md="4">
                {courseData.map((course) => (
                  <div key={course.id} >
                    <Link  to={`${course.id}`}>{course.name}</Link>
                  </div>
                ))}
              </Col>
              <Col md="8">
                {courseData.map((course) => (
                  <div key={course.id}>
                    <Link to={`${course.id}`}>
                      <Card className="bg-dark text-white mb-4">
                        <Card.Img src={course.img} alt="Card image" />
                        <Card.ImgOverlay
                          style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                        >
                          <Card.Title>
                            <h2 className="fs-1 text-uppercase">{course.name}</h2>
                          </Card.Title>
                          <Card.Text>{course.note}</Card.Text>
                          <Card.Text><p className='fs-4 text-uppercase'>Instructor: {course.instructor}</p></Card.Text>
                          <Card.Text>Click for more details</Card.Text>
                        </Card.ImgOverlay>
                        <Card.Footer className='d-flex justify-content-between '>
                          <div className='d-flex align-items-center'>
                            <p className='text-warning me-2'>
                                <FaStar></FaStar>
                            </p>
                            <p>{course.rating}</p>
                          </div>
                          <div className='d-flex'>
                            <p className='me-1'>
                                <FaUserGraduate></FaUserGraduate>
                            </p>
                            <p>{course.student}</p>
                          </div>
                        </Card.Footer>
                      </Card>
                    </Link>
                  </div>
                ))}{" "}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
};

export default Courses;