const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trends', { useNewUrlParser: true, useUnifiedTopology: true});
const Schema = mongoose.Schema;

var trendSchema = mongoose.Schema({
  trend: String,
  color: String
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

const yearTrend = new YearModel({
  year: 2010,
    months: {
    JAN: {
      "AK": {
        trend: 'January',
          color: '#000080'
      },
      "HI": {
        trend: 'January',
          color: '#000080'
      },
      "AL": {
        trend: 'January',
          color: '#000080'
      },
      "AR": {
        trend: 'January',
          color: '#000080'
      },
      "AZ": {
        trend: 'January',
          color: '#000080'
      },
      "CA": {
        trend: 'January',
          color: '#000080'
      },
      "CO": {
        trend: 'January',
          color: '#000080'
      },
      "CT": {
        trend: 'January',
          color: '#000080'
      },
      "DE": {
        trend: 'January',
          color: '#000080'
      },
      "FL": {
        trend: 'January',
          color: '#000080'
      },
      "GA": {
        trend: 'January',
          color: '#000080'
      },
      "IA": {
        trend: 'January',
          color: '#000080'
      },
      "ID": {
        trend: 'January',
          color: '#000080'
      },
      "IL": {
        trend: 'January',
          color: '#000080'
      },
      "IN": {
        trend: 'January',
          color: '#000080'
      },
      "KS": {
        trend: 'January',
          color: '#000080'
      },
      "KY": {
        trend: 'January',
          color: '#000080'
      },
      "LA": {
        trend: 'January',
          color: '#000080'
      },
      "MA": {
        trend: 'January',
          color: '#000080'
      },
      "MD": {
        trend: 'January',
          color: '#000080'
      },
      "ME": {
        trend: 'January',
          color: '#000080'
      },
      "MI": {
        trend: 'January',
          color: '#000080'
      },
      "MN": {
        trend: 'January',
          color: '#000080'
      },
      "MO": {
        trend: 'January',
          color: '#000080'
      },
      "MS": {
        trend: 'January',
          color: '#000080'
      },
      "MT": {
        trend: 'January',
          color: '#000080'
      },
      "NC": {
        trend: 'January',
          color: '#000080'
      },
      "ND": {
        trend: 'January',
          color: '#000080'
      },
      "NE": {
        trend: 'January',
          color: '#000080'
      },
      "NH": {
        trend: 'January',
          color: '#000080'
      },
      "NJ": {
        trend: 'January',
          color: '#000080'
      },
      "NM": {
        trend: 'January',
          color: '#000080'
      },
      "NV": {
        trend: 'January',
          color: '#000080'
      },
      "NY": {
        trend: 'January',
          color: '#000080'
      },
      "OH": {
        trend: 'January',
          color: '#000080'
      },
      "OK": {
        trend: 'January',
          color: '#000080'
      },
      "OR": {
        trend: 'January',
          color: '#000080'
      },
      "PA": {
        trend: 'January',
          color: '#000080'
      },
      "RI": {
        trend: 'January',
          color: '#000080'
      },
      "SC": {
        trend: 'January',
          color: '#000080'
      },
      "SD": {
        trend: 'January',
          color: '#000080'
      },
      "TN": {
        trend: 'January',
          color: '#000080'
      },
      "TX": {
        trend: 'January',
          color: '#000080'
      },
      "UT": {
        trend: 'January',
          color: '#000080'
      },
      "VA": {
        trend: 'January',
          color: '#000080'
      },
      "VT": {
        trend: 'January',
          color: '#000080'
      },
      "WA": {
        trend: 'January',
          color: '#000080'
      },
      "WI": {
        trend: 'January',
          color: '#000080'
      },
      "WV": {
        trend: 'January',
          color: '#000080'
      },
      "WY": {
        trend: 'January',
          color: '#000080'
      }
    },
    FEB: {
      "AK": {
        trend: 'February',
          color: '#ff0000'
      },
      "HI": {
        trend: 'February',
          color: '#ff0000'
      },
      "AL": {
        trend: 'February',
          color: '#ff0000'
      },
      "AR": {
        trend: 'February',
          color: '#ff0000'
      },
      "AZ": {
        trend: 'February',
          color: '#ff0000'
      },
      "CA": {
        trend: 'February',
          color: '#ff0000'
      },
      "CO": {
        trend: 'February',
          color: '#ff0000'
      },
      "CT": {
        trend: 'February',
          color: '#ff0000'
      },
      "DE": {
        trend: 'February',
          color: '#ff0000'
      },
      "FL": {
        trend: 'February',
          color: '#ff0000'
      },
      "GA": {
        trend: 'February',
          color: '#ff0000'
      },
      "IA": {
        trend: 'February',
          color: '#ff0000'
      },
      "ID": {
        trend: 'February',
          color: '#ff0000'
      },
      "IL": {
        trend: 'February',
          color: '#ff0000'
      },
      "IN": {
        trend: 'February',
          color: '#ff0000'
      },
      "KS": {
        trend: 'February',
          color: '#ff0000'
      },
      "KY": {
        trend: 'February',
          color: '#ff0000'
      },
      "LA": {
        trend: 'February',
          color: '#ff0000'
      },
      "MA": {
        trend: 'February',
          color: '#ff0000'
      },
      "MD": {
        trend: 'February',
          color: '#ff0000'
      },
      "ME": {
        trend: 'February',
          color: '#ff0000'
      },
      "MI": {
        trend: 'February',
          color: '#ff0000'
      },
      "MN": {
        trend: 'February',
          color: '#ff0000'
      },
      "MO": {
        trend: 'February',
          color: '#ff0000'
      },
      "MS": {
        trend: 'February',
          color: '#ff0000'
      },
      "MT": {
        trend: 'February',
          color: '#ff0000'
      },
      "NC": {
        trend: 'February',
          color: '#ff0000'
      },
      "ND": {
        trend: 'February',
          color: '#ff0000'
      },
      "NE": {
        trend: 'February',
          color: '#ff0000'
      },
      "NH": {
        trend: 'February',
          color: '#ff0000'
      },
      "NJ": {
        trend: 'February',
          color: '#ff0000'
      },
      "NM": {
        trend: 'February',
          color: '#ff0000'
      },
      "NV": {
        trend: 'February',
          color: '#ff0000'
      },
      "NY": {
        trend: 'February',
          color: '#ff0000'
      },
      "OH": {
        trend: 'February',
          color: '#ff0000'
      },
      "OK": {
        trend: 'February',
          color: '#ff0000'
      },
      "OR": {
        trend: 'February',
          color: '#ff0000'
      },
      "PA": {
        trend: 'February',
          color: '#ff0000'
      },
      "RI": {
        trend: 'February',
          color: '#ff0000'
      },
      "SC": {
        trend: 'February',
          color: '#ff0000'
      },
      "SD": {
        trend: 'February',
          color: '#ff0000'
      },
      "TN": {
        trend: 'February',
          color: '#ff0000'
      },
      "TX": {
        trend: 'February',
          color: '#ff0000'
      },
      "UT": {
        trend: 'February',
          color: '#ff0000'
      },
      "VA": {
        trend: 'February',
          color: '#ff0000'
      },
      "VT": {
        trend: 'February',
          color: '#ff0000'
      },
      "WA": {
        trend: 'February',
          color: '#ff0000'
      },
      "WI": {
        trend: 'February',
          color: '#ff0000'
      },
      "WV": {
        trend: 'February',
          color: '#ff0000'
      },
      "WY": {
        trend: 'February',
          color: '#ff0000'
      }
    },
    MAR: {
      "AK": {
        trend: 'March',
          color: '#008000'
      },
      "HI": {
        trend: 'March',
          color: '#008000'
      },
      "AL": {
        trend: 'March',
          color: '#008000'
      },
      "AR": {
        trend: 'March',
          color: '#008000'
      },
      "AZ": {
        trend: 'March',
          color: '#008000'
      },
      "CA": {
        trend: 'March',
          color: '#008000'
      },
      "CO": {
        trend: 'March',
          color: '#008000'
      },
      "CT": {
        trend: 'March',
          color: '#008000'
      },
      "DE": {
        trend: 'March',
          color: '#008000'
      },
      "FL": {
        trend: 'March',
          color: '#008000'
      },
      "GA": {
        trend: 'March',
          color: '#008000'
      },
      "IA": {
        trend: 'March',
          color: '#008000'
      },
      "ID": {
        trend: 'March',
          color: '#008000'
      },
      "IL": {
        trend: 'March',
          color: '#008000'
      },
      "IN": {
        trend: 'March',
          color: '#008000'
      },
      "KS": {
        trend: 'March',
          color: '#008000'
      },
      "KY": {
        trend: 'March',
          color: '#008000'
      },
      "LA": {
        trend: 'March',
          color: '#008000'
      },
      "MA": {
        trend: 'March',
          color: '#008000'
      },
      "MD": {
        trend: 'March',
          color: '#008000'
      },
      "ME": {
        trend: 'March',
          color: '#008000'
      },
      "MI": {
        trend: 'March',
          color: '#008000'
      },
      "MN": {
        trend: 'March',
          color: '#008000'
      },
      "MO": {
        trend: 'March',
          color: '#008000'
      },
      "MS": {
        trend: 'March',
          color: '#008000'
      },
      "MT": {
        trend: 'March',
          color: '#008000'
      },
      "NC": {
        trend: 'March',
          color: '#008000'
      },
      "ND": {
        trend: 'March',
          color: '#008000'
      },
      "NE": {
        trend: 'March',
          color: '#008000'
      },
      "NH": {
        trend: 'March',
          color: '#008000'
      },
      "NJ": {
        trend: 'March',
          color: '#008000'
      },
      "NM": {
        trend: 'March',
          color: '#008000'
      },
      "NV": {
        trend: 'March',
          color: '#008000'
      },
      "NY": {
        trend: 'March',
          color: '#008000'
      },
      "OH": {
        trend: 'March',
          color: '#008000'
      },
      "OK": {
        trend: 'March',
          color: '#008000'
      },
      "OR": {
        trend: 'March',
          color: '#008000'
      },
      "PA": {
        trend: 'March',
          color: '#008000'
      },
      "RI": {
        trend: 'March',
          color: '#008000'
      },
      "SC": {
        trend: 'March',
          color: '#008000'
      },
      "SD": {
        trend: 'March',
          color: '#008000'
      },
      "TN": {
        trend: 'March',
          color: '#008000'
      },
      "TX": {
        trend: 'March',
          color: '#008000'
      },
      "UT": {
        trend: 'March',
          color: '#008000'
      },
      "VA": {
        trend: 'March',
          color: '#008000'
      },
      "VT": {
        trend: 'March',
          color: '#008000'
      },
      "WA": {
        trend: 'March',
          color: '#008000'
      },
      "WI": {
        trend: 'March',
          color: '#008000'
      },
      "WV": {
        trend: 'March',
          color: '#008000'
      },
      "WY": {
        trend: 'March',
          color: '#008000'
      }
    },
    APR: {
      "AK": {
        trend: 'April',
          color: '#ff7f50'
      },
      "HI": {
        trend: 'April',
          color: '#ff7f50'
      },
      "AL": {
        trend: 'April',
          color: '#ff7f50'
      },
      "AR": {
        trend: 'April',
          color: '#ff7f50'
      },
      "AZ": {
        trend: 'April',
          color: '#ff7f50'
      },
      "CA": {
        trend: 'April',
          color: '#ff7f50'
      },
      "CO": {
        trend: 'April',
          color: '#ff7f50'
      },
      "CT": {
        trend: 'April',
          color: '#ff7f50'
      },
      "DE": {
        trend: 'April',
          color: '#ff7f50'
      },
      "FL": {
        trend: 'April',
          color: '#ff7f50'
      },
      "GA": {
        trend: 'April',
          color: '#ff7f50'
      },
      "IA": {
        trend: 'April',
          color: '#ff7f50'
      },
      "ID": {
        trend: 'April',
          color: '#ff7f50'
      },
      "IL": {
        trend: 'April',
          color: '#ff7f50'
      },
      "IN": {
        trend: 'April',
          color: '#ff7f50'
      },
      "KS": {
        trend: 'April',
          color: '#ff7f50'
      },
      "KY": {
        trend: 'April',
          color: '#ff7f50'
      },
      "LA": {
        trend: 'April',
          color: '#ff7f50'
      },
      "MA": {
        trend: 'April',
          color: '#ff7f50'
      },
      "MD": {
        trend: 'April',
          color: '#ff7f50'
      },
      "ME": {
        trend: 'April',
          color: '#ff7f50'
      },
      "MI": {
        trend: 'April',
          color: '#ff7f50'
      },
      "MN": {
        trend: 'April',
          color: '#ff7f50'
      },
      "MO": {
        trend: 'April',
          color: '#ff7f50'
      },
      "MS": {
        trend: 'April',
          color: '#ff7f50'
      },
      "MT": {
        trend: 'April',
          color: '#ff7f50'
      },
      "NC": {
        trend: 'April',
          color: '#ff7f50'
      },
      "ND": {
        trend: 'April',
          color: '#ff7f50'
      },
      "NE": {
        trend: 'April',
          color: '#ff7f50'
      },
      "NH": {
        trend: 'April',
          color: '#ff7f50'
      },
      "NJ": {
        trend: 'April',
          color: '#ff7f50'
      },
      "NM": {
        trend: 'April',
          color: '#ff7f50'
      },
      "NV": {
        trend: 'April',
          color: '#ff7f50'
      },
      "NY": {
        trend: 'April',
          color: '#ff7f50'
      },
      "OH": {
        trend: 'April',
          color: '#ff7f50'
      },
      "OK": {
        trend: 'April',
          color: '#ff7f50'
      },
      "OR": {
        trend: 'April',
          color: '#ff7f50'
      },
      "PA": {
        trend: 'April',
          color: '#ff7f50'
      },
      "RI": {
        trend: 'April',
          color: '#ff7f50'
      },
      "SC": {
        trend: 'April',
          color: '#ff7f50'
      },
      "SD": {
        trend: 'April',
          color: '#ff7f50'
      },
      "TN": {
        trend: 'April',
          color: '#ff7f50'
      },
      "TX": {
        trend: 'April',
          color: '#ff7f50'
      },
      "UT": {
        trend: 'April',
          color: '#ff7f50'
      },
      "VA": {
        trend: 'April',
          color: '#ff7f50'
      },
      "VT": {
        trend: 'April',
          color: '#ff7f50'
      },
      "WA": {
        trend: 'April',
          color: '#ff7f50'
      },
      "WI": {
        trend: 'April',
          color: '#ff7f50'
      },
      "WV": {
        trend: 'April',
          color: '#ff7f50'
      },
      "WY": {
        trend: 'April',
          color: '#ff7f50'
      }
    },
    MAY: {
      "AK": {
        trend: 'May',
          color: '#00bfff'
      },
      "HI": {
        trend: 'May',
          color: '#00bfff'
      },
      "AL": {
        trend: 'May',
          color: '#00bfff'
      },
      "AR": {
        trend: 'May',
          color: '#00bfff'
      },
      "AZ": {
        trend: 'May',
          color: '#00bfff'
      },
      "CA": {
        trend: 'May',
          color: '#00bfff'
      },
      "CO": {
        trend: 'May',
          color: '#00bfff'
      },
      "CT": {
        trend: 'May',
          color: '#00bfff'
      },
      "DE": {
        trend: 'May',
          color: '#00bfff'
      },
      "FL": {
        trend: 'May',
          color: '#00bfff'
      },
      "GA": {
        trend: 'May',
          color: '#00bfff'
      },
      "IA": {
        trend: 'May',
          color: '#00bfff'
      },
      "ID": {
        trend: 'May',
          color: '#00bfff'
      },
      "IL": {
        trend: 'May',
          color: '#00bfff'
      },
      "IN": {
        trend: 'May',
          color: '#00bfff'
      },
      "KS": {
        trend: 'May',
          color: '#00bfff'
      },
      "KY": {
        trend: 'May',
          color: '#00bfff'
      },
      "LA": {
        trend: 'May',
          color: '#00bfff'
      },
      "MA": {
        trend: 'May',
          color: '#00bfff'
      },
      "MD": {
        trend: 'May',
          color: '#00bfff'
      },
      "ME": {
        trend: 'May',
          color: '#00bfff'
      },
      "MI": {
        trend: 'May',
          color: '#00bfff'
      },
      "MN": {
        trend: 'May',
          color: '#00bfff'
      },
      "MO": {
        trend: 'May',
          color: '#00bfff'
      },
      "MS": {
        trend: 'May',
          color: '#00bfff'
      },
      "MT": {
        trend: 'May',
          color: '#00bfff'
      },
      "NC": {
        trend: 'May',
          color: '#00bfff'
      },
      "ND": {
        trend: 'May',
          color: '#00bfff'
      },
      "NE": {
        trend: 'May',
          color: '#00bfff'
      },
      "NH": {
        trend: 'May',
          color: '#00bfff'
      },
      "NJ": {
        trend: 'May',
          color: '#00bfff'
      },
      "NM": {
        trend: 'May',
          color: '#00bfff'
      },
      "NV": {
        trend: 'May',
          color: '#00bfff'
      },
      "NY": {
        trend: 'May',
          color: '#00bfff'
      },
      "OH": {
        trend: 'May',
          color: '#00bfff'
      },
      "OK": {
        trend: 'May',
          color: '#00bfff'
      },
      "OR": {
        trend: 'May',
          color: '#00bfff'
      },
      "PA": {
        trend: 'May',
          color: '#00bfff'
      },
      "RI": {
        trend: 'May',
          color: '#00bfff'
      },
      "SC": {
        trend: 'May',
          color: '#00bfff'
      },
      "SD": {
        trend: 'May',
          color: '#00bfff'
      },
      "TN": {
        trend: 'May',
          color: '#00bfff'
      },
      "TX": {
        trend: 'May',
          color: '#00bfff'
      },
      "UT": {
        trend: 'May',
          color: '#00bfff'
      },
      "VA": {
        trend: 'May',
          color: '#00bfff'
      },
      "VT": {
        trend: 'May',
          color: '#00bfff'
      },
      "WA": {
        trend: 'May',
          color: '#00bfff'
      },
      "WI": {
        trend: 'May',
          color: '#00bfff'
      },
      "WV": {
        trend: 'May',
          color: '#00bfff'
      },
      "WY": {
        trend: 'May',
          color: '#00bfff'
      }
    },
    JUN: {
      "AK": {
        trend: 'June',
          color: '#ffa500'
      },
      "HI": {
        trend: 'June',
          color: '#ffa500'
      },
      "AL": {
        trend: 'June',
          color: '#ffa500'
      },
      "AR": {
        trend: 'June',
          color: '#ffa500'
      },
      "AZ": {
        trend: 'June',
          color: '#ffa500'
      },
      "CA": {
        trend: 'June',
          color: '#ffa500'
      },
      "CO": {
        trend: 'June',
          color: '#ffa500'
      },
      "CT": {
        trend: 'June',
          color: '#ffa500'
      },
      "DE": {
        trend: 'June',
          color: '#ffa500'
      },
      "FL": {
        trend: 'June',
          color: '#ffa500'
      },
      "GA": {
        trend: 'June',
          color: '#ffa500'
      },
      "IA": {
        trend: 'June',
          color: '#ffa500'
      },
      "ID": {
        trend: 'June',
          color: '#ffa500'
      },
      "IL": {
        trend: 'June',
          color: '#ffa500'
      },
      "IN": {
        trend: 'June',
          color: '#ffa500'
      },
      "KS": {
        trend: 'June',
          color: '#ffa500'
      },
      "KY": {
        trend: 'June',
          color: '#ffa500'
      },
      "LA": {
        trend: 'June',
          color: '#ffa500'
      },
      "MA": {
        trend: 'June',
          color: '#ffa500'
      },
      "MD": {
        trend: 'June',
          color: '#ffa500'
      },
      "ME": {
        trend: 'June',
          color: '#ffa500'
      },
      "MI": {
        trend: 'June',
          color: '#ffa500'
      },
      "MN": {
        trend: 'June',
          color: '#ffa500'
      },
      "MO": {
        trend: 'June',
          color: '#ffa500'
      },
      "MS": {
        trend: 'June',
          color: '#ffa500'
      },
      "MT": {
        trend: 'June',
          color: '#ffa500'
      },
      "NC": {
        trend: 'June',
          color: '#ffa500'
      },
      "ND": {
        trend: 'June',
          color: '#ffa500'
      },
      "NE": {
        trend: 'June',
          color: '#ffa500'
      },
      "NH": {
        trend: 'June',
          color: '#ffa500'
      },
      "NJ": {
        trend: 'June',
          color: '#ffa500'
      },
      "NM": {
        trend: 'June',
          color: '#ffa500'
      },
      "NV": {
        trend: 'June',
          color: '#ffa500'
      },
      "NY": {
        trend: 'June',
          color: '#ffa500'
      },
      "OH": {
        trend: 'June',
          color: '#ffa500'
      },
      "OK": {
        trend: 'June',
          color: '#ffa500'
      },
      "OR": {
        trend: 'June',
          color: '#ffa500'
      },
      "PA": {
        trend: 'June',
          color: '#ffa500'
      },
      "RI": {
        trend: 'June',
          color: '#ffa500'
      },
      "SC": {
        trend: 'June',
          color: '#ffa500'
      },
      "SD": {
        trend: 'June',
          color: '#ffa500'
      },
      "TN": {
        trend: 'June',
          color: '#ffa500'
      },
      "TX": {
        trend: 'June',
          color: '#ffa500'
      },
      "UT": {
        trend: 'June',
          color: '#ffa500'
      },
      "VA": {
        trend: 'June',
          color: '#ffa500'
      },
      "VT": {
        trend: 'June',
          color: '#ffa500'
      },
      "WA": {
        trend: 'June',
          color: '#ffa500'
      },
      "WI": {
        trend: 'June',
          color: '#ffa500'
      },
      "WV": {
        trend: 'June',
          color: '#ffa500'
      },
      "WY": {
        trend: 'June',
          color: '#ffa500'
      }
    },
    JUL: {
      "AK": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "HI": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "AL": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "AR": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "AZ": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "CA": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "CO": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "CT": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "DE": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "FL": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "GA": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "IA": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "ID": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "IL": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "IN": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "KS": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "KY": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "LA": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "MA": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "MD": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "ME": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "MI": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "MN": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "MO": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "MS": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "MT": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "NC": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "ND": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "NE": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "NH": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "NJ": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "NM": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "NV": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "NY": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "OH": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "OK": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "OR": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "PA": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "RI": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "SC": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "SD": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "TN": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "TX": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "UT": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "VA": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "VT": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "WA": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "WI": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "WV": {
        trend: 'July',
          color: '#f5f5dc'
      },
      "WY": {
        trend: 'July',
          color: '#f5f5dc'
      }
    },
    AUG: {
      "AK": {
        trend: 'August',
          color: '#fff0f5'
      },
      "HI": {
        trend: 'August',
          color: '#fff0f5'
      },
      "AL": {
        trend: 'August',
          color: '#fff0f5'
      },
      "AR": {
        trend: 'August',
          color: '#fff0f5'
      },
      "AZ": {
        trend: 'August',
          color: '#fff0f5'
      },
      "CA": {
        trend: 'August',
          color: '#fff0f5'
      },
      "CO": {
        trend: 'August',
          color: '#fff0f5'
      },
      "CT": {
        trend: 'August',
          color: '#fff0f5'
      },
      "DE": {
        trend: 'August',
          color: '#fff0f5'
      },
      "FL": {
        trend: 'August',
          color: '#fff0f5'
      },
      "GA": {
        trend: 'August',
          color: '#fff0f5'
      },
      "IA": {
        trend: 'August',
          color: '#fff0f5'
      },
      "ID": {
        trend: 'August',
          color: '#fff0f5'
      },
      "IL": {
        trend: 'August',
          color: '#fff0f5'
      },
      "IN": {
        trend: 'August',
          color: '#fff0f5'
      },
      "KS": {
        trend: 'August',
          color: '#fff0f5'
      },
      "KY": {
        trend: 'August',
          color: '#fff0f5'
      },
      "LA": {
        trend: 'August',
          color: '#fff0f5'
      },
      "MA": {
        trend: 'August',
          color: '#fff0f5'
      },
      "MD": {
        trend: 'August',
          color: '#fff0f5'
      },
      "ME": {
        trend: 'August',
          color: '#fff0f5'
      },
      "MI": {
        trend: 'August',
          color: '#fff0f5'
      },
      "MN": {
        trend: 'August',
          color: '#fff0f5'
      },
      "MO": {
        trend: 'August',
          color: '#fff0f5'
      },
      "MS": {
        trend: 'August',
          color: '#fff0f5'
      },
      "MT": {
        trend: 'August',
          color: '#fff0f5'
      },
      "NC": {
        trend: 'August',
          color: '#fff0f5'
      },
      "ND": {
        trend: 'August',
          color: '#fff0f5'
      },
      "NE": {
        trend: 'August',
          color: '#fff0f5'
      },
      "NH": {
        trend: 'August',
          color: '#fff0f5'
      },
      "NJ": {
        trend: 'August',
          color: '#fff0f5'
      },
      "NM": {
        trend: 'August',
          color: '#fff0f5'
      },
      "NV": {
        trend: 'August',
          color: '#fff0f5'
      },
      "NY": {
        trend: 'August',
          color: '#fff0f5'
      },
      "OH": {
        trend: 'August',
          color: '#fff0f5'
      },
      "OK": {
        trend: 'August',
          color: '#fff0f5'
      },
      "OR": {
        trend: 'August',
          color: '#fff0f5'
      },
      "PA": {
        trend: 'August',
          color: '#fff0f5'
      },
      "RI": {
        trend: 'August',
          color: '#fff0f5'
      },
      "SC": {
        trend: 'August',
          color: '#fff0f5'
      },
      "SD": {
        trend: 'August',
          color: '#fff0f5'
      },
      "TN": {
        trend: 'August',
          color: '#fff0f5'
      },
      "TX": {
        trend: 'August',
          color: '#fff0f5'
      },
      "UT": {
        trend: 'August',
          color: '#fff0f5'
      },
      "VA": {
        trend: 'August',
          color: '#fff0f5'
      },
      "VT": {
        trend: 'August',
          color: '#fff0f5'
      },
      "WA": {
        trend: 'August',
          color: '#fff0f5'
      },
      "WI": {
        trend: 'August',
          color: '#fff0f5'
      },
      "WV": {
        trend: 'August',
          color: '#fff0f5'
      },
      "WY": {
        trend: 'August',
          color: '#fff0f5'
      }
    },
    SEP: {
      "AK": {
        trend: 'September',
          color: '#ff00ff'
      },
      "HI": {
        trend: 'September',
          color: '#ff00ff'
      },
      "AL": {
        trend: 'September',
          color: '#ff00ff'
      },
      "AR": {
        trend: 'September',
          color: '#ff00ff'
      },
      "AZ": {
        trend: 'September',
          color: '#ff00ff'
      },
      "CA": {
        trend: 'September',
          color: '#ff00ff'
      },
      "CO": {
        trend: 'September',
          color: '#ff00ff'
      },
      "CT": {
        trend: 'September',
          color: '#ff00ff'
      },
      "DE": {
        trend: 'September',
          color: '#ff00ff'
      },
      "FL": {
        trend: 'September',
          color: '#ff00ff'
      },
      "GA": {
        trend: 'September',
          color: '#ff00ff'
      },
      "IA": {
        trend: 'September',
          color: '#ff00ff'
      },
      "ID": {
        trend: 'September',
          color: '#ff00ff'
      },
      "IL": {
        trend: 'September',
          color: '#ff00ff'
      },
      "IN": {
        trend: 'September',
          color: '#ff00ff'
      },
      "KS": {
        trend: 'September',
          color: '#ff00ff'
      },
      "KY": {
        trend: 'September',
          color: '#ff00ff'
      },
      "LA": {
        trend: 'September',
          color: '#ff00ff'
      },
      "MA": {
        trend: 'September',
          color: '#ff00ff'
      },
      "MD": {
        trend: 'September',
          color: '#ff00ff'
      },
      "ME": {
        trend: 'September',
          color: '#ff00ff'
      },
      "MI": {
        trend: 'September',
          color: '#ff00ff'
      },
      "MN": {
        trend: 'September',
          color: '#ff00ff'
      },
      "MO": {
        trend: 'September',
          color: '#ff00ff'
      },
      "MS": {
        trend: 'September',
          color: '#ff00ff'
      },
      "MT": {
        trend: 'September',
          color: '#ff00ff'
      },
      "NC": {
        trend: 'September',
          color: '#ff00ff'
      },
      "ND": {
        trend: 'September',
          color: '#ff00ff'
      },
      "NE": {
        trend: 'September',
          color: '#ff00ff'
      },
      "NH": {
        trend: 'September',
          color: '#ff00ff'
      },
      "NJ": {
        trend: 'September',
          color: '#ff00ff'
      },
      "NM": {
        trend: 'September',
          color: '#ff00ff'
      },
      "NV": {
        trend: 'September',
          color: '#ff00ff'
      },
      "NY": {
        trend: 'September',
          color: '#ff00ff'
      },
      "OH": {
        trend: 'September',
          color: '#ff00ff'
      },
      "OK": {
        trend: 'September',
          color: '#ff00ff'
      },
      "OR": {
        trend: 'September',
          color: '#ff00ff'
      },
      "PA": {
        trend: 'September',
          color: '#ff00ff'
      },
      "RI": {
        trend: 'September',
          color: '#ff00ff'
      },
      "SC": {
        trend: 'September',
          color: '#ff00ff'
      },
      "SD": {
        trend: 'September',
          color: '#ff00ff'
      },
      "TN": {
        trend: 'September',
          color: '#ff00ff'
      },
      "TX": {
        trend: 'September',
          color: '#ff00ff'
      },
      "UT": {
        trend: 'September',
          color: '#ff00ff'
      },
      "VA": {
        trend: 'September',
          color: '#ff00ff'
      },
      "VT": {
        trend: 'September',
          color: '#ff00ff'
      },
      "WA": {
        trend: 'September',
          color: '#ff00ff'
      },
      "WI": {
        trend: 'September',
          color: '#ff00ff'
      },
      "WV": {
        trend: 'September',
          color: '#ff00ff'
      },
      "WY": {
        trend: 'September',
          color: '#ff00ff'
      }
    },
    OCT: {
      "AK": {
        trend: 'October',
          color: '#fafad2'
      },
      "HI": {
        trend: 'October',
          color: '#fafad2'
      },
      "AL": {
        trend: 'October',
          color: '#fafad2'
      },
      "AR": {
        trend: 'October',
          color: '#fafad2'
      },
      "AZ": {
        trend: 'October',
          color: '#fafad2'
      },
      "CA": {
        trend: 'October',
          color: '#fafad2'
      },
      "CO": {
        trend: 'October',
          color: '#fafad2'
      },
      "CT": {
        trend: 'October',
          color: '#fafad2'
      },
      "DE": {
        trend: 'October',
          color: '#fafad2'
      },
      "FL": {
        trend: 'October',
          color: '#fafad2'
      },
      "GA": {
        trend: 'October',
          color: '#fafad2'
      },
      "IA": {
        trend: 'October',
          color: '#fafad2'
      },
      "ID": {
        trend: 'October',
          color: '#fafad2'
      },
      "IL": {
        trend: 'October',
          color: '#fafad2'
      },
      "IN": {
        trend: 'October',
          color: '#fafad2'
      },
      "KS": {
        trend: 'October',
          color: '#fafad2'
      },
      "KY": {
        trend: 'October',
          color: '#fafad2'
      },
      "LA": {
        trend: 'October',
          color: '#fafad2'
      },
      "MA": {
        trend: 'October',
          color: '#fafad2'
      },
      "MD": {
        trend: 'October',
          color: '#fafad2'
      },
      "ME": {
        trend: 'October',
          color: '#fafad2'
      },
      "MI": {
        trend: 'October',
          color: '#fafad2'
      },
      "MN": {
        trend: 'October',
          color: '#fafad2'
      },
      "MO": {
        trend: 'October',
          color: '#fafad2'
      },
      "MS": {
        trend: 'October',
          color: '#fafad2'
      },
      "MT": {
        trend: 'October',
          color: '#fafad2'
      },
      "NC": {
        trend: 'October',
          color: '#fafad2'
      },
      "ND": {
        trend: 'October',
          color: '#fafad2'
      },
      "NE": {
        trend: 'October',
          color: '#fafad2'
      },
      "NH": {
        trend: 'October',
          color: '#fafad2'
      },
      "NJ": {
        trend: 'October',
          color: '#fafad2'
      },
      "NM": {
        trend: 'October',
          color: '#fafad2'
      },
      "NV": {
        trend: 'October',
          color: '#fafad2'
      },
      "NY": {
        trend: 'October',
          color: '#fafad2'
      },
      "OH": {
        trend: 'October',
          color: '#fafad2'
      },
      "OK": {
        trend: 'October',
          color: '#fafad2'
      },
      "OR": {
        trend: 'October',
          color: '#fafad2'
      },
      "PA": {
        trend: 'October',
          color: '#fafad2'
      },
      "RI": {
        trend: 'October',
          color: '#fafad2'
      },
      "SC": {
        trend: 'October',
          color: '#fafad2'
      },
      "SD": {
        trend: 'October',
          color: '#fafad2'
      },
      "TN": {
        trend: 'October',
          color: '#fafad2'
      },
      "TX": {
        trend: 'October',
          color: '#fafad2'
      },
      "UT": {
        trend: 'October',
          color: '#fafad2'
      },
      "VA": {
        trend: 'October',
          color: '#fafad2'
      },
      "VT": {
        trend: 'October',
          color: '#fafad2'
      },
      "WA": {
        trend: 'October',
          color: '#fafad2'
      },
      "WI": {
        trend: 'October',
          color: '#fafad2'
      },
      "WV": {
        trend: 'October',
          color: '#fafad2'
      },
      "WY": {
        trend: 'October',
          color: '#fafad2'
      }
    },
    NOV: {
      "AK": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "HI": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "AL": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "AR": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "AZ": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "CA": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "CO": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "CT": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "DE": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "FL": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "GA": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "IA": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "ID": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "IL": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "IN": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "KS": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "KY": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "LA": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "MA": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "MD": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "ME": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "MI": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "MN": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "MO": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "MS": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "MT": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "NC": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "ND": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "NE": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "NH": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "NJ": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "NM": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "NV": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "NY": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "OH": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "OK": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "OR": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "PA": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "RI": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "SC": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "SD": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "TN": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "TX": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "UT": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "VA": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "VT": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "WA": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "WI": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "WV": {
        trend: 'November',
          color: '#f5f5f5'
      },
      "WY": {
        trend: 'November',
          color: '#f5f5f5'
      }
    },
    DEC: {
      "AK": {
        trend: 'December',
          color: '#fffafa'
      },
      "HI": {
        trend: 'December',
          color: '#fffafa'
      },
      "AL": {
        trend: 'December',
          color: '#fffafa'
      },
      "AR": {
        trend: 'December',
          color: '#fffafa'
      },
      "AZ": {
        trend: 'December',
          color: '#fffafa'
      },
      "CA": {
        trend: 'December',
          color: '#fffafa'
      },
      "CO": {
        trend: 'December',
          color: '#fffafa'
      },
      "CT": {
        trend: 'December',
          color: '#fffafa'
      },
      "DE": {
        trend: 'December',
          color: '#fffafa'
      },
      "FL": {
        trend: 'December',
          color: '#fffafa'
      },
      "GA": {
        trend: 'December',
          color: '#fffafa'
      },
      "IA": {
        trend: 'December',
          color: '#fffafa'
      },
      "ID": {
        trend: 'December',
          color: '#fffafa'
      },
      "IL": {
        trend: 'December',
          color: '#fffafa'
      },
      "IN": {
        trend: 'December',
          color: '#fffafa'
      },
      "KS": {
        trend: 'December',
          color: '#fffafa'
      },
      "KY": {
        trend: 'December',
          color: '#fffafa'
      },
      "LA": {
        trend: 'December',
          color: '#fffafa'
      },
      "MA": {
        trend: 'December',
          color: '#fffafa'
      },
      "MD": {
        trend: 'December',
          color: '#fffafa'
      },
      "ME": {
        trend: 'December',
          color: '#fffafa'
      },
      "MI": {
        trend: 'December',
          color: '#fffafa'
      },
      "MN": {
        trend: 'December',
          color: '#fffafa'
      },
      "MO": {
        trend: 'December',
          color: '#fffafa'
      },
      "MS": {
        trend: 'December',
          color: '#fffafa'
      },
      "MT": {
        trend: 'December',
          color: '#fffafa'
      },
      "NC": {
        trend: 'December',
          color: '#fffafa'
      },
      "ND": {
        trend: 'December',
          color: '#fffafa'
      },
      "NE": {
        trend: 'December',
          color: '#fffafa'
      },
      "NH": {
        trend: 'December',
          color: '#fffafa'
      },
      "NJ": {
        trend: 'December',
          color: '#fffafa'
      },
      "NM": {
        trend: 'December',
          color: '#fffafa'
      },
      "NV": {
        trend: 'December',
          color: '#fffafa'
      },
      "NY": {
        trend: 'December',
          color: '#fffafa'
      },
      "OH": {
        trend: 'December',
          color: '#fffafa'
      },
      "OK": {
        trend: 'December',
          color: '#fffafa'
      },
      "OR": {
        trend: 'December',
          color: '#fffafa'
      },
      "PA": {
        trend: 'December',
          color: '#fffafa'
      },
      "RI": {
        trend: 'December',
          color: '#fffafa'
      },
      "SC": {
        trend: 'December',
          color: '#fffafa'
      },
      "SD": {
        trend: 'December',
          color: '#fffafa'
      },
      "TN": {
        trend: 'December',
          color: '#fffafa'
      },
      "TX": {
        trend: 'December',
          color: '#fffafa'
      },
      "UT": {
        trend: 'December',
          color: '#fffafa'
      },
      "VA": {
        trend: 'December',
          color: '#fffafa'
      },
      "VT": {
        trend: 'December',
          color: '#fffafa'
      },
      "WA": {
        trend: 'December',
          color: '#fffafa'
      },
      "WI": {
        trend: 'December',
          color: '#fffafa'
      },
      "WV": {
        trend: 'December',
          color: '#fffafa'
      },
      "WY": {
        trend: 'December',
          color: '#fffafa'
      }
    }
  }
});

yearTrend.save();

const findTrends = (params, callback) => {
  YearModel.findOne({year: params.year}).select(`months.${params.month}`)
  .then((response) => {
    callback(response.months[params.month]);
  })
}

module.exports.findTrends = findTrends;
// Collection example:
// {
//   year: 2010,
//     months: {
//     JAN: {
//       "AK": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "HI": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "AL": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "AR": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "AZ": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "CA": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "CO": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "CT": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "DE": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "FL": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "GA": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "IA": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "ID": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "IL": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "IN": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "KS": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "KY": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "LA": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "MA": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "MD": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "ME": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "MI": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "MN": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "MO": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "MS": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "MT": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "NC": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "ND": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "NE": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "NH": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "NJ": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "NM": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "NV": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "NY": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "OH": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "OK": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "OR": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "PA": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "RI": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "SC": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "SD": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "TN": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "TX": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "UT": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "VA": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "VT": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "WA": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "WI": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "WV": {
//         trend: 'January',
//           color: '#000080'
//       },
//       "WY": {
//         trend: 'January',
//           color: '#000080'
//       }
//     },
//     FEB: {
//       "AK": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "HI": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "AL": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "AR": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "AZ": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "CA": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "CO": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "CT": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "DE": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "FL": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "GA": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "IA": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "ID": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "IL": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "IN": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "KS": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "KY": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "LA": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "MA": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "MD": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "ME": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "MI": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "MN": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "MO": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "MS": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "MT": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "NC": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "ND": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "NE": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "NH": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "NJ": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "NM": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "NV": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "NY": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "OH": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "OK": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "OR": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "PA": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "RI": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "SC": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "SD": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "TN": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "TX": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "UT": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "VA": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "VT": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "WA": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "WI": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "WV": {
//         trend: 'February',
//           color: '#ff0000'
//       },
//       "WY": {
//         trend: 'February',
//           color: '#ff0000'
//       }
//     },
//     MAR: {
//       "AK": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "HI": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "AL": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "AR": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "AZ": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "CA": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "CO": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "CT": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "DE": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "FL": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "GA": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "IA": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "ID": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "IL": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "IN": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "KS": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "KY": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "LA": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "MA": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "MD": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "ME": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "MI": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "MN": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "MO": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "MS": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "MT": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "NC": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "ND": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "NE": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "NH": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "NJ": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "NM": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "NV": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "NY": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "OH": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "OK": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "OR": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "PA": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "RI": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "SC": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "SD": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "TN": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "TX": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "UT": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "VA": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "VT": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "WA": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "WI": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "WV": {
//         trend: 'March',
//           color: '#008000'
//       },
//       "WY": {
//         trend: 'March',
//           color: '#008000'
//       }
//     },
//     APR: {
//       "AK": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "HI": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "AL": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "AR": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "AZ": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "CA": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "CO": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "CT": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "DE": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "FL": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "GA": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "IA": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "ID": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "IL": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "IN": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "KS": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "KY": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "LA": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "MA": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "MD": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "ME": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "MI": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "MN": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "MO": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "MS": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "MT": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "NC": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "ND": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "NE": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "NH": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "NJ": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "NM": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "NV": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "NY": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "OH": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "OK": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "OR": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "PA": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "RI": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "SC": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "SD": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "TN": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "TX": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "UT": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "VA": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "VT": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "WA": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "WI": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "WV": {
//         trend: 'April',
//           color: '#ff7f50'
//       },
//       "WY": {
//         trend: 'April',
//           color: '#ff7f50'
//       }
//     },
//     MAY: {
//       "AK": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "HI": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "AL": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "AR": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "AZ": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "CA": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "CO": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "CT": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "DE": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "FL": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "GA": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "IA": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "ID": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "IL": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "IN": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "KS": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "KY": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "LA": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "MA": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "MD": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "ME": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "MI": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "MN": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "MO": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "MS": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "MT": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "NC": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "ND": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "NE": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "NH": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "NJ": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "NM": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "NV": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "NY": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "OH": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "OK": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "OR": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "PA": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "RI": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "SC": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "SD": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "TN": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "TX": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "UT": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "VA": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "VT": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "WA": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "WI": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "WV": {
//         trend: 'May',
//           color: '#00bfff'
//       },
//       "WY": {
//         trend: 'May',
//           color: '#00bfff'
//       }
//     },
//     JUN: {
//       "AK": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "HI": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "AL": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "AR": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "AZ": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "CA": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "CO": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "CT": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "DE": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "FL": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "GA": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "IA": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "ID": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "IL": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "IN": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "KS": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "KY": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "LA": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "MA": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "MD": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "ME": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "MI": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "MN": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "MO": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "MS": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "MT": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "NC": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "ND": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "NE": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "NH": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "NJ": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "NM": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "NV": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "NY": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "OH": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "OK": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "OR": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "PA": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "RI": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "SC": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "SD": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "TN": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "TX": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "UT": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "VA": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "VT": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "WA": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "WI": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "WV": {
//         trend: 'June',
//           color: '#ffa500'
//       },
//       "WY": {
//         trend: 'June',
//           color: '#ffa500'
//       }
//     },
//     JUL: {
//       "AK": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "HI": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "AL": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "AR": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "AZ": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "CA": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "CO": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "CT": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "DE": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "FL": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "GA": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "IA": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "ID": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "IL": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "IN": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "KS": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "KY": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "LA": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "MA": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "MD": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "ME": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "MI": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "MN": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "MO": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "MS": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "MT": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "NC": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "ND": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "NE": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "NH": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "NJ": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "NM": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "NV": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "NY": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "OH": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "OK": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "OR": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "PA": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "RI": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "SC": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "SD": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "TN": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "TX": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "UT": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "VA": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "VT": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "WA": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "WI": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "WV": {
//         trend: 'July',
//           color: '#f5f5dc'
//       },
//       "WY": {
//         trend: 'July',
//           color: '#f5f5dc'
//       }
//     },
//     AUG: {
//       "AK": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "HI": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "AL": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "AR": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "AZ": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "CA": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "CO": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "CT": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "DE": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "FL": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "GA": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "IA": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "ID": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "IL": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "IN": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "KS": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "KY": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "LA": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "MA": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "MD": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "ME": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "MI": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "MN": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "MO": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "MS": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "MT": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "NC": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "ND": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "NE": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "NH": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "NJ": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "NM": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "NV": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "NY": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "OH": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "OK": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "OR": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "PA": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "RI": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "SC": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "SD": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "TN": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "TX": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "UT": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "VA": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "VT": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "WA": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "WI": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "WV": {
//         trend: 'August',
//           color: '#fff0f5'
//       },
//       "WY": {
//         trend: 'August',
//           color: '#fff0f5'
//       }
//     },
//     SEP: {
//       "AK": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "HI": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "AL": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "AR": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "AZ": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "CA": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "CO": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "CT": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "DE": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "FL": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "GA": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "IA": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "ID": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "IL": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "IN": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "KS": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "KY": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "LA": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "MA": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "MD": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "ME": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "MI": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "MN": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "MO": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "MS": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "MT": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "NC": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "ND": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "NE": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "NH": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "NJ": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "NM": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "NV": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "NY": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "OH": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "OK": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "OR": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "PA": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "RI": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "SC": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "SD": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "TN": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "TX": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "UT": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "VA": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "VT": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "WA": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "WI": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "WV": {
//         trend: 'September',
//           color: '#ff00ff'
//       },
//       "WY": {
//         trend: 'September',
//           color: '#ff00ff'
//       }
//     },
//     OCT: {
//       "AK": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "HI": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "AL": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "AR": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "AZ": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "CA": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "CO": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "CT": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "DE": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "FL": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "GA": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "IA": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "ID": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "IL": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "IN": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "KS": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "KY": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "LA": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "MA": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "MD": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "ME": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "MI": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "MN": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "MO": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "MS": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "MT": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "NC": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "ND": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "NE": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "NH": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "NJ": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "NM": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "NV": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "NY": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "OH": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "OK": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "OR": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "PA": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "RI": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "SC": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "SD": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "TN": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "TX": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "UT": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "VA": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "VT": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "WA": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "WI": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "WV": {
//         trend: 'October',
//           color: '#fafad2'
//       },
//       "WY": {
//         trend: 'October',
//           color: '#fafad2'
//       }
//     },
//     NOV: {
//       "AK": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "HI": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "AL": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "AR": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "AZ": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "CA": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "CO": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "CT": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "DE": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "FL": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "GA": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "IA": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "ID": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "IL": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "IN": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "KS": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "KY": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "LA": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "MA": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "MD": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "ME": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "MI": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "MN": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "MO": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "MS": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "MT": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "NC": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "ND": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "NE": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "NH": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "NJ": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "NM": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "NV": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "NY": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "OH": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "OK": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "OR": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "PA": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "RI": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "SC": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "SD": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "TN": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "TX": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "UT": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "VA": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "VT": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "WA": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "WI": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "WV": {
//         trend: 'November',
//           color: '#f5f5f5'
//       },
//       "WY": {
//         trend: 'November',
//           color: '#f5f5f5'
//       }
//     },
//     DEC: {
//       "AK": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "HI": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "AL": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "AR": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "AZ": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "CA": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "CO": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "CT": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "DE": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "FL": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "GA": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "IA": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "ID": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "IL": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "IN": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "KS": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "KY": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "LA": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "MA": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "MD": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "ME": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "MI": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "MN": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "MO": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "MS": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "MT": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "NC": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "ND": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "NE": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "NH": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "NJ": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "NM": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "NV": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "NY": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "OH": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "OK": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "OR": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "PA": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "RI": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "SC": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "SD": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "TN": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "TX": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "UT": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "VA": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "VT": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "WA": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "WI": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "WV": {
//         trend: 'December',
//           color: '#fffafa'
//       },
//       "WY": {
//         trend: 'December',
//           color: '#fffafa'
//       }
//     }
//   }
// }