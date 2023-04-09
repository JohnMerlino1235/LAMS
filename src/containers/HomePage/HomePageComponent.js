import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const HomeScreen = () => {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  const completedDays = ['M', 'W', 'F']; // This could be an array of the days that have been completed

  return (
    <div className="home-screen">
      <h1 className='instructions-page-header'>Welcome Back!</h1>
      <h2 className='home-screen-exercise-text'>This Week's Exercises</h2>
      <div className="weekdays">
        {days.map((day, index) => (
          <div key={index} className="weekday">
            <span>{day}</span>
            {completedDays.includes(day) ? (
              <FontAwesomeIcon icon={faCheckCircle} className="completed" />
            ) : (
              <div  />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeScreen;
