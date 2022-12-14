import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet, useLoaderData } from 'react-router-dom';



const Courses = () => {
    const courseData = useLoaderData();

    return (
      <div>
        <div className="my-4">
          <div className='text-center my-4'>
            <h2>Explore Your Course</h2>
          </div>
          <Container>
            <Row>
              <Col md="3">
                {courseData.map((course) => (
                  <div key={course.id} >
                    <Link  to={`${course.id}`}>{course.name}</Link>
                  </div>
                ))}
              </Col>
              <Col md="9">
                <Outlet></Outlet>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
};

export default Courses;