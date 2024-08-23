import './App.css';
import Homepage from './Homepage';
import FileHome from './FileHome';
import Comp from './Comp';
import Jpg2Png from './Jpg2Png';
import Png2Jpg from './Png2Jpg';
import Png2Pdf from './Png2Pdf';
import Jpg2Pdf from './Jpg2Pdf';
import Pdf2Jpg from './Pdf2Jpg';
import Pdf2Png from './Pdf2Png';
import VideoHome from './VideoHome';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Six from './Six';
import Seven from './Seven';
import Eight from './Eight';
import Nine from './Nine';
import Ten from './Ten';
import Eleven from './Eleven';
import Twelve from './Twelve';
import AudioHome from './AudioHome';
import Mp32Wav from './Mp32Wav';
import Wav2Mp3 from './Wav2Mp3';
import Mp32Aac from './Mp32Aac';
import Aac2Mp3 from './Aac2Mp3';
import Wav2Aac from './Wav2Aac';
import Aac2Wav from './Aac2Wav';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="App">
          <Helmet>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>My Website</title>
          </Helmet>
          <header className="App-header">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/Comp" element={<Comp />} />
              <Route path="/FileHome" element={<FileHome />} />
              <Route path="/Jpg2Png" element={<Jpg2Png />} />
              <Route path="/Png2Jpg" element={<Png2Jpg />} />
              <Route path="/Png2Pdf" element={<Png2Pdf />} />
              <Route path="/Jpg2Pdf" element={<Jpg2Pdf />} />
              <Route path="/Pdf2Jpg" element={<Pdf2Jpg />} />
              <Route path="/Pdf2Png" element={<Pdf2Png />} />
              <Route path="/VideoHome" element={<VideoHome />} />
              <Route path="/One" element={<One />} />
              <Route path="/Two" element={<Two/>} />
              <Route path="/Three" element={<Three />} />
              <Route path="/Four" element={<Four />} />
              <Route path="/Five" element={<Five />} />
              <Route path="/Six" element={<Six />} />
              <Route path="/Seven" element={<Seven />} />
              <Route path="/Eight" element={<Eight />} />
              <Route path="/Nine" element={<Nine />} />
              <Route path="/Ten" element={<Ten />} />
              <Route path="/Eleven" element={<Eleven />} />
              <Route path="/Twelve" element={<Twelve />} />
              <Route path="/AudioHome" element={<AudioHome />} />
              <Route path="/Mp32Wav" element={<Mp32Wav/>}/>
              <Route path='/Wav2Mp3' element={<Wav2Mp3/>}/>
              <Route path='/Mp32Aac' element={<Mp32Aac/>}/>
              <Route path='/Aac2Mp3' element={<Aac2Mp3/>}/>
              <Route path='/Wav2Aac' element={<Wav2Aac/>}/>
              <Route path='/Aac2Wav' element={<Aac2Wav/>}/>
            </Routes>
          </header>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
