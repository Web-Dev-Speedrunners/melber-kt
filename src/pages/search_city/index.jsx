import React, { useState, useMemo } from 'react';
import { Spinner } from 'reactstrap';
import { makeStyles } from '@material-ui/styles';

import SearchInput from '../../component/search_input';
import CityStateList from '../../component/city_state_list';
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

const Loading = () => <Spinner color="info" />;

const SearchCityPage = () => {
  const classes = useStyles();

  const [searchResult, setSearchResult] = useState([]);
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleSearch = async (cityQuery) => {
    try {
      setLoadingSearch(true);
      if (errorMessage) setErrorMessage(undefined);
      const result = await SearchCityName(cityQuery);
      setSearchResult(result);

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
            const { cities } = cityObj;
            // Note: must recover location text from an object because of
            // abbreviations, but indexing is safe since each key must have an
            // array with at least one element.
            const { locationText } = cities[0];
            console.log(cityObj);
            return (
              <CityStateList cities={cities} locationText={locationText} />
            );
          })
        }
      </div>
    );
  }, [loadingSearch, searchResult, errorMessage]);

  return (
    <div>
      <h1>Search by City</h1>
      <SearchInput placeholder="Melber" onSearch={handleSearch} />
      {/* <button type="submit" onClick={handleSearch}>Search</button> */}
      {content}
    </div>
  );
};

export default SearchCityPage;
