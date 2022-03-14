import axios from 'axios';

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token:
      'pk.eyJ1IjoibWFpZzA4MTgiLCJhIjoiY2wwcTR4bHI3MjZnYjNkcWtnbDZ1Ynd6bCJ9.8tjYdO5IsLJAjlD-90I8hg',
  },
});

export default directionsApi;
