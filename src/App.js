import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Auth from "./Pages/Auth";
import Testing from "./Pages/test/Aps.jsx"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/hay" element={<Testing />} />
          </>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

