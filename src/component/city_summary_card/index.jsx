import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';
import captializeWords from '../../utils/captialize';

const CitySummaryCard = ({
  city,
  state,
  latitude,
  longitude,
  population,
  totalWages,
}) => {
  const cityName = captializeWords(city);

  return (
    <Card>
      <CardHeader>{`${cityName}, ${state}`}</CardHeader>
      <CardBody>
        <ul>
          <li>
            {`State: ${state}`}
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
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  population: PropTypes.number.isRequired,
  totalWages: PropTypes.number.isRequired,
};

export default CitySummaryCard;
