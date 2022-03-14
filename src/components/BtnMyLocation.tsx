import { useContext } from 'react';
import { MapContext, PlacesContext } from '../context';

export const BtnMyLocation = () => {
  const { map, isMapReady } = useContext(MapContext);
  const { userLocation } = useContext(PlacesContext);

  const onClick = () => {
    if (!isMapReady) throw new Error('Maps is not ready');
    if (!userLocation) throw new Error('User location is not set');

    map?.flyTo({
      zoom: 15,
      center: userLocation,
    });
  };
  return (
    <div
      className='btn'
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 999,
        backgroundColor: '#61DAFB',
        color: '#ffffff',
      }}
      onClick={onClick}
    >
      My Location
    </div>
  );
};

export default BtnMyLocation;
