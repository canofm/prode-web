import React, { PropTypes } from 'react';
import Filter from '../filter';
import UpdateOption from '../updateOption';
import BetsTable from '../betsTable';

const Title = (props) => (
    <div className="py-3 text-center">
        <h2>{props.title}</h2>
    </div>
);
Title.defaultProps = { title: "Sin titulo" };
Title.propTypes = { title: PropTypes.string };

const Bets = () => (
    <div>
        <Title title='Listado de apuestas' />
        <Filter />
        <UpdateOption />
        <BetsTable />
    </div>
);

export default Bets;