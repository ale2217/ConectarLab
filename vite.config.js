/* en este codigo, se muestra la configuracion de Vite con React */
/* Vite es una herramienta de construccion web rapida que se integra perfectamente con React para el desarrollo de aplicaciones web modernas */


import { defineConfig } from 'vite'
/* defineConfig: función utilizada para definir la configuracion de Vite */
import react from '@vitejs/plugin-react'
/* @vitejs/plugin-react: plugin de Vite que permite la integracion con React */

/* el codigo, en cuestion, importa la funcion defineConfig de Vite y el plugin de React desde @vitejs/plugin-react
luego, exporta la configuración de Vite que incluye el plugin de React en la lista de plugins */

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  /* react: biblioteca de javascript para construir interfaces de usuario */
})
