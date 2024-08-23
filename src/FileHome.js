import React from 'react';
import './App.js';
import { useNavigate } from 'react-router-dom';

 function HomeFile(){
    const navigate = useNavigate(); 

  
  const handleRedirect = (path) => {
    navigate(path);
    
    
  };
    return(
        <div className='cont'>
            <h1><center>Select Conversion Type</center></h1>
            <div className='one' onClick={() => handleRedirect('/Jpg2Png')} >JPG to PNG
            <p>Convert Your file from JPG to PNG</p>
           </div>
           <div className='one' onClick={() => handleRedirect('/Png2Jpg')}>PNG to JPG
            <p>Convert Your file from PNG to JPG</p>
           </div>
           <div className='one' onClick={() => handleRedirect('/Png2Pdf')} >PNG to PDF
            <p>Convert Your file from PNG to PDF</p>
           </div><br></br>
           <div className='one'onClick={() => handleRedirect('/Jpg2Pdf')}  >JPG to PDF 
            <p>Convert Your file from JPG to PDF</p>
           </div>
           <div className='one'onClick={() => handleRedirect('/Pdf2Jpg')}  >PDF to JPG
            <p>Convert Your file from PDF to JPG</p>
           </div>
           <div className='one' onClick={() => handleRedirect('/Pdf2Png')} >PDF to PNG
            <p>Convert Your file from PDF to PNG</p>
           </div>
            

        </div>
    )
 }
 export default HomeFile;