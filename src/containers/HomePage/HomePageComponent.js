import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment/moment';

const HomeScreen = () => {
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
//   const completedDays = ['M', 'W', 'F']; // This could be an array of the days that have been completed
  const [completedDays, setCompletedDays] = useState([]);

  useEffect(() => {
    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 1)); // get the start of the week (Monday)
    const endOfWeek = new Date(today.setDate(today.getDate() - today.getDay() + 7)); // get the end of the week (Sunday)
    console.log('today', today);
    console.log('start', startOfWeek);
    console.log('end', endOfWeek);
    // filter the dates to only those that fall within the current week
    // const currentWeekDates = data.filter(date => {
    //     const dateObj = new Date(date);
    //     return dateObj >= startOfWeek && dateObj <= endOfWeek;
    // }); 
    // setCompletedDays(currentWeekDays);   
  }, []);
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
