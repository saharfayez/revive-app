import React from "react";
import { useState, useEffect } from "react";
import Preloader from "./components/Preloader/Preloader";
import "./App.css";
//import "./components/Styles/styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./components/pages/Main"
import ApiPage from "./components/pages/ApiPage";


  


function App() {
  const [loading, setLoading] = useState(true);
   const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Change the timeout value according to your requirement
  }, []);
  return (
    <div className="app">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Router>
            <Routes>
              <Route path="/" element={<Main/>} />
              <Route path="/ApiPage" element={<ApiPage />} />
            </Routes>
          </Router>
        </>
      )}
    </div>
  );
}

export default App;
