import React, { Component } from 'react';
import Filter from './filter';
import SearchMatch from './SearchMatch';
import Title from '../Title';
import BetsTable from './betsTable';
import matches from '../../matches';
import NotFound from './../NotFound';

const searchTeam = (team, currentSearch) => team.name.toUpperCase().includes(currentSearch.toUpperCase());
const searchTeams = (home, away, currentSearch) => searchTeam(home, currentSearch) || searchTeam(away, currentSearch);

class Bets extends Component {
	state = {
		searchTerm: ''
	};
	handleSearchTermChange = (event) => {
		this.setState({ searchTerm: event.target.value });
	};
	render() {
		const matchesFiltered = matches.filter(({ homeTeam, awayTeam }) => searchTeams(homeTeam, awayTeam, this.state.searchTerm));
		const Table = matchesFiltered.length > 0 ? BetsTable : NotFound;
		return (
			<div>
				<Title title='Listado de apuestas' />
				<form className="form-inline">
					<Filter />
					<SearchMatch
						searchTerm={this.state.searchTerm}
						handleSearchTermChange={this.handleSearchTermChange}
						{...this.props}
					/>
				</form>
				<Table
					matches={matchesFiltered}
					{...this.props}
				/>
			</div>)
	}
};

export default Bets;
