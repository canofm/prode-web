import React, { PropTypes } from 'react';
import Filter from '../filter';
import BetsTable from '../betsTable';
import matches from '../matches';

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
		<BetsTable matches={matches} />
	</div>
);

export default Bets;