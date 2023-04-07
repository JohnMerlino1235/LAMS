import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function UserResults() {
  const params = useParams()
  const [imageUrl, setImageUrl] = useState('');

  const getImage = () => {
    axios.post('http://127.0.0.1:5000//get_data', {email: params.email})
    .then(response => {
      if (response.data.success) {
        axios.post(`http://127.0.0.1:5000//get_image/${params.email}`, { responseType: 'blob', })
        .then(response => {
            const imageUrl = URL.createObjectURL(response.data);
            setImageUrl(imageUrl);
            console.log(imageUrl);
          toast.success('Results generated!', {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });  
        })
        .catch(error => {
          console.log(error);
          toast.error(`${error}`, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000, // 3 seconds
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });        
        });  
      }
    }).catch(error => {
      toast.error(`${error}`, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 3000, // 3 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });        
    });
  }

  useEffect(() => {
    if (params.email) {
        getImage()
    }
  }, [params.email])

  return(
        <div className="buttons-home">
            {imageUrl ? <img src={imageUrl} alt={imageUrl} /> : <h2 title='Loading'/> }
      </div>
    )
}

export default UserResults;
