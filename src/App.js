import React, { useState } from "react";
import "./App.css";
import { DataProvider } from "./Context/DataContext";

import Navbar from "./Components/Navbar";
import Toasts from "./Components/Toast/Toasts";
import Infobar from "./Components/Infobar/Infobar";
import Orderbox from "./Components/Orderbox/Orderbox";

function App() {
  const [data, setData] = useState({
    timer: 50,
    breadCount: 0
  });
  return (
    <DataProvider value={[data, setData]}>
      <div className='App'>
        <Navbar />
        <Toasts />
        <Infobar />
        <Orderbox />
      </div>
    </DataProvider>
  );
}

export default App;
