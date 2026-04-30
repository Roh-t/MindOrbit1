import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import BatchDetails from './Pages/BatchDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/batch' element={<BatchDetails/>}  />
    </Routes>
  )
}

export default App
