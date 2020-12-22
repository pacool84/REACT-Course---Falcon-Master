import React from "react";
import ReactDOM from "react-dom";

const name = "Paco";
const setColor = "red";
const setColor2 = "blue";
const codeJsx = (
  <div>
    <h1 className='encabezado' style={{ color: setColor }}>
      Hello my friend REACT, from your dear {name}
    </h1>
    <p className='parrafo' style={{ color: setColor2 }}>
      Remember to render only one element
    </p>
  </div>
);

ReactDOM.render(codeJsx, document.getElementById("root"));
