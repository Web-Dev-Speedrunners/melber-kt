/* eslint-disable */
import React, { useState, useMemo } from 'react';
import { ListGroup, ListGroupItem, Spinner } from 'reactstrap';
import { makeStyles } from '@material-ui/styles';

import PropTypes from 'prop-types';
// import SearchInput from '../../component/search_input';
import { SearchCityName } from '../../search_api';


const useStyles = makeStyles({
  placeholderContent: {
    display: 'flex',
    minHeight: '30vh',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const CityStateList = ({ cities, stateName }) => {
  console.log('cityStateList:', cities);
  return (
    <div>
      <h1>{stateName}</h1>
      <ListGroup>
        {cities.map(({ city, zipcode }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ListGroupItem key={index}>
            {city}
            {' '}
            {zipcode}
          </ListGroupItem>
        ))}
      </ListGroup>
    </div>
  )
};

CityStateList.propTypes = {
  // cities: PropTypes.arrayOf(PropTypes.object).isRequired, //
};

const Loading = () => <Spinner color="info" />;

const SearchCityPage = () => {
  const classes = useStyles();

  const [searchResult, setSearchResult] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleSearch = async () => {
    try {
      const cityQuery = 'Brooklyn';
      setLoadingSearch(true);
      if (errorMessage) setErrorMessage(undefined);
      const result = await SearchCityName(cityQuery);
      setSearchResult(result);
      // console.log('res', result);

      if (result.length === 0) setErrorMessage('Not Found');
      setLoadingSearch(false);
    } catch (error) {
      console.log(error);
      if (error.response.status === 404) {
        setErrorMessage('Not Found');
      } else {
        setErrorMessage(error.message || 'Soemthing went wrong');
      }
      setLoadingSearch(false);
    }
  };

  const content = useMemo(() => {
    if (loadingSearch) {
      return (
        <div className={classes.placeholderContent}>
          <Loading />
        </div>
      );
    }
    if (errorMessage) {
      return (
        <div className={classes.placeholderContent}>
          <h4>{errorMessage}</h4>
        </div>
      );
    }
    return (
      <div>
        {
          searchResult.map((cityObj) => {
            const { stateName, cities } = cityObj;
            console.log(stateName);
            return (
              <CityStateList cities={cities} stateName={stateName} />
            );
          })
        }
      </div>
    );
  }, [loadingSearch, searchResult, errorMessage]);

  return (
    <div>
      <h1>Search by City</h1>
      {/* <SearchInput placeholder="Melber" onSearch={handleSearch} /> */}
      <button type="submit" onClick={handleSearch}>Search</button>
      {content}
    </div>
  );
};

export default SearchCityPage;
