import React from "react";
import "../style/Contador.css"

function Contador({ contar }) {
  return (
    <div className="count">
      {contar}
    </div>
  );
}

export default Contador;