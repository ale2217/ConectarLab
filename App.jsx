// en esta aplicacion, se presenta un formulario de inscripcion que utiliza un calendario interactivo para seleccionar la fecha y hora de la inscripcion //
// la aplicacion esta desarrollada en jsx, un lenguaje de programacion utilizado para crear interfaces de usuario en react //


/* importaciones: el codigo comienza importando los modulos necesarios para la aplicacion, como react, useState y los components personalizados */
import React, { useState } from 'react';
import { Button, Container } from '@mui/material';
import CalendarModal from './components/CalendarModal';
import HorarioForm from './components/HorarioForm';
import FormModal from './components/FormModal'
import './App.css';

/* components: Los components son bloques de construccion reutilizables en react. pueden contener logica y representacion visual para la aplicacion, y se utilizan para construir la interfaz de usuario de la aplicacion */

/* useState: useState es un hook de react que permite agregar estado a los componentes funcionales de la aplicacion. permite almacenar y actualizar valores en el estado de la aplicacion */

/* function App: es el componente principal de la aplicacion. aqui es donde se define la estructura y el comportamiento de la interfaz de usuario */
function App() {
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [horarioFormOpen, setHorarioFormOpen] = useState(false);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHorario, setSelectedHorario] = useState(null)
  const [currentForm, setCurrentForm] = useState(null);
/* estado: el componente que App utiliza en el hook useState para definir varias variables de estado, como calendarOpen, horarioFormOpen, formModalOpen, selectedDate, selectedHorario y currentForm
estas variables de estado se utilizan para controlar la apertura y cierre de los componentes modales y para almacenar la fecha y hora seleccionadas */

/* manejo de eventos: El codigo tambien incluye varias funciones de manejo de eventos, como handleCalendarOpen, handleCalendarClose, handleDateClick, handleHorarioFormClose, handleTimeSlotConfirm y handleFormModalClose
estas funciones se utilizan para controlar el comportamiento de la aplicacion cuando se interactua con el calendario y los formularios */
  const handleCalendarOpen = (form) => {
    setCurrentForm(form);
    setCalendarOpen(true);
  };

/* cerrar el calendario */
  const handleCalendarClose = () => setCalendarOpen(false);

/* seleccionar fecha en el calendario */
  const handleDateClick = (date) => {
    setSelectedDate(date);
    setCalendarOpen(false);
    setHorarioFormOpen(true);
  };

/* cerrar el formulario de horario */
  const handleHorarioFormClose = () => setHorarioFormOpen(false);

/* confirmar el horario seleccionado */
  const handleTimeSlotConfirm = (slot, time) => {
    const selectedHorario = `${slot === 'mañana' ? 'Mañana' : 'Tarde'} - ${time}`;
    setSelectedHorario(selectedHorario);
    setHorarioFormOpen(false);
    if (currentForm === 'institucion') {
      // handle opening institution form here, if needed
      setFormModalOpen(true)
    } else if (currentForm === 'particular') {
      // handle opening particular form here, if needed
    }
    alert('Horario Confirmado'); // This is just a placeholder
  };

/* cerrar el formulario modal */
  const handleFormModalClose = () => setFormModalOpen(false);


/* renderizado: en la parte final del codigo, se encuentra el renderizado de la interfaz de usuario
se utilizan los componentes Button, CalendarModal, HorarioForm y FormModal para mostrar los botones de inscripcion, el calendario interactivo y los formularios de inscripcion */
  return (
    <Container className='AppDiv'>
      /* abrir el calendario para la inscripcion de instituciones */
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleCalendarOpen('institucion')}
      >
        Inscripción Instituciones
      </Button>
      /* abrir el calendario para la inscripcian de particulares */
      <Button
        variant="contained"
        color="secondary"
        onClick={() => handleCalendarOpen('particular')}
        style={{ marginLeft: '10px' }}
      >
        Inscripción Particulares
      </Button>
      <CalendarModal
        open={calendarOpen}
        onClose={handleCalendarClose}
        onDateClick={handleDateClick}
      />
      <HorarioForm
        open={horarioFormOpen}
        onClose={handleHorarioFormClose}
        selectedDate={selectedDate}
        onConfirm={handleTimeSlotConfirm}
      />
      <FormModal
      open={formModalOpen}
      onClose={handleFormModalClose}
      selectedDate={selectedDate}
      selectedHorario={selectedHorario}
      />
    </Container>
  );
}

export default App;


