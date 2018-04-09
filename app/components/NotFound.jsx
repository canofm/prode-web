import React from 'react';
import PropTypes from 'prop-types';

const NotFound = (props) => (
	<div className="jumbotron">
		<h2 className="display-4 text-center">{props.notFoundMessage}</h2>
		<img className="rounded mx-auto d-block" src="app/images/notfound.png" alt="notfound" height="50%;" />
	</div>
)
NotFound.defaultProps = { notFoundMessage: "Sin resultados" }
NotFound.propTypes = { notFoundMessage: PropTypes.string }
export default NotFound;