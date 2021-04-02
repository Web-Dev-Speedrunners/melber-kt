import axios from 'axios';

export class APICityModel {
  /**
   * Creates APICityModel object
   * @param {Object} apiCityEntry API City Entry
   */
  constructor(apiCityEntry) {
    this.city = apiCityEntry.City;
    this.zipcode = apiCityEntry.Zipcode;
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
    this.cities = apiCityEntryList.map((entry) => new APICityModel(entry));
  }
}

/**
 * Get all cities from a given zipcode
 * @param {string | number} zipcode zipcode to search for
 * @returns {Array<APICityModel>} All cities found in the zipcode
 */
export const SearchForZipcode = async (zipcode) => {
  const result = await axios.get(`http://ctp-zip-api.herokuapp.com/zip/${zipcode}`);
  return result.data.map((entry) => new APICityModel(entry));
};

/**
 * Get all cities for a given zipcode, grouped by states
 * @param {string} cityName Searched City Name
 * @returns {Array<APIStateCityList>} All State and their cities found by city name
 */
export const SearchCityName = async (cityName) => []; // eslint-disable-line no-unused-vars

export default {
  SearchForZipcode,
  SearchCityName,
};
