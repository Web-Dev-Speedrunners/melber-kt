import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';

const CitySummaryCard = ({
  // city,
  zipcode,
  state,
  latitude,
  longitude,
  population,
  totalWages,
  locationText,
}) => {
  const cityName = locationText.split(',')[0];

  return (
    <Card>
      <CardHeader>{`${cityName}, ${state}`}</CardHeader>
      <CardBody>
        <ul>
          <li>
            {`State: ${state}`}
          </li>
          <li>
            {`Zipcode: ${zipcode}`}
          </li>
          <li>
            {`Location: (${latitude}, ${longitude})`}
          </li>
          <li>
            {`Population (estimated): ${population}`}
          </li>
          <li>
            {`Total Wages: ${totalWages}`}
          </li>
        </ul>
      </CardBody>
    </Card>
  );
};

CitySummaryCard.propTypes = {
  // city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  totalWages: PropTypes.string.isRequired,
  locationText: PropTypes.string.isRequired,
};

export default CitySummaryCard;
