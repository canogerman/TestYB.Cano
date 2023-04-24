import React, { useState } from 'react';

function Tarea({ tarea, eliminarTarea, cambiarCompletado, editarTarea }) {
  const [textoEditado, setTextoEditado] = useState(tarea.texto);
  const [editando, setEditando] = useState(false);

  const handleCompletado = () => {
    cambiarCompletado(tarea.id);
  };

  const handleEliminar = () => {
    eliminarTarea(tarea.id);
  };

  const handleEditar = () => {
    setEditando(true);
  };

  const handleGuardar = () => {
    editarTarea(tarea.id, textoEditado);
    setEditando(false);
  };

  const handleCancelar = () => {
    setTextoEditado(tarea.texto);
    setEditando(false);
  };

  const handleChange = (event) => {
    setTextoEditado(event.target.value);
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={tarea.completada}
        onChange={handleCompletado}
      />
      {editando ? (
        <>
          <input type="text" value={textoEditado} onChange={handleChange} />
          <button onClick={handleGuardar}>Guardar</button>
          <button onClick={handleCancelar}>Cancelar</button>
        </>
      ) : (
        <>
          <span>{tarea.texto}</span>
          <button onClick={handleEliminar}>Eliminar</button>
          <button onClick={handleEditar}>Editar</button>
        </>
      )}
    </li>
  );
}

export default Tarea;


