import "./App.css";
import { Route, Routes } from "react-router-dom";
import Input from "./components/Input";
import Display from "./components/Display";
import Navbar from "./components/Navbar";
import { InputContext } from "./contexts/InputContext";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("absorbance");
  const [wavenumber, setWavenumber] = useState(123);

  return (
    <div className="App">
      <Navbar />

      <InputContext.Provider
        value={{ mode, setMode, wavenumber, setWavenumber }}
      >
        <Routes>
          <Route path="/" element={<Input />} />
          <Route path="/display" element={<Display />} />
        </Routes>
      </InputContext.Provider>
    </div>
  );
}

export default App;
