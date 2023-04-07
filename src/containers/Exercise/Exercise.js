import React from 'react';


import { useParams } from 'react-router-dom';
import HamburgerMenu from '../shared/HamburgerMenu';
import Ellipses from "../shared/Ellipses";
import TextExercise from './TextExercise';
import ButtonsExercise from './ButtonsExercise';


function Exercise() {
  const params = useParams();
  
  return (
    <div className="root-syle">
      <Ellipses/>

      <HamburgerMenu />

      <TextExercise/>

      <ButtonsExercise/>
     
    </div>
  );
}

export default Exercise
