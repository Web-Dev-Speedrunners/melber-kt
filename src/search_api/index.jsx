import axios from 'axios';

export class APICityModel {
  /**
   * Creates APICityModel object
   * @param {Object} apiCityEntry API City Entry
   */
  constructor(apiCityEntry) {
    this.city = apiCityEntry.City;
    this.zipcode = apiCityEntry.Zipcode;
    this.state = apiCityEntry.State;
    // TODO: Add all required fields
  }
}

export class APIStateCityList {
  /**
   *
   * @param {string} stateName State Name
   * @param {Object} apiCityEntryList all cities found by API
   */
  constructor(stateName, apiCityEntryList) {
    this.stateName = stateName;
    this.cities = apiCityEntryList; // Array<APICityModel>
  }
}

/**
 * Get all cities from a given zipcode
 * @param {string | number} zipcode zipcode to search for
 * @returns {Array<APICityModel>} All cities found in the zipcode
 */
export const SearchForZipcode = async (zipcode) => {
  const result = await axios.get(`https://ctp-zip-api.herokuapp.com/zip/${zipcode}`);
  return result.data.map((entry) => new APICityModel(entry));
};

/**
 * Get all cities for a given zipcode, grouped by states
 * @param {string} cityName Searched City Name
 * @returns {Array<APIStateCityList>} All State and their cities found by city name
 */
export const SearchCityName = async (cityName) => {
  const zipcodes = await axios.get(`http://ctp-zip-api.herokuapp.com/city/${cityName.toUpperCase()}`);

  // An array of functions
  const retrieveCitiesFn = [];
  zipcodes.data.forEach((code) => {
    retrieveCitiesFn.push(SearchForZipcode(code));
  });

  // asynchronously resolve all
  const cityArray = await Promise.all(retrieveCitiesFn);

  // create new accumilating Map, merging on each entry's state name.
  // stateName => zipcodes with cities having {cityName}
  const stateToCities = new Map();

  // if state unseen add a list of it, otherwise append
  cityArray.flat().forEach((cityObj: APICityModel) => {
    const { state } = cityObj;
    if (stateToCities.has(state)) {
      stateToCities.get(state).push(cityObj);
    } else {
      stateToCities.set(state, [cityObj]);
    }
  });
  // convert the map created to a {Array<APICityStateList>}
  return [...stateToCities].map(
    ([state, cities]) => (new APIStateCityList(state, cities)),
  );
}; 

export default {
  SearchForZipcode,
  SearchCityName,
};
