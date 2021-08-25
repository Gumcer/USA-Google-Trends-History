import React, { useState } from 'react';
import USAMap from './USAmap/USAMap.jsx';
import RangeSlider from 'react-bootstrap-range-slider';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

const App = () => {
  const [dateValue, setDateValue] = useState(12);
  const [state, setState] = useState('');
  const [month, setMonth] = useState('JAN');
  const [numMonth, setNumMonth] = useState(1);
  const [year, setYear] = useState(2010);
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

  const monthToNum = (value) => {

  }

  const numToMonth = (value) => {
    setNumMonth(value);
    setMonth(months[value]);
  }

  const renderState = () => {
    return <div className='search'>State: {state} </div>
  }
  const hoverHandler = (event) => {
    setState(event.target.dataset.name);
  }
  const mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  return (
    <div>
      <h1>Google Trends Map</h1>
      <div className='container'>
        <USAMap title='US Map Google Trends' onClick={mapHandler} onMouseEnter={hoverHandler} />
        <div className='right-side'>
          <Form>
            <Form.Group as={Row}>
              <div className='date'>
                <div className='time-container'>
                  <div>Month</div>
                  <Form.Control value={month} />
                </div>
                <RangeSlider
                  value={numMonth}
                  onChange={e => numToMonth(e.target.value)}
                  min={1}
                  max={12}
                  tooltip={'off'}
                />
              </div>
            </Form.Group>
            <Form.Group as={Row}>
              <div className='date'>
                <div className='time-container'>
                  <div>Year</div>
                  <Form.Control value={year} />
                </div>
                <RangeSlider
                  value={year}
                  onChange={e => setYear(e.target.value)}
                  min={2010}
                  max={2021}
                  tooltip={'off'}
                />
              </div>
            </Form.Group>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default App;