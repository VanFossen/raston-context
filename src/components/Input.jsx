import React, { useContext } from "react";
import { InputContext } from "../contexts/InputContext";

function Input() {
  const { mode, setMode } = useContext(InputContext);
  const { wavenumber, setWavenumber } = useContext(InputContext);

  return (
    <div className="input">
      <h1>This is input</h1>

      <label htmlFor="mode">Mode</label>
      <select
        id="mode"
        defaultValue={mode}
        onChange={(e) => {
          setMode(e.target.value);
        }}
      >
        <option value="absorbance">Absorbance</option>
        <option value="radiance">Radiance</option>
        <option value="transmittance_noslit">Transmittance</option>
      </select>

      <label htmlFor="wavenumber">Wavenumber</label>
      <input
        id="wavenumber"
        type="number"
        defaultValue={wavenumber}
        min={100}
        max={200}
        onChange={(e) => {
          setWavenumber(e.target.value);
        }}
      ></input>
    </div>
  );
}

export default Input;
