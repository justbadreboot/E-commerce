import React from 'react';
import './App.css';
import Routes from "./router/Routes"
import ScrollToTop from "./components/ScrollToTop"

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes />
    </>
  );
}

export default App;
