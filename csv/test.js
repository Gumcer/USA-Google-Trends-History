const csv = require('fast-csv')
const fs = require('fs')
const path = require('path')
const googleTrends = require('google-trends-api')
var test = [];
var i = 0;
var delay = interval => new Promise(resolve => setTimeout(resolve, interval));
const filename = 'Jan2010.csv';
var year = {
  year: parseInt(filename.slice(3, 7)),
  months: {
    JAN: null,
    FEB: null,
    MAR: null,
    APR: null,
    MAY: null,
    JUN: null,
    JUL: null,
    AUG: null,
    SEP: null,
    OCT: null,
    NOV: null,
    DEC: null,
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
const grabTrend = (option, callback) => {
  delay(500)
  .then (() => {
    googleTrends.interestByRegion(option)
    .then((response) => {
      callback(response);
    })
    .catch((err) => {
      callback(err);
    })
  })
}

const allTrends = () => {

  for (var state in states) {
    stateArr.push(state);
  }

  stateLoop();
  // for (var i = 0; i < 10; i++) {
  //   var option = {
  //     keyword: 'bean',
  //     startTime: new Date(2011, 1),
  //     endTime: new Date(2011, 2),
  //     geo: `US-CA`
  //   }
  //   test.push(option);
  //   delay(10000)
  //   .then(() => {
  //     grabTrend(option, (response) => {console.log(response)})
  //   })
  // }
}

const stateLoop = () => {
  setTimeout(() => {
    var option = {
      keyword: 'bean',
      startTime: new Date(2011, 1),
      endTime: new Date(2011, 2),
      geo: `US-${stateArr[i]}`
    }
    googleTrends.interestByRegion(option)
    .then((response) => {
      test.push(response);
      console.log(response);
      if (i < 50) {
        i++;
        stateLoop();
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }, 10000)
}

allTrends();