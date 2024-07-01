/*este codigo importa los componentes y bibliotecas necesarios para una aplicacion react
y los exporta para que puedan ser utilizados en otros archivos */

import React, { useState } from 'react';
/* esta linea importado la biblioteca 'react' y el gancho 'useState' del modulo 'react'
el gancho 'useState' es una función que nos permite crear un estado en un componente */
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
/* tambien importa los componentes 'Dialog', 'DialogTitle' y 'DialogContent' del módulo '@mui/material'
estos componentes nos permiten crear un dialogo en nuestra aplicacion */
import Calendar from 'react-calendar';
/* ademas, importa el componente 'Calendar' del modulo 'react-calendar' y el archivo CSS para diseñar el calendario
estos componente nos permite mostrar un calendario interactivo en nuestra aplicacion */
import 'react-calendar/dist/Calendar.css';
import { es } from 'date-fns/locale';
/* Finalmente, esta importando la configuracion regional 'es' del módulo 'date-fns/locale', que configura el idioma español para el calendario */


/* este es un componente reutilizable que muestra un calendario en un cuadro de dialogo modal
permite al usuario seleccionar una fecha y notifica al componente principal cuando se hace clic en una fecha */
const CalendarModal = ({ open, onClose, onDateClick }) => {
  /* open: un booleano que indica cuando el modal esta abierto */
    const handleDateClick = (date) => {
    onDateClick(date);
    /* Cuando se hace clic en una fecha, se llama a onDateClick esta funcion seleccionada una fecha como argumento */
    onClose();
    /* funcion para cerrar el modal */
  };
  const tileDisabled = ({ date, view }) => {
    /* funcion para determinar si una fecha esta deshabilitada */
    if (view === 'month') {
      /* en esta funcion se deshabilita las fechas anteriores a hoy y no se puede hacer clic en ellas */
      return date < new Date().setHours(0, 0, 0, 0);
    }
    return false;
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Seleccione una Fecha</DialogTitle>
      /* se define un título "seleccione una fecha" y un area de contenido que muestra el calendario */
      <DialogContent>
        <Calendar onClickDay={handleDateClick} locale='es'  tileDisabled={tileDisabled}/>
        /* el calendario se muestra en español con el comando locale='es' */
      </DialogContent>
    </Dialog>
  );
};

export default CalendarModal;
