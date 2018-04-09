import React, { Component } from 'react';
import Filter from './filter';
import SearchMatch from './SearchMatch';
import Title from '../Title';
import BetsTable from './betsTable';
import matches from '../../matches';

const searchTeam = (team, currentSearch) => team.name.toUpperCase().includes(currentSearch.toUpperCase());
const searchTeams = (home, away, currentSearch) => searchTeam(home, currentSearch) || searchTeam(away, currentSearch);

const NotFound = () => (
	<div className="jumbotron">
		<h2 className="display-4 text-center">Sin resultados</h2>
		<img className="rounded mx-auto d-block" src="app/images/notfound.png" alt="notfound" height="50%;" />
	</div>
)

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
