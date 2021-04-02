import React from 'react'
import PropTypes from 'prop-types';

const CitySummaryCard = (props) => {
  return <h1>{props.city}</h1>
}

CitySummaryCard.propTypes = {
  city: PropTypes.string.isRequired
  // TODO: Add Adiditonal Props
}

export default CitySummaryCard