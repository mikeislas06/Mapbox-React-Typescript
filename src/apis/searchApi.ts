import axios from 'axios';

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    language: 'es',
    access_token:
      'pk.eyJ1IjoibWFpZzA4MTgiLCJhIjoiY2wwcTR4bHI3MjZnYjNkcWtnbDZ1Ynd6bCJ9.8tjYdO5IsLJAjlD-90I8hg',
  },
});

export default searchApi;
