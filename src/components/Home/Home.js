import React, { useState } from 'react';
import './Home.css';
import TipCalc from '../TipCalc/TipCalc';
import BillSplit from '../BillSplit/BillSplit';

export default function Home() {

  const [display, setDisplay] = useState('');

  return(
    <div className="main-container">
      <h1>Choose Wisely</h1>
      
      <div className="centering-div">
        <div className="home-radio-container">
          <div>
            <label>
              <input 
                type="radio" 
                name="calc" 
                value="tip-calc" 
                onChange={(e)=>setDisplay(e.target.value)} 
              />
              Tip Calculator
            </label>
          </div>
          <br />
          <div>
            <label>
              <input 
                type="radio" 
                name="calc" 
                value="bill-splitter" 
                onChange={(e)=>setDisplay(e.target.value)} 
              />
              Bill-Splitter
            </label>
          </div>
        </div>
      </div>

    {display === 'tip-calc' ? 
      <div>
        <div className="calc-container">
          <TipCalc />
        </div>
      </div>
    : 
      ''
    }
    {display === 'bill-splitter' ? 
      <div>
        <div className="calc-container">
          <BillSplit /> 
        </div>
      </div>
    : 
      ''
    }


    </div>
  );
}