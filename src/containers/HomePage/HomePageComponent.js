import React, {useEffect, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment/moment';
import { useParams } from 'react-router-dom';

const HomeScreen = () => {
  const days = ['M', 'T', 'W', 'Th', 'F', 'S', 'Su'];
//   const completedDays = ['M', 'W', 'F']; // This could be an array of the days that have been completed
  const [completedDays, setCompletedDays] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios.post("http://127.0.0.1:5000//get_exercise_data", {
      email: params.email,
    }).then((response) => {
      if (response.data.success) {
        const today = new Date();
        // Get the start of the current week (Monday)
        const startOfWeek = moment().startOf('week').isoWeekday(1);
        // Get the end of the current week (Sunday)
        const endOfWeek = moment().endOf('week').isoWeekday(7);
        // filter the dates to only those that fall within the current week
        // Filter the dates to only include those in the current week
        const currentWeekDates = data.filter((date) => {
            const momentDate = moment(date);
            return momentDate.isSameOrAfter(startOfWeek) && momentDate.isSameOrBefore(endOfWeek);
        });
       console.log('currentWeekDates', currentWeekDates);
      }
    }).catch((error) => {
      console.log('error', error);
    })
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
