const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
mongoose.connect('mongodb://localhost/trends', { useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema;

var trendSchema = mongoose.Schema({
  trend: String,
  fill: String
})

var stateSchema = mongoose.Schema({
  "AK": trendSchema,
  "HI": trendSchema,
  "AL": trendSchema,
  "AR": trendSchema,
  "AZ": trendSchema,
  "CA": trendSchema,
  "CO": trendSchema,
  "CT": trendSchema,
  "DE": trendSchema,
  "FL": trendSchema,
  "GA": trendSchema,
  "IA": trendSchema,
  "ID": trendSchema,
  "IL": trendSchema,
  "IN": trendSchema,
  "KS": trendSchema,
  "KY": trendSchema,
  "LA": trendSchema,
  "MA": trendSchema,
  "MD": trendSchema,
  "ME": trendSchema,
  "MI": trendSchema,
  "MN": trendSchema,
  "MO": trendSchema,
  "MS": trendSchema,
  "MT": trendSchema,
  "NC": trendSchema,
  "ND": trendSchema,
  "NE": trendSchema,
  "NH": trendSchema,
  "NJ": trendSchema,
  "NM": trendSchema,
  "NV": trendSchema,
  "NY": trendSchema,
  "OH": trendSchema,
  "OK": trendSchema,
  "OR": trendSchema,
  "PA": trendSchema,
  "RI": trendSchema,
  "SC": trendSchema,
  "SD": trendSchema,
  "TN": trendSchema,
  "TX": trendSchema,
  "UT": trendSchema,
  "VA": trendSchema,
  "VT": trendSchema,
  "WA": trendSchema,
  "WI": trendSchema,
  "WV": trendSchema,
  "WY": trendSchema
})
var monthSchema = mongoose.Schema({
  JAN: stateSchema,
  FEB: stateSchema,
  MAR: stateSchema,
  APR: stateSchema,
  MAY: stateSchema,
  JUN: stateSchema,
  JUL: stateSchema,
  AUG: stateSchema,
  SEP: stateSchema,
  OCT: stateSchema,
  NOV: stateSchema,
  DEC: stateSchema,
})

var yearSchema = mongoose.Schema({
  year: Number,
  months: monthSchema
})

var YearModel = mongoose.model('Year', yearSchema);

fs.readFile(path.join(__dirname, '../csv/finalData/2010.json'), 'utf8', (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err)
    return;
  }
  var year = JSON.parse(jsonString);
  const yearTrend = new YearModel(year);
  yearTrend.save();
});

const findTrends = (params, callback) => {
  YearModel.findOne({year: params.year}).select(`months.${params.month}`)
  .then((response) => {
    callback(response.months[params.month]);
  })
}

module.exports.findTrends = findTrends;
