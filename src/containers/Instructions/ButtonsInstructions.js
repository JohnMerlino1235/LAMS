import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function ButtonsInstructons() {
  const [comPort, setComport] = useState('');
  const params = useParams()
  const navigate = useNavigate();

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

  return(
        <div className="buttons-home">
        <button className="button-style-home" onClick={() => handleCalibrate()}>
          <a class="button-text">
            Calibrate
          </a>
        </button>
        {comPort &&  <button className="button-style-home" onClick={() => handleExercise()}>
          <a class="button-text">
            Exercise
          </a>
        </button>
        }
      </div>
    )
}

export default ButtonsInstructons;