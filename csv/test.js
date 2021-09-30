const HttpsProxyAgent = require('https-proxy-agent');
const googleTrends = require('google-trends-api');
let proxyAgent =  new HttpsProxyAgent('http://localhost:8888/');

let query = {
    keyword: 'Women\'s march',
};

googleTrends.interestOverTime(query)
.then(function(results){
  console.log('These proxied results are incredible', results);
})
.catch(function(err){
  console.error('Oh no there was an error, double check your proxy settings', err);
});