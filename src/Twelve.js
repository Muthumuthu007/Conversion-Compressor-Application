import React, { useState } from 'react';
import axios from 'axios';

const Twelve = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [conversionStatus, setConversionStatus] = useState('');
    const [convertedFileUrl, setConvertedFileUrl] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
        setConversionStatus('');  
        setConvertedFileUrl(null); 
    };

    const handleFileConversion = async () => {
        if (!selectedFile) {
            setConversionStatus('Please select a file to convert.');
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);
        formData.append('format', 'avi');  

        try {
            setConversionStatus('Converting...');

            const response = await axios.post('http://3.143.222.88:8000/convert/video', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            setConversionStatus('Conversion successful!');
            setConvertedFileUrl(response.data.converted_file_url);
            console.log('Success:', response.data);
        } catch (error) {
            setConversionStatus('Conversion failed. Please try again.');
            console.error('Error:', error.response?.data || error.message);
        }
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '10px', }}> <h1>MKV  to AVI Converter</h1>
        <div className='com1'>
           
            <div  className='vijay'>
            <input type="file" onChange={handleFileChange} />
            <br /><br />

            <button onClick={handleFileConversion} disabled={!selectedFile} className='custom-button '>
                Convert to AVI
            </button>

            <br /><br />
            <p>{conversionStatus}</p>

            {convertedFileUrl && (
                <div>
                    <p>Download your converted file: <a href={convertedFileUrl} download>Click here</a></p>
                    <video src={convertedFileUrl} controls style={{ width: '300px', marginTop: '20px' }} />
                </div>
            )}
            </div>
        </div>
        </div>
    );
};

export default Twelve;
