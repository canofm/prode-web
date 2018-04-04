import React from 'react';

const UpdateOption = () => (
  <div className="mt-3">
    <strong>Apuestas seleccionadas: 3</strong>
    <button type="button" className="btn btn-primary btn-sm ml-3">Actualizar</button>
    <button type="button" className="btn btn-secondary btn-sm ml-1">Limpiar</button>
    <div className="alert alert-success mt-2" role="alert">
      Se actualizaron las 3 apuestas
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  </div>
);

export default UpdateOption;