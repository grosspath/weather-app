import axios from 'axios';
import dateFormat from 'dateformat';

const BASE_URL = 'http://api.openweathermap.org/data/2.5';
const DARK_BASE_URL = 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/';

const getCurrent = (zipCode, countryCode) => `${BASE_URL}/weather?zip=${zipCode},${countryCode}&units=imperial&type=accurate&APPID=5a0a6375811682ebe5a52b25954cbcf6`;
const getForecast = (zipCode, countryCode) => `${BASE_URL}/forecast/?zip=${zipCode},${countryCode}&units=imperial&type=accurate&APPID=7301ecadf10ce0c101cb6ca2b245dd35&cnt=8`;
const getWeeklyForecast = (latitude, longitude) => `${DARK_BASE_URL}b0fccff580ccb6afd8524b41bc94adb4/${latitude},${longitude}?exclude=currently,minutely,hourly,alerts,flags`;

export async function getWeather (zipCode, countryCode) {
  let url = getCurrent (zipCode, countryCode);
  const response = await axios.get(url);
  return response.data;
};

export async function getFiveDayForecast (zipCode, countryCode) {
  let url = getForecast (zipCode, countryCode);
  const response = await axios.get(url);
  return response.data;
};

export async function getWeeklyWeather (latitude,longitude) {
  let url = getWeeklyForecast (latitude, longitude)
  const response = await axios.get(url);
  return response.data;
};

export function getDateString (time) {
  var date = new Date(time * 1000);
  return dateFormat(date, "ddd, mmm dS").toString();
};
