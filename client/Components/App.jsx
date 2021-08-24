import React from 'react';
import USAMap from './USAmap/USAMap.jsx';
import '../App.css';
const App = () => {
  const mapHandler = (event) => {
    alert(event.target.dataset.name);
  };

  return (
    <div>
    <USAMap title='US Map Google Trends' onClick={mapHandler} onMouseEnter={mapHandler}/>
    </div>
  )
}

export default App;