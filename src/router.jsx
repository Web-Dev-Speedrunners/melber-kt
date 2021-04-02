import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Error404Page from './pages/error_404';
import SearchCityPage from './pages/search_city';
import SearchZipcodePage from './pages/search_zipcode';

const AppRouter = () => (
  <Switch>
    <Route exact path="/search-zipcode" component={SearchZipcodePage} />
    <Route exact path="/search-city" component={SearchCityPage} />
    <Route path="/error/404" component={Error404Page} />
    <Redirect from="/" to="/search-zipcode" />
    <Redirect to="/error/404" />
  </Switch>
);

export default AppRouter;
