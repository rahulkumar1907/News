import React from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {
  const pageSize = 9;
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key="general" pageSize={pageSize} country="in" category="general" />} />
          <Route path="/business" element={<News key="business" pageSize={pageSize} country="in" category="business" />} />
          <Route path="/sports" element={<News key="sports" pageSize={pageSize} country="in" category="sports" />} />
          <Route path="/entertainment" element={<News key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
          <Route path="/technology" element={<News key="technology" pageSize={pageSize} country="in" category="technology" />} />
          <Route path="/health" element={<News key="health" pageSize={pageSize} country="in" category="health" />} />
          <Route path="/science" element={<News key="science" pageSize={pageSize} country="in" category="science" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
