import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import Programs from './Pages/Programs';
import Blog from './Pages/Blog';
import Contact from './Pages/Contact';
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Loader from './Components/Loader'; // 👈 your loader component

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  // Simulate loading on route change
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 800); // 800ms fake load

    return () => clearTimeout(timeout);
  }, [location]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container-fluid">
          <div className="row">
            <Navigation />
          </div>

          <div className="row">
            <Routes>
              <Route path="/Fitness-Training-Business/home" element={<Home />} />
              <Route path="/Fitness-Training-Business/programs" element={<Programs />} />
              <Route path="/Fitness-Training-Business/blog" element={<Blog />} />
              <Route path="/Fitness-Training-Business/contact" element={<Contact />} />
            </Routes>
          </div>

          <div className="row">
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
