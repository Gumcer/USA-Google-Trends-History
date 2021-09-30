import React, {useState, useEffect, Suspense, lazy} from 'react';
import axios from 'axios';
import { AppContainer } from './App.style.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar/Navbar.jsx';
import Contact from './Contact/Contact.jsx';
import Inspiration from './Inspiration/Inspiration.jsx';
import USARange from './USAMap/USARange.jsx';
const App = () => {
  return (
    <Router>
      <AppContainer>
        <div id='main'>
          <Navbar/>
            <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={USARange} />
            <Route exact path="/inspiration">
              <Inspiration/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
          </Switch>
            </Suspense>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
        </Suspense>
      </AppContainer>
    </Router>
  )
}

export default App;