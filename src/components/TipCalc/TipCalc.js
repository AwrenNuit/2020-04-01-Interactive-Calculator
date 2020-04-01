import React, { useState } from 'react';
import './TipCalc.css';

export default function TipCalc() {

  const [percent, setPercent] = useState(25);
  const [total, setTotal] = useState(0);

  const calculateTip = () => (total * (percent / 100)).toFixed(2);
  const calculateGrandTotal = () => (total * (percent / 100) + +total).toFixed(2);

  return(
    <div className="main-container">
      <h1>Tip Calculator</h1>

      <div className="centering-div">
        <div className="tip-grid-container">
            <label className="label input-label1">Bill Total:</label>
            <input
              className="input input1"
              type="number" 
              min={0.00} 
              step={0.01} 
              value={total} 
              onChange={(e)=>setTotal(e.target.value)} 
              autoFocus
            />

            <label className="label input-label2">Tip Percent:</label>
            <input
              className="input input2"
              type="number" 
              min={0} 
              step={5} 
              value={percent} 
              onChange={(e)=>setPercent(e.target.value)} 
            />
        </div>
      </div>

      <div className="tip-container">
        <p className="tip">Tip: ${calculateTip()}</p>
      </div>

      <div className="total-container">
        <p className="total">Grand Total: ${calculateGrandTotal()}</p>
      </div>

    </div>
  );
}