import React from 'react';
import { ENGINE_CONSTANTS } from '../constants/engine-const';

const EngineComponent = () => {
  return (
    <div>
      <h1>Engine Constants</h1>
      <ul>
        {Object.keys(ENGINE_CONSTANTS).map((key) => (
          <li key={key}>
            {key}: {ENGINE_CONSTANTS[key]}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EngineComponent;
