import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import results from './shaun.gentitlin@gmail.com.png';


function UserResults() {
  const params = useParams();
  const [imageUrl, setImageUrl] = useState();
  const [showImageButton, setShowImageButton] = useState(true);

  const getImagePicture = () => {
    axios.get(`http://127.0.0.1:5000//get_image/${params.email}`, { responseType: 'blob' })
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
        setShowImageButton(false);
        setImageUrl(imageUrl);
      })
      .catch(error => {
        console.error(error);
      });
  }

  const createImage = () => {
    axios.post('http://127.0.0.1:5000//get_data', {email: params.email})
    .then(response => {
      if (response.data.success) {
        setShowImageButton(true);
        toast.success('Graph created!', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
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
        createImage()
    }
  }, [params.email])

  return(
        <div>
        {showImageButton && <button className="button-style-results" onClick={getImagePicture}>View Results</button>}
        {imageUrl && <img style={{width: 400, height: 300}}src={imageUrl} alt="image" />}
        </div>

    )
}

export default UserResults;
