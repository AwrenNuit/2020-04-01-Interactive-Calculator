import React, { useState } from 'react';
import '../TipCalc/TipCalc.css';

export default function BillSplit() {

  const [guests, setGuests] = useState(25);
  const [total, setTotal] = useState(0);

  const calculateGrandTotal = () => (total / guests).toFixed(2);

  return(
    <div className="main-container">
      <h1>Bill Splitter</h1>

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

            <label className="label input-label2">Guests:</label>
            <input
              className="input input2"
              type="number" 
              min={0} 
              step={1} 
              value={guests} 
              onChange={(e)=>setGuests(e.target.value)} 
            />
        </div>
      </div>

      <div className="total-container">
        <p className="total">You Each Pay: ${calculateGrandTotal()}</p>
      </div>

    </div>
  );
}