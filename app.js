const ACCESS_KEY = "2f3720fac48fe1812fed249b39d2eeea";
const ACCESS_TOKEN =
  "pk.eyJ1IjoiYWRyaWFudmFsZGVzIiwiYSI6ImNraHcybW56bTFzcmwyc2t6aG00ZzBtYXQifQ.TMNph6be1vXRvkUVjam8VQ";
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

const urlGeo = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${ACCESS_TOKEN}&limit=1`;

request({ url: urlGeo, json: true }, (error, response) => {
  const data = response.body.features[0];
  let { text, center } = data;
  console.log(`The latitude is ${center[1]} and the longitude is ${center[0]}`);
});
