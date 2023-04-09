import React from 'react';
import HamburgerMenu from '../shared/HamburgerMenu';
import Ellipses from "../shared/Ellipses";
import TextInstructions from './TextInstructions';
import ButtonsInstructons from './ButtonsInstructions';
import InstructionsPage from './InstructionsComponent';

function Instructions() {
  
  return (
    <div className="root-syle">
      <Ellipses/>

      <HamburgerMenu />

      <InstructionsPage />

    </div>
  );
}

export default Instructions
