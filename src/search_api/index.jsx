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
    this.latitude = apiCityEntry.Lat;
    this.longitude = apiCityEntry.Long;
    this.population = apiCityEntry.EstimatedPopulation;
    this.totalWages = apiCityEntry.TotalWages;
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
    // If we use SearchForZip, the list will already be in APICityModel format
    // this.cities = apiCityEntryList.map((entry) => new APICityModel(entry));
    this.cities = apiCityEntryList;
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
  const zipResults = await axios.get(`http://ctp-zip-api.herokuapp.com/city/${cityName}`);
  const stateTable = {};

  await Promise.all(
    zipResults.data.map(async (zipcode) => {
      const cityModels = await SearchForZipcode(zipcode);
      cityModels.forEach((cityObj) => {
        if (cityObj.city !== cityName) return;
        // check if statetable has the state saved
        if (stateTable[cityObj.state] !== undefined) {
          stateTable[cityObj.state].push(cityObj);
        } else {
          stateTable[cityObj.state] = [cityObj];
        }
      });
    }),
  );

  return (Object.entries(stateTable).map((entry) => {
    const [state, cities] = entry;
    return new APIStateCityList(state, cities);
  }));
}; // eslint-disable-line no-unused-vars

export default {
  SearchForZipcode,
  SearchCityName,
};
