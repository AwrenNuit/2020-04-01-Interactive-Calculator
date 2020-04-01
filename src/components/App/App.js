import React from 'react';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from '../Home/Home';
// import TipCalc from '../TipCalc/TipCalc';
// import BillSplit from '../BillSplit/BillSplit';

export default function App() {
  return (
    <>
      <Home />
    </>
    // <Router>
    //   <Route path='/' component={Home} />
    //   <Route path='/tip-calculator' component={TipCalc} />
    //   <Route path='/bill-splitter' component={BillSplit} />
    // </Router>
  );
}