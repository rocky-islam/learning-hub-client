import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const CourseDetails= useLoaderData();
    return (
      <div>
        <h2>This is course details</h2>
      </div>
    );
};

export default CourseDetails;