import React, { useContext } from "react";
import { InputContext } from "../contexts/InputContext";

function Display() {
  const { mode } = useContext(InputContext);
  const { wavenumber } = useContext(InputContext);

  return (
    <div className="display">
      <h1>This is display</h1>

      <h3>Mode: {mode}</h3>

      <h3>Wavenumber: {wavenumber}</h3>
    </div>
  );
}

export default Display;
