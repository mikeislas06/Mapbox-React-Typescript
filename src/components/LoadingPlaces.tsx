import React from 'react';
const LoadingPlaces = () => {
  return (
    <div
      className='alert mt-2 text-center'
      style={{ backgroundColor: 'rgb(97, 218, 251)', color: '#ffffff' }}
    >
      Loading...
      <p>Please wait...</p>
    </div>
  );
};

export default LoadingPlaces;
