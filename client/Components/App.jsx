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
    <div className='container'>
      <USAMap title='US Map Google Trends' onClick={mapHandler} onMouseEnter={hoverHandler} />
      <div className='right-side'>
          <Form>
            <Form.Group as={Col}>
                <RangeSlider
                  value={dateValue}
                  onChange={e => setDateValue(e.target.value)}
                  min={0}
                  max={24}
                />
            <div className='total-date'>
            <div className='date'>
              <Form.Label>Month </Form.Label>
              <Form.Control placeholder='Month'/>
            </div>
            <div className='date'>
              <Form.Label>Year </Form.Label>
              <Form.Control placeholder='Year'/>
            </div>
            </div>
            </Form.Group>
          </Form>
      </div>
    </div>
  )
}
{/* <Form.Group as={Col}>
              <Col xs='5'>
                <Form.Control />
              </Col>
              <Col xs='5'>
                <Form.Control />
              </Col>
            </Form.Group> */}
export default App;