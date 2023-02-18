import React, { useEffect } from 'react';
import './App.css';
import Routes from "./router/Routes"
import ScrollToTop from "./components/main/ScrollToTop"
import AOS from "aos"
import "aos/dist/aos.css"
import Chatbox from './components/main/Chatbot';

function App() {

  useEffect(() => {
    AOS.init();
  }, []);
  
  return (
    <>
      <Chatbox />
      <ScrollToTop />
      <Routes />
    </>
  );
}

export default App;
