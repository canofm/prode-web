import React, { PropTypes } from 'react';

const Title = (props) => (
    <div className="py-3 text-center">
      <h2>{props.title}</h2>
    </div>
);

Title.defaultProps = { title: "Sin titulo" };
Title.propTypes = { title: PropTypes.string };

export default Title;
