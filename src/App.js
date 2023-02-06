import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import Appbar from "./Appbar";

function App() {
  return (
    <div className="App">
      <div classname="header">
        <Appbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
