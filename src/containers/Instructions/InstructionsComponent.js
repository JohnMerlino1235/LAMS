import React, { useState, useEffect } from 'react';
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import pluggedInUSB from './pluggedInUSB.jpg';
import powerBank from './powerBank.png';
import sleeve from './sleeve.png';
import unpluggedUSB from './unpluggedUSB.jpg';


function InstructionsPage() {
    const [step, setStep] = useState(1);
    const maxStep = 6;
    const [showCalibrateButton, setShowCalibrateButton] = useState(false);
    const [showExerciseButton, setShowExerciseButton] = useState(false);
    const [comPort, setComport] = useState('');
    const params = useParams()
    const navigate = useNavigate();  

    useEffect(() => {
        if (step === 4) {
            setShowCalibrateButton(true);
        } else if(step === 6) {
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
      if (nextStep === 5 && !comPort) {
        setComport('COM5');
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
        {text: "Place the sleeve on your leg", img: sleeve}, 
        {text: "Plug in sleeve to power bank", img: powerBank}, 
        {text: "Make sure USB is unplugged", img: unpluggedUSB}, 
        {text: "Press Calibrate and then plug in USB", img: pluggedInUSB}, 
        {text: "Wait for success message", img: sleeve},
        {text: "Click Exercise button", img: sleeve},         
      ];
  
    const progressBarFillWidth = `${(step / 6) * 100}%`;

    return (
      <div className="instructions-page">
        <h2 className='instructions-page-header'>Calibration Steps</h2>
        <div className="step-image">
          <img src={`${stepList[step-1].img}`} alt={`Step ${step}`} />
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
            {`Step ${step} of 6`}
            </a>
            {step < 6 && 
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
