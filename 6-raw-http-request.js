const http = require("http");
const ACCESS_KEY = "2f3720fac48fe1812fed249b39d2eeea";
const url = `http://api.weatherstack.com/current?access_key=${ACCESS_KEY}&query=${45},${-75}&units=m`;

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    if (body.success === false) {
      return console.log(body.error.info);
    }
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log(error);
});
request.end();
