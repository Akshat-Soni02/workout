import React, { useState } from 'react';
import {LightText} from '../customTypo/CustomTypo.jsx'

const NumberField = ({ min = 0, max = 100, step = 1 }) => {
  const [value, setValue] = useState(min);

  const handleIncrement = () => {
    if (value + step <= max) {
      setValue(value + step);
    }
  };

  const handleDecrement = () => {
    if (value - step >= min) {
      setValue(value - step);
    }
  };

  const handleChange = (event) => {
    const newValue = Number(event.target.value);
    if (newValue >= min && newValue <= max) {
      setValue(newValue);
    }
  };

  return (
    <div style={styles.container}>
      <button onClick={handleDecrement} style={styles.button}>-</button>
      <input
        type="number"
        value={value}
        onChange={handleChange}
        style={styles.input}
      />
      <button onClick={handleIncrement} style={styles.button}>+</button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    padding: '5px 10px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  input: {
    width: '60px',
    textAlign: 'center',
    fontSize: '16px',
    margin: '0 10px',
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
};

export default NumberField;


export const EditSetsAndReps = ({ children, ...props }) => (
  <div style={{ display: "flex",margin : "5px",justifyContent : "space-between"}}>
    <LightText sx = {{color: "black",fontSize: "18px"}}> {children} </LightText>
    <NumberField min={0} max={10} step={1} />
  </div>
);