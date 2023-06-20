import React, {useState} from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const pageSizeNum = 9;
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_NEWS_API

  const changeProgress = (progress) => {
    setProgress(progress);
  }

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress}
      />
        <Routes>
          <Route path="/" key="general" element={<News apiKey={apiKey} changeProgress={changeProgress} pageSize={pageSizeNum} country="in" category="general" />} />
          <Route path="/business" key="business" element={<News apiKey={apiKey} changeProgress={changeProgress} pageSize={pageSizeNum} country="in" category="business" />} />
          <Route path="/entertainment" key="entertainment" element={<News apiKey={apiKey} changeProgress={changeProgress} pageSize={pageSizeNum} country="in" category="entertainment" />} />
          <Route path="/health" key="health" element={<News apiKey={apiKey} changeProgress={changeProgress} pageSize={pageSizeNum} country="in" category="health" />} />
          <Route path="/science" key="science" element={<News apiKey={apiKey} changeProgress={changeProgress} pageSize={pageSizeNum} country="in" category="science" />} />
          <Route path="/sports" key="sports" element={<News apiKey={apiKey} changeProgress={changeProgress} pageSize={pageSizeNum} country="in" category="sports" />} />
          <Route path="/technology" key="technology" element={<News apiKey={apiKey} changeProgress={changeProgress} pageSize={pageSizeNum} country="in" category="technology" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

