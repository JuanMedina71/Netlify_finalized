import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';
const RegistroForm = () => {
  const [identificacion, setIdentificacion] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [telefono, setTelefono] = useState('');
  const [habitacion, setHabitacion] = useState('');
  const [rh, setRh] = useState('');
  const [entrada, setEntrada] = useState(null);
  const [salida, setSalida] = useState(null);

  const handleRegistrarClick = () => {
    // Validar que todos los campos estén llenos
    if (
      identificacion &&
      nombres &&
      apellidos &&
      telefono &&
      habitacion &&
      rh &&
      entrada &&
      salida
    ) {
      // Mostrar ventana emergente
      alert('Registro con éxito');
    } else {
      alert('Por favor, complete todos los campos.');
    }
  };

  return (
    <div className="registro-form">
      <h1>Registro</h1>
      <label>Identificación</label>
      <input
        type="text"
        placeholder="Identificación"
        value={identificacion}
        onChange={(e) => setIdentificacion(e.target.value)}
      />
      <label>Nombres</label>
      <input
        type="text"
        placeholder="Nombres"
        value={nombres}
        onChange={(e) => setNombres(e.target.value)}
      />
      <label>Apellidos</label>
      <input
        type="text"
        placeholder="Apellidos"
        value={apellidos}
        onChange={(e) => setApellidos(e.target.value)}
      />
      <label>telefono</label>
      <input
        type="text"
        placeholder="Teléfono"
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />
      <label>Habitación</label>
      <input
        type="text"
        placeholder="Habitación"
        value={habitacion}
        onChange={(e) => setHabitacion(e.target.value)}
      />
      <label>Selecciona RH</label>
      <select
        value={rh}
        onChange={(e) => setRh(e.target.value)}
      >
        <option value="">Seleccione RH</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        {/* Agrega más opciones de RH según sea necesario */}
      </select>
      <div>
        <label>Entrada</label>
        <DatePicker
          selected={entrada}
          onChange={(date) => setEntrada(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <div>
        <label>Salida</label>
        <DatePicker
          selected={salida}
          onChange={(date) => setSalida(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>
      <button onClick={handleRegistrarClick}>Registrar</button>
      <button>Cancelar</button>
    </div>
  );
};

export default RegistroForm;
