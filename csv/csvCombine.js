const underscore = require('underscore');
const url = require('url');
const csv = require('csv-parser')
const fs = require('fs')
const path = require('path')
const googleTrends = require('google-trends-api')

const results = [];
var delay = interval => new Promise(resolve => setTimeout(resolve, interval));
var test = [];
var monthData = {};
var i = 0;
var j = 0;

const filename = 'NOV2010.csv';
var year = {
  year: parseInt(filename.slice(3, 7)),
  months: {
    JAN: 1,
    FEB: 2,
    MAR: 3,
    APR: 4,
    MAY: 5,
    JUN: 6,
    JUL: 7,
    AUG: 8,
    SEP: 9,
    OCT: 10,
    NOV: 11,
    DEC: 12
  }
}

var states = {
  "AK": null,
  "HI": null,
  "AL": null,
  "AR": null,
  "AZ": null,
  "CA": null,
  "CO": null,
  "CT": null,
  "DE": null,
  "FL": null,
  "GA": null,
  "IA": null,
  "ID": null,
  "IL": null,
  "IN": null,
  "KS": null,
  "KY": null,
  "LA": null,
  "MA": null,
  "MD": null,
  "ME": null,
  "MI": null,
  "MN": null,
  "MO": null,
  "MS": null,
  "MT": null,
  "NC": null,
  "ND": null,
  "NE": null,
  "NH": null,
  "NJ": null,
  "NM": null,
  "NV": null,
  "NY": null,
  "OH": null,
  "OK": null,
  "OR": null,
  "PA": null,
  "RI": null,
  "SC": null,
  "SD": null,
  "TN": null,
  "TX": null,
  "UT": null,
  "VA": null,
  "VT": null,
  "WA": null,
  "WI": null,
  "WV": null,
  "WY": null
}

var stateArr = [];
for (var state in states) {
  stateArr.push(state);
}
const allTrends = () => {
  resultLoop();
}

const resultLoop = () => {
  setTimeout(() => {
    console.log(j)
    //console.log(results[j].RISING);
    if (j === results.length) {
      fs.writeFile(`./csv/trendData/${filename.slice(0,7)}.json`, JSON.stringify(monthData), (err) => {
        if (err) {
          console.log(err);
        }
        console.log('complete');
      })
    } else if (j < results.length) {
      i = 0;
      stateLoop();
    }
  }, 150000)
}

const stateLoop = () => {
  setTimeout(() => {
    console.log(stateArr[i])
    var month = year.months[filename.slice(0, 3)];
    if (month < 12) {
      var option = {
        keyword: results[j].RISING,
        startTime: new Date(year.year, month),
        endTime: new Date(year.year, (month + 1)),
        geo: `US-${stateArr[i]}`
      }
    } else {
      var option = {
        keyword: results[j].RISING,
        startTime: new Date(year.year, month),
        endTime: new Date(year.year + 1, 1),
        geo: `US-${stateArr[i]}`
      }
    }
    googleTrends.interestByRegion(option)
      .then((response) => {
        test.push(response);
        // console.log(response);
        if (i < 49) {
          i++;
          stateLoop();
        } else {
          monthData[results[j].RISING] = test;
          console.log(monthData[results[j].RISING]);
          j++;
          test = [];
          resultLoop();
        }
      })
      .catch((err) => {
        console.log(err);
      })
  }, 2200)
}

fs.createReadStream(path.join(__dirname, 'initialTrendMonths/', filename))
  .pipe(csv())
  .on('data', (row) => {
    if (row.RISING)
      results.push(row)
  })
  .on('end', () => {
    allTrends();
  });
