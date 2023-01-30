import React, { useEffect } from 'react';
import './App.css';
import Routes from "./router/Routes"
import ScrollToTop from "./components/ScrollToTop"
import AOS from "aos"
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <ScrollToTop />
      <Routes />
    </>
  );
}

export default App;
