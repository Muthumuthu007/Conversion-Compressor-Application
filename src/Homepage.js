import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';

function Homepage() {
  const navigate = useNavigate(); 

  
  const handleRedirect = (FileHome) => {
    navigate(FileHome);
  };

  return (
    <div className='over'>
      <div className='Head'>Welcome!</div>
      <div className='first'>
        <div className='gap'>
          <div className='com' onClick={() => handleRedirect('/FileHome')}>
            <h1>File Converter</h1>
            <p>Converts into Jpg, Png, Pdf, Jpg, Png</p>
          </div>
          <div className='com' onClick={() => handleRedirect('/VideoHome')}>
            <h1>Video Converter</h1>
            <p>Converts into Mp4, Mov, Avi, Mkv, Mp4</p>
          </div>
        </div>
        <div className='com' onClick={() => handleRedirect('/AudioHome')}>
          <h1>Audio Converter</h1>
          <p>Converts into Mp3, Wav, Acc</p>
        </div>
        <div className='com' onClick={() => handleRedirect('/Comp')}>
          <h1>Compressor</h1>
          <p>MP4, MOV, AVI, MKV, JPG</p>
          <p>JPEG, PNG, GIF, MAV, MP3, PDF</p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
