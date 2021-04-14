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
  zipcode,
  state,
  latitude,
  longitude,
  population,
  totalWages,
}) => {
  const cityName = captializeWords(city);

  return (
    <Card>
      <CardHeader>{`${cityName}, ${state} ${zipcode}`}</CardHeader>
      <CardBody>
        <ul>
          <li key="state">
            {`State: ${state}`}
          </li>
          <li key="loc">
            {`Location: (${latitude}, ${longitude})`}
          </li>
          <li key="pop">
            {`Population (estimated): ${population}`}
          </li>
          <li key="wage">
            {`Total Wages: ${totalWages}`}
          </li>
        </ul>
      </CardBody>
    </Card>
  );
};

CitySummaryCard.propTypes = {
  city: PropTypes.string.isRequired,
  zipcode: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  totalWages: PropTypes.string.isRequired,
};

export default CitySummaryCard;
