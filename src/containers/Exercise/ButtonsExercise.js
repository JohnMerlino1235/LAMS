import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function ButtonsExercise() {
  const [showResultsButton, setShowResultsButton] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  function handleViewResults() {
    navigate(`/results/${params.email}`);
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
    return(
      <div className="buttons-home">
        <button className="button-style-home" onClick={() => handleStartExercise()}>
          <a class="button-text">
            Start Exercise
          </a>
      </button>
      {showResultsButton && <button className="button-style-home" onClick={() => handleViewResults()}>
          <a class="button-text">
            View Results
          </a>
      </button>
      }
      </div>
    )
}

export default ButtonsExercise;