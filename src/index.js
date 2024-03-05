import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';
import reportWebVitals from './reportWebVitals';
import { Apple } from './components/Apple';
import { Countdown } from './components/Countdown';
import { CountdownMemo } from './components/CountdownMemo';
import { Stopuhr } from './components/stopuhr';

const nameObj = {
  prename: 'Florian',
  lastname: 'Scholz'
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(



  <React.StrictMode>
    {/* <App title="test" name="Hans" nameObj={nameObj}>
      <p>Hier steht text</p>
    </App> */}
    {/* <Apple /> */}
    {/* <Countdown /> */}
    {/* <CountdownMemo /> */}
    <Stopuhr />
  </React.StrictMode>
);

