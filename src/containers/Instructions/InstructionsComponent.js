import React, { useState, useEffect } from 'react';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// import Step1 from './images/step1.png';
// import Step2 from './images/step2.png';
// import Step3 from './images/step3.png';
// import Step4 from './images/step4.png';
// import Step5 from './images/step5.png';

function InstructionsPage() {
    const [step, setStep] = useState(1);
    const maxStep = 5;
    const [showCalibrateButton, setShowCalibrateButton] = useState(false);
    const [showExerciseButton, setShowExerciseButton] = useState(false);
    const [comPort, setComport] = useState('');
    const params = useParams()
    const navigate = useNavigate();  

    useEffect(() => {
        if (step === 2) {
            setShowCalibrateButton(true);
        } else if(step === 5) {
            setShowExerciseButton(true);
        } else {
            setShowCalibrateButton(false);
            setShowExerciseButton(false);
        }
    }, [step]);

    function handlePrevClick() {
      setStep(Math.max(step - 1, 1));
    }
  
    function handleNextClick() {
      const nextStep = Math.min(step + 1, maxStep);
      if (nextStep === 3 && !comPort) {
        setComport('COM5');
        // do nothing
      } else {
        setStep(Math.min(step + 1, maxStep));
      }
    }

    function handleCalibrate() {
        axios.post("http://127.0.0.1:5000//device_pairing").then((response) => {
            if (response.data.success) {
              setComport(response.data.comport_name);
              toast.success('Device paired!', {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            } else {
              toast.error(`${response.data.message}`, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            }
          }).catch((error) => {
            toast.error(`${error}`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000, // 3 seconds
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });    
          })    
    }

    function handleExercise() {
        navigate(`/exercise/${params.email}/${comPort}`)
    }
    

    const stepList = [
        {text: "Place the sleeve on your leg", img: ""}, 
        {text: "Press Calibrate button", img: ""}, 
        {text: "Plug USB into Computer", img: ""},
        {text: "Wait for success message", img: ""},
        {text: "Click Exercise button", img:""}]
  
    const progressBarFillWidth = `${(step / 5) * 100}%`;
    return (
      <div className="instructions-page">
        <h2 className='instructions-page-header'>Calibration Steps</h2>
        <div className="step-image">
          <img src={`step-${step}.png`} alt={`Step ${step}`} />
        </div>
        <div className="step-text">
          <p>{stepList[step-1].text}</p>
        </div>
        <div className="step-navigation">
            {step > 1  && <button
            className="prev-button"
            onClick={handlePrevClick}
            disabled={step === 1}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
            }
            <a className='step-number-text'>
            {`Step ${step} of 5`}
            </a>
            {step < 5 && 
          <button
            className="next-button"
            onClick={handleNextClick}
            disabled={step === maxStep}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>}
        </div>
        <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: progressBarFillWidth }} />
        </div>
        <div>
            {showCalibrateButton && <button className="buttons-instructions-page" onClick={() => handleCalibrate()}>
                    <a class="button-text-instructions">
                        Calibrate
                    </a>
                </button>
            }
            {showExerciseButton && <button className="buttons-instructions-page" onClick={() => handleExercise()}>
                    <a class="button-text-instructions">
                         Exercise
                    </a>
                </button>
            }
        </div>
      </div>
    );
  }
  
export default InstructionsPage;
