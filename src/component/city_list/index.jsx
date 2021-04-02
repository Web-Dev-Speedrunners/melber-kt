/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import CitySummaryCard from '../city_summary_card';

const CityCardList = ({ header, cities }) => (
  <div>
    <h1>{header}</h1>
    {cities.map((city, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <CitySummaryCard key={index} {...city} />
    ))}
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
