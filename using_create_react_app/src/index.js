import React from "react";
import ReactDOM from "react-dom";

const name = "Paco";
const setColor = "green";
const setColor2 = "red";
const sesion = false;

const codeJsx = (
  <>
    {sesion === true ? (
      <div>
        <h1 className='encabezado' style={{ color: setColor }}>
          Hello my friend REACT, You initialize sesion with the id {name}
        </h1>
      </div>
    ) : (
      <h1 style={{ color: setColor2 }}>No has iniciado sesion :(</h1>
    )}
  </>
);

/* const verificarSesion = () => {
  if (sesion) {
    return codeJsx;
  } else {
    return <h1 style={{ color: setColor2 }}>No has iniciado la sesion :(</h1>;
  }
};
 */
ReactDOM.render(codeJsx, document.getElementById("root"));
