import React from 'react';
import PropTypes from 'prop-types';

// const CitySummaryCard = ({ city }) => <h5>{city}</h5>;
const CitySummaryCard = ({
  city,
  state,
  latitude,
  longitude,
  population,
  totalWages,
}) => (
  <ul>
    <li>
      {`City: ${city}`}
    </li>
    <li>
      {`State: ${state}`}
    </li>
    <li>
      {`Location: (${latitude}, ${longitude})`}
    </li>
    <li>
      {`Population (Estimated): ${population}`}
    </li>
    <li>
      {`Total Wages: ${totalWages}`}
    </li>
  </ul>
);

CitySummaryCard.propTypes = {
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  population: PropTypes.number.isRequired,
  totalWages: PropTypes.number.isRequired,
};

export default CitySummaryCard;
