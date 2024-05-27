import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { enrollStudent } from '../services/api';
import '../../App.css';

const EnrollmentPage = () => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [courseId, setCourseId] = useState('');
  const [courseName, setCourseName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      
      await enrollStudent(registrationNumber, courseId, courseName);
      navigate('/dashboard');
    } catch (error) {
      setError('Enrollment failed. Please try again.');
      console.error('Enrollment failed', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="enrollment-page">
      <h2>Student Enrollment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Registration Number:</label>
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Course ID:</label>
          <input
            type="text"
            value={courseId}
            onChange={(e) => setCourseId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Course Name:</label>
          <input
            type="text"
            value={courseName}
            onChange={(e) => setCourseName(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Enrolling...' : 'Enroll'}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default EnrollmentPage;
