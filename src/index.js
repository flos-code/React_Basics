import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './components/App';
import reportWebVitals from './reportWebVitals';
import { Apple } from './components/Apple';
import { Countdown } from './components/Countdown';
import { CountdownMemo } from './components/CountdownMemo';
import { Stopuhr } from './components/stopuhr';
import { CourseOverview } from './components/CourseOverview';
import { Button } from './components/Button';
import { Status } from './components/Status';
import { LinkOverview } from './components/LinkOverview';
import { MousePosition } from './components/MousePosition';

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
    {/* <Stopuhr /> */}
    {/* <CourseOverview /> */}
    {/* <Button /> */}
    {/* <Status /> */}
    {/* <LinkOverview /> */}
    <MousePosition />
  </React.StrictMode>
);

