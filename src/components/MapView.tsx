/* eslint import/no-webpack-loader-syntax: off */

import { useContext, useLayoutEffect, useRef } from 'react';
//@ts-ignore
import mapboxgl from '!mapbox-gl';

import { PlacesContext, MapContext } from '../context';
import { Loading } from './Loading';

export const MapView = () => {
  const { isLoading, userLocation } = useContext(PlacesContext);
  const { setMap } = useContext(MapContext);

  const mapDiv = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!isLoading) {
      if (!mapboxgl.supported()) {
        alert('Your browser does not support Mapbox GL');
      } else {
        const map = new mapboxgl.Map({
          container: mapDiv.current!, // container ID
          style: 'mapbox://styles/mapbox/light-v10', // style URL
          center: userLocation, // starting position [lng, lat]
          zoom: 15, // starting zoom
        });

        setMap(map);
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      ref={mapDiv}
      style={{
        height: '100vh',
        left: '0',
        position: 'fixed',
        top: '0',
        width: '100vw',
      }}
    ></div>
  );
};

export default MapView;
