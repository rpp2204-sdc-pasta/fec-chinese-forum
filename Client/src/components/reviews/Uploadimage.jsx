import React, { useState } from "react";
import axios from 'axios';

const Uploadimage = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imgUrl, setimgUrl] =useState([]);

  const imagestyle = {
    objectFit: 'cover',
    border: '0.5px solid #ddd',
    borderRadius: '50%',
    height: '30px',
    width: '30px',
    position: 'relative',
    zInder: 1
  }
  const removeImage =(e)=>{
    e.preventDefault()
    setSelectedImages(selectedImages.filter((item,index)=> {return index !== Number(e.target.id)}))
    }


  const handleMultiimage=(e)=>{
    setSelectedImages(prevState =>[...prevState, e.target.files[0]])
  }

  const handleUpload= (e) => {
    e.preventDefault();
    const fd = new FormData()
    selectedImages.forEach(imagefile=>{
      fd.append('image', imagefile);
    })
    console.log(fd, 'fdddddddddddddddddddddddd')
    return axios({
      method:'post',
      // url:'https://api.imgbb.com/1/upload?key=0c6337f450a2645ba037e6c8628add6e',
      headers: {'Content-Type': 'multipart/form-data'},
      url: '/images',
      data: fd,
    })
    .then((response)=>{
      console.log(response)
    })
    .catch((err)=>{
      console.log(err)
    })

    // setimgUrl(prevState =>[...prevState, ]])
    // console.log(data[0].data.data.url)
    // return data;
  }

  return (
    <div>
      <h3>Upload Images</h3>
      <div style={{display: 'flex', flexDirection:'row'}}>
          {selectedImages.length >0 && ( selectedImages.map((image,key)=>
            <div>
            <img alt="Review_image" style={imagestyle} src={URL.createObjectURL(image)} />
            <button id={key} type='submit' onClick={removeImage}>Remove</button>
            </div>
            )
          )}
      </div>
      <div style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
          {selectedImages.length <5 ?
          <input
          type="file"
          multiple
          name="myImage"
          onChange={handleMultiimage}
          /> : null
        }
        <button type='submit' style={{backgroundColor: 'red', height:'35px'}} onClick={handleUpload}>Upload</button>
      </div>
    </div>
  );
};

export default Uploadimage