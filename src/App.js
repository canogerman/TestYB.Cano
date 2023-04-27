import './App.css';
import React, { useState } from 'react';
import TareasList from './components/TareasList';

function App() {

  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  function handleChange(event) {
    setNuevaTarea(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!nuevaTarea) return;
    const nueva = {
      id: Date.now(),
      texto: nuevaTarea.trim(),
      completada: false
    };
    setTareas([...tareas, nueva]);
    setNuevaTarea('');
  }

  function eliminarTarea(id) {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  }

  function cambiarCompletado(id) {
    setTareas(tareas.map(tarea => {
      if (tarea.id === id) {
        return {
          ...tarea,
          completada: !tarea.completada
        };
      } else {
        return tarea;
      }
    }));
  }

  function editarTarea(id, texto) {
    setTareas(tareas.map(tarea => {
      if (tarea.id === id) {
        return {
          ...tarea,
          texto: texto
        };
      } else {
        return tarea;
      }
    }));
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src="https://www.yerbabuena.gob.ar/wp-content/uploads/2020/09/logo-header170px.png" />
        <p>
          Yerba Buena - Test Práctico
        </p>
      </header>
      <div className="App-body">
        <h1>Lista de Tareas</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nueva-tarea">
           Nueva Tarea:
          </label>
          <input
            id="nueva-tarea"
            type="text"
            value={nuevaTarea}
            onChange={handleChange}
          />
          <button type="submit">
            Agregar
          </button>
        </form>
        <TareasList
          tareas={tareas}
          eliminarTarea={eliminarTarea}
          cambiarCompletado={cambiarCompletado}
          editarTarea={editarTarea}
        />
      </div>
    </div>
  );
}

export default App;

