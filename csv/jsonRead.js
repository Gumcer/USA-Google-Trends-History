const fs = require('fs');
const path = require('path')
const filename = 'JAN2010.json';

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

fs.readFile(path.join(__dirname, filename), 'utf8', (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err)
    return
  }
  var trendData = JSON.parse(jsonString);
  console.log(trendData);
  var result = {};
  for (var trend in trendData) {
    var statesObj = {};
    var stateData = trendData[trend];
    for (var i = 0; i < stateData.length; i++) {
      var fullData = JSON.parse(stateData[i]);
      var valueSum = 0;
      var data = fullData.default.geoMapData;
      for (var j = 0; j < data.length; j++) {
        var value = data[j].value[0];
        valueSum += value;
      }
      if (data.length === 0) {
        statesObj[stateArr[i]] = 0;
      } else {
      statesObj[stateArr[i]] = valueSum / data.length;
      }
    }
    result[trend] = statesObj;
  }
})