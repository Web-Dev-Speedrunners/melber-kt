import React from 'react';
import PropTypes from 'prop-types';

const CitySummaryCard = ({ city }) => <h5>{city}</h5>;

CitySummaryCard.propTypes = {
  city: PropTypes.string.isRequired,
  // TODO: Add Adiditonal Props
};

export default CitySummaryCard;
