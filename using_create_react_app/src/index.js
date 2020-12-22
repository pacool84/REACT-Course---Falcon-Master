import React from "react";
import ReactDOM from "react-dom";

const name = "Paco";
const setColor = "green";
const setColor2 = "red";
const sesion = true;
const country = "Mexico";

const codeJsx = (
  <>
    {sesion === true ? (
      <div>
        <h1 className='encabezado' style={{ color: setColor }}>
          Hello my friend REACT, You initialize sesion with the id {name}
        </h1>
        {country && (
          <p>
            Tu eres del país {country} La etiqueta p solo se renderizara en caso
            de que no sea NULL o UNDEFINED la variable "country"
          </p>
        )}
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
