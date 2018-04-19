import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import chordProgressions from './constant/chord_progressions'
import chordName from './constant/chord_name'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App
    chordProgressionsData={chordProgressions}
    chordName={chordName}
  />,
  document.getElementById('root')
);

registerServiceWorker();
