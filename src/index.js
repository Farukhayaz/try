import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
export const NameData = createContext();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <NameData.Provider value={"WiFI"}>
    <App />
  </NameData.Provider>
);




