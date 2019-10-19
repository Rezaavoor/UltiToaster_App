import React, { useState } from "react";
import "./App.css";
import { DataProvider } from "./Context/DataContext";

import Navbar from "./Components/Navbar";
import Toasts from "./Components/Toast/Toasts";
import Infobar from "./Components/Infobar/Infobar";
import Orderbox from "./Components/Orderbox/Orderbox";
import Order from "./Components/OrderModal/Order";

import moment from "moment";

function App() {
  const [data, setData] = useState({
    timer: 50,
    breadCount: 0,
    order: {
      state: "", // "":no order yet, "toast":order now, "schedule":show schedule modal
      date: moment().format("MM/DD H:m")
    }
  });

  return (
    <DataProvider value={[data, setData]}>
      <div className="App">
        <Navbar />
        <Toasts />
        <Infobar />
        <Orderbox />
        <Order />
      </div>
    </DataProvider>
  );
}

export default App;
