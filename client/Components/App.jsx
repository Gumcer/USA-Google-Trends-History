import React, { useState, useEffect } from 'react';
import USAMap from './USAmap/USAMap.jsx';
import RangeSlider from 'react-bootstrap-range-slider';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import '../App.css';

const App = () => {
  const [dateValue, setDateValue] = useState(12);
  const [state, setState] = useState('');
  const [month, setMonth] = useState('JAN');
  const [numMonth, setNumMonth] = useState(1);
  const [year, setYear] = useState(2010);
  const [trends, setTrends] = useState({});
  const [finalTrends, setFinalTrends] = useState({});
  const [customize, setCustomize] = useState({});
  const [fullState, setFullState] = useState('')
  const months = {
    1: 'JAN',
    2: 'FEB',
    3: 'MAR',
    4: 'APR',
    5: 'MAY',
    6: 'JUN',
    7: 'JUL',
    8: 'AUG',
    9: 'SEP',
    10: 'OCT',
    11: 'NOV',
    12: 'DEC',
  }

  const renderTrend = () => {
    if (state.length != 0) {
      var trending = trends[state];
      return (
        <div className='hover-modal'>
          <h3>
            State: {fullState}
          </h3>
          <div>
            The most popular Google search on {month} {year} in {fullState} was...
          </div>
          <h2>
            "{trending.trend}"
          </h2>
          <div>
            Please click on {fullState} if you wish to be redirected to the actual search!
          </div>
        </div>
      )
    } else {
      return (
        <div className='hover-modal'>
          Hover over any of the states and watch what happens!
        </div>
      )
    }
  }
  const customizeStates = () => {
    var custom = {};
    var newTrends = {};
    for (var state in trends) {
      var trending = (trends[state]);
      var newState = (trends[state]);
      custom[state] = newState;
    }
    setCustomize(custom);
  }

  const getTrends = () => {
    axios.get(`/states/${year}/${month}`)
      .then((states) => {
        return states.data;
      })
      .then((data) => {
        setTrends(data);
      })
      .catch((err) => {
        console.log('Error: ', err)
      })
  }


  useEffect(() => {
    getTrends();
  }, [numMonth])

  useEffect(() => {
    customizeStates();
  }, [trends])

  const monthToNum = () => {
    for (var num in months) {
      if (months[num] === month) {
        setNumMonth(num);
        break;
      }
    }
  }

  useEffect(() => {
    monthToNum()
  })
  const numToMonth = (value) => {
    setNumMonth(value);
    setMonth(months[value]);
  }

  const renderState = () => {
    return <div className='search'>State: {state} </div>
  }
  const hoverHandler = (event) => {
    setFullState(event.target.firstElementChild.innerHTML);
    setState(event.target.dataset.name);
  }
  const mapHandler = (event) => {
    var trending = trends[state];
    if (window.confirm(`Clicking "ok" will redirect you to a Google search of "${trending.trend}". Are you sure? `)) {
      window.location.href = `https://google.com/search?q=${trending.trend}`;
    };
  };

  return (
    <div>
      <h1>Google Trends Map</h1>
      <div className='container'>
        <USAMap title='US Map Google Trends' customize={trends} onClick={mapHandler} onMouseEnter={hoverHandler} />
        <div className='right-side'>
          <Form>
            <Form.Group as={Row}>
              <div className='date'>
                <div className='time-container'>
                  <div>Month</div>
                  <Form.Control style={{ width: '30px' }} value={month} onChange={(e) =>  setMonth(e.target.value)}/>
                </div>
                <RangeSlider
                  value={numMonth}
                  onChange={e => numToMonth(e.target.value)}
                  min={1}
                  max={12}
                  tooltip={'off'}
                  style={{ width: '200px' }}
                />
              </div>
            </Form.Group>
            <Form.Group as={Row}>
              <div className='date'>
                <div className='time-container'>
                  <div>Year</div>
                  <Form.Control style={{ width: '35px' }} value={year} onChange={(e) => setYear(e.target.value)}/>
                </div>
                <RangeSlider
                  value={year}
                  onChange={e => setYear(e.target.value)}
                  min={2010}
                  max={2021}
                  style={{ width: '200px' }}
                />
              </div>
            </Form.Group>
          </Form>
          {renderTrend()}
        </div>
      </div>
    </div>
  )
}

export default App;