import React from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" key="general" element={<News pageSize={6} country="in" category="general" />} />
          <Route path="/business" key="business" element={<News pageSize={6} country="in" category="business" />} />
          <Route path="/entertainment" key="entertainment" element={<News pageSize={6} country="in" category="entertainment" />} />
          <Route path="/health" key="health" element={<News pageSize={6} country="in" category="health" />} />
          <Route path="/science" key="science" element={<News pageSize={6} country="in" category="science" />} />
          <Route path="/sports" key="sports" element={<News pageSize={6} country="in" category="sports" />} />
          <Route path="/technology" key="technology" element={<News pageSize={6} country="in" category="technology" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;

