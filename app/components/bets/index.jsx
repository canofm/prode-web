import React from 'react';
import Filter from './filter';
import SearchMatch from './SearchMatch';
import Title from '../Title';
import BetsTable from './betsTable';
import matches from '../../matches';

const Bets = () => (
	<div>
		<Title title='Listado de apuestas' />
		<form className="form-inline">
			<Filter />
			<SearchMatch />
		</form>
		<BetsTable matches={matches} />
	</div>
);

export default Bets;
