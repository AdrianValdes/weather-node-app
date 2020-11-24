const ACCESS_KEY = "2f3720fac48fe1812fed249b39d2eeea";
const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=2f3720fac48fe1812fed249b39d2eeea&query=37.8267,-122.4233&units=m";

request({ url, json: true }, (error, response) => {
  const data = response.body.current;
  let { weather_descriptions, temperature, precip } = data;
  console.log(
    `The weather is ${weather_descriptions[0]}. It is currently ${temperature} degrees out. There is ${precip}% chance of rain`
  );
});
