import {
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Home";
import Payment from "./Payment";

import './App.scss';


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Payment />} />
      </Routes>
    </>
  );
}

export default App;
