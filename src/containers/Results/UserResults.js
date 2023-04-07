import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function UserResults() {
  const params = useParams()
  const [imageUrl, setImageUrl] = useState();

  const getImage = () => {
    axios.get('/get_image', { responseType: 'blob', email: params.email })
      .then(response => {
        const imageUrl = URL.createObjectURL(response.data);
        setImageUrl(imageUrl);
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
            {imageUrl ? <img src={imageUrl} alt={'cantFindImage'} /> : <h2 title='Loading'/> }
      </div>
    )
}

export default UserResults;
