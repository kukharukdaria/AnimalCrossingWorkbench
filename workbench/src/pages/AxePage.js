import React from 'react';
import { useNavigate } from "react-router-dom";

function AxePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Axes are sharp</h1>
      <button onClick={() => {
            navigate("/AnimalCrossingWorkbench/");
          }}>back</button>

    </div>
  );
}

export default AxePage;