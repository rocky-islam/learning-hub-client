import React, { useEffect, useState } from 'react';

const Courses = () => {
    const [courseData, setCourseData] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:5000/data')
        .then(res => res.json())
        .then(data => setCourseData(data))
    },[])
    return (
        <div>
            <h2>course is {courseData.length}</h2>
            {
                courseData.map(dataName => 
                    <li>{dataName.name}</li>
                )
            }
        </div>
    );
};

export default Courses;