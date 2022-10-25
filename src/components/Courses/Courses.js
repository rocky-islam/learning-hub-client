import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import Card from "react-bootstrap/Card";

const Courses = () => {
    const courseData = useLoaderData();

    return (
      <div>
        <div className="my-4">
          <Container>
            <Row>
              <Col md="4">
                {courseData.map((course) => (
                  <div>
                    <Link to={`${course.id}`}>{course.name}</Link>
                  </div>
                ))}
              </Col>
              <Col md="8">
                {" "}
                {courseData.map((course) => (
                  <div>
                    <Link to={`${course.id}`}>
                      <Card className="bg-dark text-white mb-4">
                        <Card.Img src={course.img} alt="Card image" />
                        <Card.ImgOverlay style={{backgroundColor: 'rgba(0,0,0,0.6)'}}>
                          <Card.Title className='gray'>{course.name}</Card.Title>
                          <Card.Text>
                            This is a wider card with supporting text below as a
                            natural lead-in to additional content. This content
                            is a little bit longer.
                          </Card.Text>
                          <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
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