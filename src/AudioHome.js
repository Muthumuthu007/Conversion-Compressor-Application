import React from 'react';
import './App.js';
import { useNavigate } from 'react-router-dom';

 function AudioHome(){
    const navigate = useNavigate(); 

  
  const handleRedirect = (path) => {
    navigate(path);
    
    
  };
    return(
        <div className='cont'>
            <h1><center>Select Conversion Type</center></h1>
            <div className='one' onClick={() => handleRedirect('/Mp32Wav')} >MP3 to WAV
            <p>Convert Your file from MP3 to WAV</p>
           </div>
           <div className='one' onClick={() => handleRedirect('/Wav2Mp3')}>WAV to MP3
            <p>Convert Your file from WAV to MP3</p>
           </div>
           <div className='one' onClick={() => handleRedirect('/Mp32Aac')} >MP3 to AAC
            <p>Convert Your file from MP3 to AAC</p>
           </div><br></br>
           <div className='one'onClick={() => handleRedirect('/Aac2Mp3')}  >AAC to MP3 
            <p>Convert Your file from AAC to MP3</p>
           </div>
           <div className='one'onClick={() => handleRedirect('/Wav2Aac')}  >WAV to AAC
            <p>Convert Your file from WAV to AAC</p>
           </div>
           <div className='one' onClick={() => handleRedirect('/Aac2Wav')} >AAC to WAV
            <p>Convert Your file from AAC to WAV</p>
           </div>
            

        </div>
    )
 }
 export default AudioHome;