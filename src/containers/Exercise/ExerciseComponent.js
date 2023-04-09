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

function ExerciseComponent() {
    const [step, setStep] = useState(1);
    const maxStep = 5;
    const [showExerciseButton, setShowExerciseButton] = useState(false);
    const [showResultsButton, setShowResultsButton] = useState(false);
    const [comPort, setComport] = useState('');
    const params = useParams()
    const navigate = useNavigate();  

    useEffect(() => {
        if (step === 2) {
            setShowExerciseButton(true);
        } else if(step === 5) {
            setShowResultsButton(true);
        } else {
            setShowResultsButton(false);
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

    function handleStartExercise() {
        axios.post("http://127.0.0.1:5000//read_data", {
          com_port: params.comPort,
        }).then((response) => {
          if (response.data.success) {
            toast.success('Data received! Filtering data...you can stop exercising', {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            axios.post("http://127.0.0.1:5000//data_filter", {
              data_list: response.data.data,
              email: params.email,
            }).then((response) => {
              if (response.data.success) {
                setShowResultsButton(true);
                toast.success('Data filtered!', {
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
    
    function handleViewResults() {
        navigate(`/results/${params.email}`);
    }

    const stepList = [
        {text: "Familiarize yourself with the above exercise", img: ""}, 
        {text: "Click Start Exercise button", img: ""}, 
        {text: "Begin Exercising for 30 seconds", img: ""}, 
        {text: "Wait for success message", img: ""},
        {text: "Click View Results button", img:""}]
  
    const progressBarFillWidth = `${(step / 5) * 100}%`;
    return (
      <div className="instructions-page">
        <h2 className='instructions-page-header'>Exercise Steps</h2>
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
            {showExerciseButton && <button className="buttons-instructions-page" onClick={() => handleStartExercise()}>
                    <a class="button-text-instructions">
                        Start Exercise
                    </a>
                </button>
            }
            {showResultsButton && <button className="buttons-instructions-page" onClick={() => handleViewResults()}>
                    <a class="button-text-instructions">
                        View Results
                    </a>
                </button>
            }
        </div>
      </div>
    );
  }
  
export default ExerciseComponent;
