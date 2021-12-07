import React from 'react';
import Home from './pages/Home';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from './components/Search';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/search" element={<Search/>}>
            <h1>This is the search page</h1>
          </Route>
          <Route path="/" element={<Home/>}>
            <Home />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
