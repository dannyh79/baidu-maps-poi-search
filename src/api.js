require('dotenv').config()

const axios       = require('axios');
const querystring = require('querystring');

const ACCESS_KEY       = process.env.BAIDU_MAPS_ACCESS_KEY;
const BASE_URL         = 'http://api.map.baidu.com/place/v2/search';
const BASE_QUERYSTRING = { ak: ACCESS_KEY, output: 'json' };
const DATA_PATH        = 'data';
const url = (keyword) => (
  `${BASE_URL}?${querystring.encode(BASE_QUERYSTRING)}&query=${keyword}&region=beijing`
);

const getPOI = (keyword) => {
  const escapedUrl = encodeURI(url(keyword));
  axios
    .get(escapedUrl)
    .then((response) => {
      if (response.data.status != 0) {
        throw new Error(response.data.message)
      }
      console.log(response.data.results);

      return response.data.results;
    })
    .then((data) => {
      const file = `${DATA_PATH}/${Date.now()}.json`;
      fs.writeFile(file, JSON.stringify(data), (error) => {
        if ((error)) return console.error(err);
        console.log(`[INFO] ${file} created.`);
      });
    })
    .catch((error) => console.error('(From Baidu) ', error));
};

exports.getPOI = getPOI;
