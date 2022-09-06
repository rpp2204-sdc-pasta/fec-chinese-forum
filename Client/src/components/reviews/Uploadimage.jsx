import React, { useState } from "react";
import axios from 'axios';

const Uploadimage = (props) => {
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


  const imageProgress =() =>{


  }

  async function handleUpload(e){
    e.preventDefault();
    let results = [];
    let imageUrl = [];
    const options = {onUploadProgress: (progressEvent) =>{
      const {loaded, total} = progressEvent;
      let percent = Math.floor(loaded * 100 / total)
      console.log(`${loadded}kb of ${total}kb| ${percent}% `)
      }
    }
    const fd = new FormData()
    selectedImages.forEach(imagefile=>{
      fd.append('image', imagefile);
      let response = axios.post('https://api.imgbb.com/1/upload?key=0c6337f450a2645ba037e6c8628add6e',
        fd,
        {headers: { 'Content-Type': 'multipart/form-data'}},
        options)
      .catch((err)=>{
        console.log(err)
      })
      results.push(response);
    })
    let data = await Promise.all(results);
    data.map(item=>{
      imageUrl.push(item.data.data.url)
    })
    props.onChange(imageUrl)
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