/* en el codigo, se muestra como se renderiza el componente principal de una aplicacion en react utilizando jsx */
/* el codigo utiliza ReactDOM para renderizar el componente App en el elemento con el id "root" del documento html */

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
/* en el codigo se importa las bibliotecas necesarias, como React y ReactDOM, junto con el componente App y un archivo de estilos */
/* luego, se utiliza ReactDOM.createRoot para seleccionar el elemento con el id 'root' y renderizar el componente App dentro de un <React.StrictMode> */

/* en este fragmento de codigo, se crea un "root" a traves de ReactDOM.createRoot y se renderiza el componente <App /> dentro de un <React.StrictMode> */
/* esto garantiza que la aplicacion se ejecute en modo estricto, lo que ayuda a identificar problemas potenciales en el codigo y a mantener buenas practicas */
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
