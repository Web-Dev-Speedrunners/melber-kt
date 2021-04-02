import React from 'react';
import PropTypes from 'prop-types';

// TODO: Render Header if given
// TODO: Render CitySummaryCard component for each city in cities props

const CityCardList = ({ header, cities }) => (
  <div>
    <h1>{header}</h1>
    <span>
      City Count:
      {cities.length}
    </span>
  </div>
);

CityCardList.defaultProps = {
  header: undefined,
};

CityCardList.propTypes = {
  header: PropTypes.string, // Display any header such as the state name
  cities: PropTypes.arrayOf(PropTypes.object).isRequired, // Array<APIStateCityList>
};

export default CityCardList;
