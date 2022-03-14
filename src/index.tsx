/* eslint import/no-webpack-loader-syntax: off */

import React from 'react';
import ReactDOM from 'react-dom';
import MapsApp from './MapsApp';

//@ts-ignore
import mapboxgl from '!mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
  'pk.eyJ1IjoibWFpZzA4MTgiLCJhIjoiY2wwcTR4bHI3MjZnYjNkcWtnbDZ1Ynd6bCJ9.8tjYdO5IsLJAjlD-90I8hg';

if (!navigator.geolocation) {
  alert('You need to allow Location in Browser to use this app');
  throw new Error('You need to allow Location in Browser to use this app');
}

ReactDOM.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>,
  document.getElementById('root')
);
