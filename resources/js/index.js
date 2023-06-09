import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,  Routes, Route, Link } from 'react-router-dom';

import Home from './js/screens/Home.js';
import ListOfThings from './js/screens/List.js';

ReactDOM.render((
  <BrowserRouter>
    <div>
      <nav className="container">
        <ul className="nav mt-2 mb-2">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/list">List</Link>
          </li>
        </ul>
      </nav>
    
      <Routes>
        <Route exact path="/list" component={ ListOfThings }  />
        <Route component={ Home }  />
      </Routes>
    </div>
  </BrowserRouter>
), document.getElementById('root'));
