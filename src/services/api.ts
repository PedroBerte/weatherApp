import axios from "axios";

export const CurrentApi = axios.create({
    baseURL: `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_API_KEY}`,
    headers: {
      'Content-Type': 'application/json',
    }
  });

  export const ForecastApi = axios.create({
    baseURL: `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}`,
    headers: {
      'Content-Type': 'application/json',
    }
  });