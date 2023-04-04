import React from 'react';
import HamburgerMenu from '../shared/HamburgerMenu';
import Ellipses from "../shared/Ellipses";
import TextInstructions from './TextInstructions';
import ButtonsInstructons from './ButtonsInstructions';

function Instructions() {
  
  return (
    <div className="root-syle">
      <Ellipses/>

      <HamburgerMenu />

      <TextInstructions/>

      <ButtonsInstructons/>

    </div>
  );
}

export default Instructions
