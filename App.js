import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import ColorList from "./ColorList";
import ColorDetail from "./ColorDetail";
import ColorForm from "./ColorForm";
import "./App.css";
// import NotFound from "./NotFound";

function App() {
  return (
    <Router>
      <Navbar /> {/* Include the Navbar component */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/colors" element={<ColorList />} />
        <Route path="/colors/new" element={<ColorForm />} />
        <Route path="/colors/:color" element={<ColorDetail />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
