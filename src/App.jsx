import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import SubjectGrid from './Components/SubjectGrid';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-classes" element={<SubjectGrid />} />
    </Routes>
  )
}

export default App
