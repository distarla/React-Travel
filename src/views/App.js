import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'

import Navbar from "../components/Navbar";
import Content from "./Content";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar></Navbar>s
        <Content></Content>
      </Router>
    </div>
  );
}

export default App;
