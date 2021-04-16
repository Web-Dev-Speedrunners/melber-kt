import React from 'react';
// import React, { useState, useMemo } from 'react';
// import { Spinner } from 'reactstrap';
import PropTypes from 'prop-types';
import SearchInput from '../../component/search_input';
import { SearchCityName } from '../../search_api';

const CityStateList = ({ cities }) => (
  <div>
    {cities.map((city, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <div>
        {index}
        {' '}
        {city}
      </div>
    ))}
  </div>
);

CityStateList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired, //
};

// const Loading = () => <Spinner color="info" />;

const SearchCityPage = () => {
  // const [searchResult, setSearchResult] = useState([]);
  // const [loadingSearch, setLoadingSearch] = useState(false);

  const handleSearch = async (cityQuery) => {
    // setLoadingSearch(true);
    const result = await SearchCityName(cityQuery);
    console.log('res', result);
    // setSearchResult(result);
    // setLoadingSearch(false);
  };

  // const content = useMemo(() => (
  //   loadingSearch
  //     ? <Loading />
  //     : <CityStateList cities={searchResult} />
  // ), [loadingSearch, searchResult]);

  return (
    <div>
      <h1>Search by City</h1>
      <SearchInput placeholder="Melber" onSearch={handleSearch} />
      {/* {content} */}
    </div>
  );
};

export default SearchCityPage;
