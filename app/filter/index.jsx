import React from 'react';

const Filter = () => (
    <form className="form-inline">
        <strong className="mr-2">Filtro: </strong>
        <select className="form-control my-1 mr-sm-2">
            <option selected>Fase</option>
            <option value="1">Selección</option>
        </select>

        <select className="form-control my-1 mr-sm-2">
            <option selected>Grupos</option>
            <option value="1">Octavos</option>
            <option value="1">Cuartos</option>
            <option value="1">Semifinal</option>
            <option value="1">Final</option>
        </select>

        <select className="form-control my-1 mr-sm-2">
            <option selected>A</option>
            <option value="1">B</option>
            <option value="1">C</option>
            <option value="1">D</option>
            <option value="1">E</option>
            <option value="1">F</option>
            <option value="1">G</option>
            <option value="1">H</option>
        </select>

        <button type="submit" className="btn btn-primary my-1">Aplicar</button>

        <div className="input-group ml-auto">
            <input type="text" className="form-control" placeholder="Buscar..." />
        </div>
    </form>
);

export default Filter;