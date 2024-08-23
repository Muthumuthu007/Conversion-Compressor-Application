
import React, { useState } from 'react';
import './App.css';
import axios from 'axios';

function Pdf2Jpg() {
  const [origImage, setOrigImage] = useState(null); 
  const [origImageFile, setOrigImageFile] = useState("");
  const [compressedImage, setCompressedImage] = useState(""); 
  const [fileName, setFileName] = useState(""); 

  const handleImageChange = (e) => {
    const imageFile = e.target.files[0];
    setOrigImage(imageFile);
    setOrigImageFile(URL.createObjectURL(imageFile));
    setFileName(imageFile.name);
  };

  const handleCompressImage = async () => {
    const formData = new FormData();
    formData.append("file", origImage);
    formData.append("format", "jpg"); 
    try {
      const response = await axios.post(' http://3.143.222.88:8000/convert/file', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setCompressedImage(response.data.compressed_file_url);
    } catch (error) {
      console.error("There was an error compressing the image!", error);
    }
  };

  const handleDownloadImage = () => {
    const link = document.createElement("a");
    link.href = compressedImage;
    link.download = `compressed-${fileName}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="App">
      <h1 className="head">PDF to JPG Convertor</h1>
      <div className="form">
        <div className="grid-container">
          <div className="grid-item">
            <div className="image-container">
              {origImageFile ? (
                <img src={origImageFile} alt="Original" />
              ) : (
                <img src="https://st5.depositphotos.com/35914836/63547/i/450/depositphotos_635479512-stock-photo-brown-wooden-wall-texture-background.jpg" alt="Default" />
              )}
            </div>
          </div>
          <div className="grid-item button-container">
            <input
              type="file"
              accept="image/pdf"
              className="custom-file-input"
              onChange={handleImageChange}
            />
            <button onClick={handleCompressImage} className="custom-button">Compress Image</button>
            {compressedImage && <button onClick={handleDownloadImage} className="custom-button">Download Image</button>}
          </div>
          <div className="grid-item">
            <div className="image-container">
              {compressedImage ? (
                <img src={compressedImage} alt="Compressed" />
              ) : (
                <img src="https://st5.depositphotos.com/35914836/63547/i/450/depositphotos_635479512-stock-photo-brown-wooden-wall-texture-background.jpg" alt="Default" />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pdf2Jpg;
