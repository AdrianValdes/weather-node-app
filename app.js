const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("From where would you like to not the weather? ", (address) => {
  if (address === "") {
    return console.log("Give me something, please");
  }
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) return console.log(error);

    forecast(
      { latitude: latitude, longitude: longitude },
      (error, { weather_descriptions, temperature, precip }) => {
        if (error) return console.log("error", error);

        console.log(
          `The weather in ${location} is ${weather_descriptions[0]}. It is currently ${temperature} degrees out. There is ${precip}% chance of rain`
        );
      }
    );
  });

  rl.close();
});
