import React from 'react';
import './App.js';
import { useNavigate } from 'react-router-dom';

 function VideoHome(){
    const navigate = useNavigate(); 

  
  const handleRedirect = (path) => {
    navigate(path);
    
    
  };
    return(
        <div className='cont'>
            <h1><center>Select Conversion Type</center></h1>
            <div className='one' onClick={() => handleRedirect('/One')} >MP4 to MOV
            <p>Convert Your file from MP4 to MOV</p>
           </div>
           <div className='one' onClick={() => handleRedirect('/Two')}>MP4 to AVI
            <p>Convert Your file from MP4 to AVI</p>
           </div>
           <div className='one' onClick={() => handleRedirect('/Three')} >MP4 to MKV
            <p>Convert Your file from MP4 to MKV</p>
           </div><br></br>
           <div className='one'onClick={() => handleRedirect('/Four')}  >MOV to MP4 
            <p>Convert Your file from MOV to MP4 </p>
           </div>
           <div className='one'onClick={() => handleRedirect('/Five')}  >MOV to AVI
            <p>Convert Your file from MOV to AVI</p>
           </div>
           <div className='one' onClick={() => handleRedirect('/Six')} >MOV to MKV
            <p>Convert Your file from MOV to MKV</p>
           </div>
           <div className='one' onClick={() => handleRedirect('/Seven')} >AVI to MP4
            <p>Convert Your file from AVI to MP4</p>
           </div>
           <div className='one' onClick={() => handleRedirect('/Eight')} >AVI to MOV
            <p>Convert Your file from AVI to MOV</p>
           </div>
           <div className='one' onClick={() => handleRedirect('/Nine')} >AVI to MKV
            <p>Convert Your file from AVI to MKV</p>
           </div>
           <div className='one' onClick={() => handleRedirect('/Ten')} >MKV to MP4
            <p>Convert Your file from MKV to MP4</p>
           </div>
           <div className='one' onClick={() => handleRedirect('/Eleven')} >MKV to MOV
            <p>Convert Your file from MKV to MOV</p>
           </div>
           <div className='one' onClick={() => handleRedirect('/Twelve')} >MKV to AVI
            <p>Convert Your file from MKV to AVI</p>
           </div>

            

        </div>
    )
 }
 export default VideoHome;