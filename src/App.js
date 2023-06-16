import React from 'react';
import Navbar from './Components/Navbar';
import News from './Components/News';
function App() {
  return (
    <div>
      <Navbar/>
      <News pageSize={12} country="in" category="science" />
    </div>
  );
}
export default App;

