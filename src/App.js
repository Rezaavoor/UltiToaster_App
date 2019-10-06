import React from "react";
import "./App.css";
import styled from "styled-components";

import Navbar from "./Components/Navbar";
import Toasts from "./Components/Toast/Toasts";
import Infobar from "./Components/Infobar/Infobar";
import Orderbox from "./Components/Orderbox/Orderbox";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Toasts />
      <Infobar />
      <Orderbox />
    </div>
  );
}

export default App;
