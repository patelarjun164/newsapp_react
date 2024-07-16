import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {
  general as generalData,
  business as businessData,
  entertainment as entertainmentData,
  health as healthData,
  science as scienceData,
  sports as sportsData,
  technology as technologyData,
} from "./hardcodedData/general-data";

function App() {
  const general = generalData;
  const business = businessData;
  const entertainment = entertainmentData;
  const health = healthData;
  const science = scienceData;
  const sports = sportsData;
  const technology = technologyData;

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
          <Route
            path="/"
            key="general"
            element={<News apiKey={apiKey}
              changeProgress={changeProgress}
              pageSize={pageSizeNum}
              country="in"
              category="general"
              hrdsrc={general} />} />
          <Route
            path="/business"
            key="business"
            element={<News apiKey={apiKey}
              changeProgress={changeProgress}
              pageSize={pageSizeNum}
              country="in"
              category="business"
              hrdsrc={business}
               />} />
          <Route
            path="/entertainment"
            key="entertainment"
            element={<News
              apiKey={apiKey}
              changeProgress={changeProgress}
              pageSize={pageSizeNum}
              country="in"
              category="entertainment"
              hrdsrc={entertainment}
               />} />
          <Route
            path="/health"
            key="health"
            element={<News
              apiKey={apiKey}
              changeProgress={changeProgress}
              pageSize={pageSizeNum}
              country="in"
              category="health"
              hrdsrc={health}
               />} />
          <Route path="/science"
            key="science"
            element={<News
              apiKey={apiKey}
              changeProgress={changeProgress}
              pageSize={pageSizeNum}
              country="in"
              category="science"
              hrdsrc={science}
               />} />
          <Route path="/sports"
            key="sports"
            element={<News
              apiKey={apiKey}
              changeProgress={changeProgress}
              pageSize={pageSizeNum}
              country="in"
              category="sports"
              hrdsrc={sports}
               />} />
          <Route path="/technology" key="technology"
            element={<News
              apiKey={apiKey}
              changeProgress={changeProgress}
              pageSize={pageSizeNum} country="in"
              category="technology"
              hrdsrc={technology}
               />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

