import React from 'react';
import PropTypes from 'prop-types';

import { ListGroup, ListGroupItem } from 'reactstrap';
import CityCardList from '../city_list';

const CityStateList = ({ cities, locationText }) => {
  console.log('cityStateList:', cities);

  const stateName = locationText.split(',')[1];
  return (
    <div>
      <h2>{stateName}</h2>
      <ListGroup>
        <ListGroupItem>
          <CityCardList cities={cities} />
        </ListGroupItem>
        {/* {cities.map(({ city, zipcode }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ListGroupItem key={index}>
            {city}
            {' '}
            {zipcode}
          </ListGroupItem>
        ))} */}
      </ListGroup>
    </div>
  );
};

CityStateList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired, // Array<
  locationText: PropTypes.string.isRequired,
};

export default CityStateList;
