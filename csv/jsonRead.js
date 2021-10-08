const fs = require('fs');
const path = require('path')
const filename = 'JAN2011.json';
var year = {
  year: parseInt(filename.slice(3, 7)),
  months: {}
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

var statesObj = {};
var stateArr = [];
for (var state in states) {
  stateArr.push(state);
}

var trendCheck = () => {

}
function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

fs.readFile(path.join(__dirname, `trendData/${year.year}`, filename), 'utf8', (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err)
    return;
  }
  var trendData = JSON.parse(jsonString);
  var result = {};
  for (var trend in trendData) {
    var statesObj = {};
    var stateData = trendData[trend];
    //console.log(trend);
    for (var i = 0; i < stateData.length; i++) {
      var fullData = JSON.parse(stateData[i]);
      var valueSum = 0;
      var count = 0;
      var data = fullData.default.geoMapData;
        for (var j = 0; j < data.length; j++) {
          // grabs the state associated with the city
          var cityState = data[j].geoName.slice(data[j].geoName.length - 2, data[j].geoName.length);
          // api sometimes gives cities close to state, so filtering those out of the averaging
          if (cityState !== stateArr[i]) {
            continue;
          }
          var value = data[j].value[0];
          valueSum += value;
          count++;
        }
      if (count === 0) {
        statesObj[stateArr[i]] = 0;
      } else {
        statesObj[stateArr[i]] = valueSum / count;
      }
    }
    //console.log(statesObj);
    result[trend] = statesObj;
  }
  statesObj = {};
  for (var trend in result) {
    var stateData = result[trend];
    for (var i = 0; i < stateArr.length; i++) {
      if (!statesObj[stateArr[i]]) {
        statesObj[stateArr[i]] = {
          'trend': trend
        }
      } else if (stateData[stateArr[i]] > previousTrend[stateArr[i]]) {
        statesObj[stateArr[i]] = {
          'trend': trend
        }
      }
      // console.log(stateArr[i] + ': ', stateData[stateArr[i]]);
      // console.log(statesObj[stateArr[i]])
    }
    var previousTrend = result[trend];
  }

  fs.readFile(path.join(__dirname, 'finalData/allTrends.json'), 'utf8', (err, jsonString) => {
    if (err) {
      console.log("File read failed:", err)
      return;
    }
    var updateTrends = JSON.parse(jsonString);
    for (var state in statesObj) {
      var trend = statesObj[state].trend
      var trendAndColor = statesObj[state];
      if (!updateTrends[trend]) {
        updateTrends[trend] = generateRandomColor();
      }
      trendAndColor['fill'] = updateTrends[trend];
      //console.log(trendAndColor);
    }

    fs.writeFile('./csv/finalData/allTrends.json', JSON.stringify(updateTrends), (err) => {
      if (err) {
        console.log(err);
      }
      console.log('trends complete');
    })

    fs.readFile(path.join(__dirname, `finalData/${year.year}.json`), 'utf8', (err, jsonString) => {
      if (err) {
        console.log("File read failed:", err)
        return;
      }

      var updateYear = JSON.parse(jsonString);
      updateYear.months[filename.slice(0, 3)] = statesObj;
      console.log(statesObj);

      fs.writeFile(`./csv/finalData/${year.year}.json`, JSON.stringify(updateYear), (err) => {
        if (err) {
          console.log(err);
        }
        console.log('update complete');
      })
    });
  })

});