import React, { useState } from "react";

import axios from "axios";

function TestImageComponent() {
    const [imageUrl, setImageUrl] = useState('');

    const getImage = () => {
      axios.get('/get_image', { responseType: 'blob' })
        .then(response => {
          const imageUrl = URL.createObjectURL(response.data);
          setImageUrl(imageUrl);
        })
        .catch(error => {
          console.error(error);
        });
    }
  
    return (
      <div>
        <button onClick={getImage}>Get Image</button>
        {imageUrl && <img src={imageUrl} alt="image" />}
      </div>
    );
  }

export default TestImageComponent;
