import React from 'react';


import { useParams } from 'react-router-dom';
import HamburgerMenu from '../shared/HamburgerMenu';
import Ellipses from "../shared/Ellipses";
import TextExercise from './TextExercise';
import ButtonsExercise from './ButtonsExercise';
import ExerciseComponent from './ExerciseComponent';


function Exercise() {
  const params = useParams();
  
  return (
    <div className="root-syle">
      <Ellipses/>

      <HamburgerMenu />

      <ExerciseComponent />     
    </div>
  );
}

export default Exercise
