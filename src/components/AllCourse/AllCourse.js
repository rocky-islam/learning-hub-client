import React from 'react';
import { Card } from 'react-bootstrap';
import { FaStar, FaUserGraduate } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const AllCourse = () => {
    const courseData = useLoaderData();
    return (
      <div>
        {courseData.map((course) => (
          <div key={course.id}>
            <Link to={`${course.id}`}>
              <Card className="bg-dark text-white mb-4">
                <Card.Img src={course.img} alt="Card image" />
                <Card.ImgOverlay style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
                  <Card.Title>
                    <h2 className="fs-1 text-uppercase">{course.name}</h2>
                  </Card.Title>
                  <Card.Text>{course.note}</Card.Text>
                  <Card.Text>
                    <p className="fs-4 text-uppercase">
                      Instructor: {course.instructor}
                    </p>
                  </Card.Text>
                  <Card.Text>Click for more details</Card.Text>
                </Card.ImgOverlay>
                <Card.Footer className="d-flex justify-content-between ">
                  <div className="d-flex align-items-center">
                    <p className="text-warning me-2">
                      <FaStar></FaStar>
                    </p>
                    <p>{course.rating}</p>
                  </div>
                  <div className="d-flex">
                    <p className="me-1">
                      <FaUserGraduate></FaUserGraduate>
                    </p>
                    <p>{course.student}</p>
                  </div>
                </Card.Footer>
              </Card>
            </Link>
          </div>
        ))}{" "}
      </div>
    );
};

export default AllCourse;