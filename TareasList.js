import React from 'react';
import Tarea from './Tarea';

function TareasList({ tareas, eliminarTarea, cambiarCompletado, editarTarea }) {

  const listaTareas = tareas.map((tarea) => (
    <Tarea
      key={tarea.id}
      tarea={tarea}
      eliminarTarea={eliminarTarea}
      cambiarCompletado={cambiarCompletado}
      editarTarea={editarTarea}
    />
  ));

  function handleEliminarTarea(id) {
    eliminarTarea(id);
  }

  function handleCambiarCompletado(id) {
    cambiarCompletado(id);
  }

  function handleEditarTarea(id, texto) {
    editarTarea(id, texto);
  }

  return (
    <div>
      <ul>
        {listaTareas}
      </ul>
    </div>
  );
}

export default TareasList;
