import React from 'react';
import Button from './Button';

const Calculator = () => (
  <div className="main">
    <section className="calculate">
      <p className="result">0</p>
      <Button className="clear" label="AC" />
      <Button className="toggle-sign" label="+/-" />
      <Button className="percentage" label="%" />
      <Button className="operator" label="÷" />
      <Button className="number" label="7" />
      <Button className="number" label="8" />
      <Button className="number" label="9" />
      <Button className="operator" label="×" />
      <Button className="number" label="4" />
      <Button className="number" label="5" />
      <Button className="number" label="6" />
      <Button className="operator" label="-" />
      <Button className="number" label="1" />
      <Button className="number" label="2" />
      <Button className="number" label="3" />
      <Button className="operator" label="+" />
      <Button className="number-zero" label="0" />
      <Button className="decimal" label="." />
      <Button className="operator" label="=" />
    </section>
  </div>
);

export default Calculator;
