import { makeStyles } from '@material-ui/styles';
import React, { useState, useMemo } from 'react';
import { Spinner } from 'reactstrap';

import CityCardList from '../../component/city_list';

import SearchInput from '../../component/search_input';
import { SearchForZipcode } from '../../search_api';

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

const SearchZipcodePage = () => {
  const classes = useStyles();
  const [searchResult, setSearchResult] = useState([]); // Array<APICityModel>
  const [loadingSearch, setLoadingSearch] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleSearch = async (zipcode) => {
    try {
      setLoadingSearch(true);
      if (errorMessage) setErrorMessage(undefined);
      const result = await SearchForZipcode(zipcode);
      setSearchResult(result);
      if (result.length === 0) setErrorMessage('Not Found');
      setLoadingSearch(false);
    } catch (error) {
      console.error(error);
      if (error.response.status === 404) {
        setErrorMessage('Not Found');
      } else {
        setErrorMessage(error.message || 'Something went wrong');
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
    return <CityCardList cities={searchResult} />;
  }, [loadingSearch, searchResult, errorMessage]);

  return (
    <div>
      <h1>Search Zipcode Page</h1>
      <SearchInput placeholder="Zipcode" onSearch={handleSearch} />
      {content}
    </div>
  );
};

export default SearchZipcodePage;
