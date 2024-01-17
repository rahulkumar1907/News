import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  const apiKey = process.env.REACT_APP_API_KEY;
  const pageSize = 9;
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="general" pageSize={pageSize} apiKey={apiKey} country="in" category="general" />} />
          <Route path="/business" element={<News key="business" pageSize={pageSize} apiKey={apiKey} country="in" category="business" />} />
          <Route path="/sports" element={<News key="sports" pageSize={pageSize} apiKey={apiKey} country="in" category="sports" />} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize={pageSize} apiKey={apiKey} country="in" category="entertainment" />} />
          <Route path="/technology" element={<News key="technology" pageSize={pageSize} apiKey={apiKey} country="in" category="technology" />} />
          <Route path="/health" element={<News key="health" pageSize={pageSize} apiKey={apiKey} country="in" category="health" />} />
          <Route path="/science" element={<News key="science" pageSize={pageSize} apiKey={apiKey} country="in" category="science" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
