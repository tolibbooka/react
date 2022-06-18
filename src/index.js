import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {DataContextProvider} from './11-darst/DataContext';
import { ReducerContextProvider } from './21-darst/api/ReducerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <DataContextProvider>
  <ReducerContextProvider>
       <App />
  </ReducerContextProvider>
   
  // </DataContextProvider>
  // </React.StrictMode>

);

reportWebVitals();
