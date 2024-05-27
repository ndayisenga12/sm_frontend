import React, { useState, useEffect } from 'react';
import { getCourses } from '../services/api';
import '../../App.css';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        // Ensure correct API function call to fetch courses
        const response = await getCourses();
        console.log('Courses data:', response.data);
        setCourses(response.data);
      } catch (error) {
        console.error('Error fetching courses', error);
      }
    };
    fetchCourses();
  }, []);

  return (
    <div className="courses-page">
      <h2>Courses Offered</h2>
      <ul>
        {/* Ensure courses array is not empty before mapping */}
        {courses.length > 0 ? (
          courses.map((course) => (
            <li key={course.courseId}>
              {course.courseName} - {course.credit} Credits
            </li>
          ))
        ) : (
          <li>No courses available</li>
        )}
      </ul>
    </div>
  );
};

export default CoursesPage;
